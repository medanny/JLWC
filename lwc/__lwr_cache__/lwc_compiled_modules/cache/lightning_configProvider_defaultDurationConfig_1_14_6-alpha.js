import _tmpl from "./defaultDurationConfig.html";
import { registerComponent as _registerComponent } from "lwc";
// inspired by the duration logic in moment.js (extremely simplified) https://github.com/moment/moment
// Only using this in defaultConfig when we're outside of an aura context.
// Reasons for this are because the Intl api currently doesn't match the existing text formats:
// e.g. format(1, 'day') returns 'in 1 day' or 'tomorrow' (numeric=always/auto) in chrome, the existing moment implementation returns 'in a day'
// Intl.RelativeTimeFormat is also only supported by a handful of browsers (as of 220):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat#Browser_compatibility

// The following two labels will be used even on browsers that support Intl.RelativeTimeFormat
import labelSecondsLater from '@salesforce/label/Duration.secondsLater';
import labelSecondsAgo from '@salesforce/label/Duration.secondsAgo';
import { formatLabel } from 'lightning/utils';

// These labels will only be used as fallback in browsers that do not support Intl.RelativeTimeFormat
const fallbackFutureLabel = 'in {0} {1}'; // e.g. in 1 minute
const fallbackPastLabel = '{0} {1} ago'; // e.g. 1 minute ago
const fallbackPluralSuffix = 's'; // plural suffix for the units, e.g. in 10 minutes

// The threshold values come from moment.js
const units = {
  SECONDS: {
    name: 'second',
    threshold: 45
  },
  // a few seconds to minute
  MINUTES: {
    name: 'minute',
    threshold: 45
  },
  // minutes to hour
  HOURS: {
    name: 'hour',
    threshold: 22
  },
  // hours to day
  DAYS: {
    name: 'day',
    threshold: 26
  },
  // days to month
  MONTHS: {
    name: 'month',
    threshold: 11
  },
  // months to year
  YEARS: {
    name: 'year'
  }
};
const SECOND_TO_MILLISECONDS = 1000;
const MINUTE_TO_MILLISECONDS = 6e4; // 60 * SECOND_TO_MILLISECONDS;
const HOUR_TO_MILLISECONDS = 36e5; // 60 * MINUTE_TO_MILLISECONDS
const DAY_TO_MILLISECONDS = 864e5; // 24 * HOUR_TO_MILLISECONDS;

class Duration {
  constructor(milliseconds) {
    this.milliseconds = 0;
    if (typeof milliseconds !== 'number') {
      this.isValid = false;
      // eslint-disable-next-line no-console
      console.warn(`The value of milliseconds passed into Duration must be of type number,
                but we are getting the ${typeof milliseconds} value "${milliseconds}" instead.
                `);
      return;
    }
    this.isValid = true;
    this.milliseconds = milliseconds;
  }
  humanize(locale) {
    if (!this.isValid) {
      return '';
    }
    const unit = findBestUnitMatch(this);
    if (unit === units.SECONDS) {
      const isLater = this.milliseconds > 0;
      return isLater ? labelSecondsLater : labelSecondsAgo;
    }
    return format(locale, this.asIn(unit), unit.name);
  }
  asIn(unit) {
    switch (unit) {
      case units.SECONDS:
        return Math.round(this.milliseconds / SECOND_TO_MILLISECONDS);
      case units.MINUTES:
        return Math.round(this.milliseconds / MINUTE_TO_MILLISECONDS);
      case units.HOURS:
        return Math.round(this.milliseconds / HOUR_TO_MILLISECONDS);
      case units.DAYS:
        return Math.round(this.milliseconds / DAY_TO_MILLISECONDS);
      case units.MONTHS:
        return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS));
      case units.YEARS:
      default:
        return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS) / 12);
    }
  }
}
export default _registerComponent(Duration, {
  tmpl: _tmpl,
  sel: "lightning-config-provider",
  apiVersion: 60
});
function daysToMonth(days) {
  // 400 years have 146097 days (taking into account leap year rules)
  // 400 years have 12 months === 4800
  const daysToMonthRatio = 4800 / 146097;
  return days * daysToMonthRatio;
}
function findBestUnitMatch(duration) {
  // Traversing the object keys in order from Seconds to Years
  // http://exploringjs.com/es6/ch_oop-besides-classes.html#_traversal-order-of-properties
  const match = Object.keys(units).find(key => {
    const unit = units[key];
    // Year is the max and doesn't have a threshold
    return unit === units.YEARS || Math.abs(duration.asIn(unit)) < unit.threshold;
  });
  return units[match];
}
function format(locale, value, unit) {
  if ('Intl' in window && Intl.RelativeTimeFormat) {
    const formatter = new Intl.RelativeTimeFormat(locale, {
      style: 'long',
      numeric: 'always'
    });
    return formatter.format(value, unit);
  }
  return fallbackFormatter(value, unit);
}
function fallbackFormatter(value, unit) {
  // eslint-disable-next-line no-console
  console.warn(`The current environment does not support formatters for relative time.`);
  const absoluteValue = Math.abs(value);
  const unitString = absoluteValue !== 1 ? unit + fallbackPluralSuffix : unit;
  const label = value > 0 ? fallbackFutureLabel : fallbackPastLabel;
  return formatLabel(label, absoluteValue, unitString);
}