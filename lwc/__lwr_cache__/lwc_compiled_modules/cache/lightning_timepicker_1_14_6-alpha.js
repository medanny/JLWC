import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./timepicker.html";
/* eslint-disable @lwc/lwc/no-api-reassignments */

import labelInvalidDate from '@salesforce/label/LightningDateTimePicker.invalidDate';
import labelRangeOverflow from '@salesforce/label/LightningDateTimePicker.rangeOverflow';
import labelRangeUnderflow from '@salesforce/label/LightningDateTimePicker.rangeUnderflow';
import labelRequired from '@salesforce/label/LightningControl.required';
import shortTimeFormat from '@salesforce/i18n/dateTime.shortTimeFormat';
import mediumTimeFormat from '@salesforce/i18n/dateTime.mediumTimeFormat';
import { getTimeToHighlight } from './utils';
import { classSet, formatLabel } from 'lightning/utils';
import { isBefore, isAfter, formatTime, parseTime, getISOTimeString, normalizeISOTime, normalizeFormattedTime } from 'lightning/internationalizationLibrary';
import { removeTimeZoneSuffix } from 'lightning/iso8601Utils';
import { normalizeBoolean, synchronizeAttrs, normalizeString } from 'lightning/utilsPrivate';
import { normalizeVariant, VARIANT } from 'lightning/inputUtils';
const i18n = {
  invalidDate: labelInvalidDate,
  rangeOverflow: labelRangeOverflow,
  rangeUnderflow: labelRangeUnderflow,
  required: labelRequired
};
const STEP = 15; // in minutes
const TIME_STYLE = {
  SHORT: 'short',
  MEDIUM: 'medium',
  LONG: 'long'
};
class LightningTimePicker extends LightningElement {
  constructor(...args) {
    super(...args);
    this._disabled = false;
    this._required = false;
    this._displayValue = null;
    this._value = null;
    this._min = void 0;
    this._max = void 0;
    this._items = [];
    this._fieldLevelHelp = void 0;
    this._variant = 'lookup';
    this._mainInputId = void 0;
    this._errorMessage = void 0;
    this._readonly = true;
    this._describedByElements = [];
    /**
     * Controls auto-filling of the input. Set the attribute to pass
     * through autocomplete values to be interpreted by the browser.
     * By default autocomplete is off to avoid overlap of dropdowns.
     * @type {string}
     */
    this.autocomplete = 'off';
    this.ariaLabelledByElement = void 0;
    this.ariaControlsElement = void 0;
    this.ariaLabel = void 0;
    this.label = void 0;
    this.name = void 0;
    this.placeholder = '';
    this.messageWhenValueMissing = void 0;
    this._ariaDescribedByElements = void 0;
  }
  get messageWhenBadInput() {
    return this._messageWhenBadInput || formatLabel(i18n.invalidDate, this.timeFormat);
  }
  set messageWhenBadInput(message) {
    this._messageWhenBadInput = message;
  }
  get messageWhenRangeOverflow() {
    // using isoValue since the manually entered time could have seconds/milliseconds and the locale format generally doesn't have this precision
    return this._messageWhenRangeOverflow || formatLabel(i18n.rangeOverflow, normalizeISOTime(this.max, this.timeFormat).isoValue);
  }
  set messageWhenRangeOverflow(message) {
    this._messageWhenRangeOverflow = message;
  }
  get messageWhenRangeUnderflow() {
    return this._messageWhenRangeUnderflow || formatLabel(i18n.rangeUnderflow, normalizeISOTime(this.min, this.timeFormat).isoValue);
  }
  set messageWhenRangeUnderflow(message) {
    this._messageWhenRangeUnderflow = message;
  }
  set ariaDescribedByElements(el) {
    if (Array.isArray(el)) {
      this._ariaDescribedByElements = el;
    } else {
      this.ariaDescribedByElements = [el];
    }
  }
  get ariaDescribedByElements() {
    return this._ariaDescribedByElements;
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    const normalizedValue = removeTimeZoneSuffix(newValue);
    const normalizedTime = normalizeISOTime(normalizedValue, this.timeFormat);
    this._value = normalizedTime.isoValue;
    this._displayValue = normalizedTime.displayValue;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }
  get readOnly() {
    return this._readonly;
  }
  set readOnly(value) {
    this._readonly = normalizeBoolean(value);
    if (this._readonly) {
      this._variant = VARIANT.STANDARD;
    }
  }
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = normalizeBoolean(value);
  }
  hasBadInput() {
    return !!this._displayValue && this._value === null;
  }
  showHelpMessage(message) {
    if (!message) {
      this.classList.remove('slds-has-error');
      this._errorMessage = '';
    } else {
      this.classList.add('slds-has-error');
      this._errorMessage = message;
    }
  }
  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }
  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }
  get variant() {
    return this._variant || VARIANT.STANDARD;
  }
  set variant(value) {
    this._variant = normalizeVariant(value);
  }
  get max() {
    return this._max;
  }
  set max(newValue) {
    this._max = newValue;
    if (this.connected) {
      this.rebuildAndUpdateTimeList();
    }
  }
  get min() {
    return this._min;
  }
  set min(newValue) {
    this._min = newValue;
    if (this.connected) {
      this.rebuildAndUpdateTimeList();
    }
  }

  /**
   * Sets focus on the input element.
   */
  focus() {
    if (this.connected) {
      this.getCombobox().focus();
    }
  }

  /**
   * Removes keyboard focus from the input element.
   */
  blur() {
    if (this.connected) {
      this.getCombobox().blur();
    }
  }
  get timeStyle() {
    return this._timeStyle;
  }
  set timeStyle(value) {
    this._timeStyle = normalizeString(value, {
      fallbackValue: TIME_STYLE.SHORT,
      validValues: [TIME_STYLE.SHORT, TIME_STYLE.MEDIUM, TIME_STYLE.LONG]
    });
    this.timeFormat = this.getTimeFormatFromStyle(this._timeStyle);
    const normalizedDate = normalizeISOTime(this._value, this.timeFormat);
    this._displayValue = normalizedDate.displayValue;
  }
  connectedCallback() {
    this.connected = true;
  }
  disconnectedCallback() {
    this.connected = false;
  }
  synchronizeA11y() {
    const label = this.template.querySelector('label');
    const comboBox = this.template.querySelector('lightning-base-combobox');
    let describedByElements = [];
    if (this._ariaDescribedByElements) {
      describedByElements = describedByElements.concat(this._ariaDescribedByElements);
    }
    const errorMessage = this.template.querySelector('[data-error-message]');
    if (errorMessage) {
      describedByElements.push(errorMessage);
    }
    comboBox.inputDescribedByElements = describedByElements;
    synchronizeAttrs(label, {
      for: this._mainInputId
    });
  }
  renderedCallback() {
    this.synchronizeA11y();
  }
  get displayValue() {
    return this._displayValue;
  }
  get items() {
    return this._items;
  }
  get i18n() {
    return i18n;
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  handleReady(e) {
    this._mainInputId = e.detail.id;
  }
  buildTimeList() {
    // We should always display the options in the short style since m/l will add an extra :00 to the options.
    const optionsTimeFormat = shortTimeFormat;
    const timeList = [];
    const minTime = parseTime(removeTimeZoneSuffix(this.min));
    const minHour = minTime ? minTime.getHours() : 0;
    const maxTime = parseTime(removeTimeZoneSuffix(this.max));
    const maxHour = maxTime ? maxTime.getHours() + 1 : 24;
    const date = new Date();
    for (let hour = minHour; hour < maxHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += STEP) {
        date.setHours(hour, minutes);
        date.setSeconds(0, 0);
        if (this.isBeforeMinTime(date, minTime)) {
          continue; // eslint-disable-line no-continue
        }
        if (this.isAfterMaxTime(date, maxTime)) {
          break;
        }

        // @todo: should we always display it short in the combobox given that it makes no sense?
        timeList.push({
          type: 'option-inline',
          text: this.format(date, optionsTimeFormat),
          value: this.format(date)
        });
      }
    }
    return timeList;
  }
  get timeList() {
    if (!this._timeList) {
      this._timeList = this.buildTimeList();
    }
    if (!this._value) {
      return this._timeList;
    }
    const timeToHighlight = getTimeToHighlight(this._value, STEP);
    const timeList = this._timeList.map(item => {
      const itemCopy = Object.assign({}, item);
      if (item.value === this._value) {
        itemCopy.iconName = 'utility:check';
        itemCopy.checked = true;
      } else {
        itemCopy.checked = false;
      }
      if (item.value === timeToHighlight) {
        itemCopy.highlight = true;
      }
      return itemCopy;
    });
    return timeList;
  }
  rebuildAndUpdateTimeList() {
    // forcing the time list to be rebuilt
    this._timeList = null;
    this._items = this.timeList;
  }
  get timeFormat() {
    if (!this._timeFormat) {
      this._timeFormat = this.getTimeFormatFromStyle();
    }
    return this._timeFormat;
  }
  set timeFormat(value) {
    this._timeFormat = value;
  }
  getCombobox() {
    return this.template.querySelector('lightning-base-combobox');
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleInputChange(event) {
    event.preventDefault();
    event.stopPropagation();

    // keeping the display value in sync with the element's value
    this._displayValue = event.detail.text;
    this._value = this.parseFormattedTime(this._displayValue);
    this._items = this.timeList;
    this.dispatchChangeEvent();
  }
  handleTextInput(event) {
    event.preventDefault();
    event.stopPropagation();

    // keeping the display value in sync with the element's value
    this._displayValue = event.detail.text;
  }
  handleTimeSelect(event) {
    event.stopPropagation();

    // for some reason this event is fired without detail from grouped-combobox
    if (!event.detail) {
      return;
    }
    this._value = event.detail.value;
    this._displayValue = normalizeISOTime(this._value, this.timeFormat).displayValue;
    this._items = this.timeList;
    this.dispatchChangeEvent();
  }
  handleDropdownOpenRequest() {
    this._items = this.timeList;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        value: this._value
      }
    }));
  }
  format(date, formatString) {
    if (formatString) {
      return formatTime(date, formatString);
    }
    return getISOTimeString(date);
  }
  isBeforeMinTime(date, minTime) {
    const minDate = minTime || parseTime(removeTimeZoneSuffix(this.min));
    return minDate ? isBefore(date, minDate, 'minute') : false;
  }
  isAfterMaxTime(date, maxTime) {
    const maxDate = maxTime || parseTime(removeTimeZoneSuffix(this.max));
    return maxDate ? isAfter(date, maxDate, 'minute') : false;
  }
  getTimeFormatFromStyle(timeStyle) {
    let timeFormat;
    switch (timeStyle) {
      case TIME_STYLE.MEDIUM:
      case TIME_STYLE.LONG:
        timeFormat = mediumTimeFormat;
        break;
      default:
        timeFormat = shortTimeFormat;
        break;
    }
    return timeFormat;
  }
  get allowedTimeFormats() {
    // the locale.timeFormat is the medium format. Locale dont supports a large
    // time format at the moment.
    return [mediumTimeFormat, shortTimeFormat];
  }

  /**
   * Parses the input time and sets the timeFormat used to parse the displayValue
   * if it is a valid time.
   *
   * @param {String} displayValue - The input date.
   * @return {null | string} - A normalized formatted time if displayValue is valid. null otherwise.
   */
  parseFormattedTime(displayValue) {
    const allowedFormats = this.allowedTimeFormats;
    const n = allowedFormats.length;
    let i = 0,
      value = null;
    do {
      value = normalizeFormattedTime(displayValue, allowedFormats[i]);
      i++;
    } while (value === null && i < n);
    if (value !== null) {
      this.timeFormat = allowedFormats[i - 1];
    }
    return value;
  }
  get hasExternalLabel() {
    return this.variant === VARIANT.LABEL_HIDDEN && this.ariaLabelledByElement && this.ariaLabelledByElement.length;
  }
  /*LWC compiler v5.0.0*/
}
LightningTimePicker.delegatesFocus = true;
_registerDecorators(LightningTimePicker, {
  publicProps: {
    autocomplete: {
      config: 0
    },
    ariaLabelledByElement: {
      config: 0
    },
    ariaControlsElement: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    label: {
      config: 0
    },
    name: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    messageWhenBadInput: {
      config: 3
    },
    messageWhenRangeOverflow: {
      config: 3
    },
    messageWhenRangeUnderflow: {
      config: 3
    },
    ariaDescribedByElements: {
      config: 3
    },
    value: {
      config: 3
    },
    disabled: {
      config: 3
    },
    readOnly: {
      config: 3
    },
    required: {
      config: 3
    },
    fieldLevelHelp: {
      config: 3
    },
    variant: {
      config: 3
    },
    max: {
      config: 3
    },
    min: {
      config: 3
    },
    timeStyle: {
      config: 3
    }
  },
  publicMethods: ["hasBadInput", "showHelpMessage", "focus", "blur"],
  track: {
    _disabled: 1,
    _required: 1,
    _displayValue: 1,
    _value: 1,
    _min: 1,
    _max: 1,
    _items: 1,
    _fieldLevelHelp: 1,
    _variant: 1,
    _mainInputId: 1,
    _errorMessage: 1,
    _readonly: 1,
    _describedByElements: 1
  },
  fields: ["_ariaDescribedByElements"]
});
export default _registerComponent(LightningTimePicker, {
  tmpl: _tmpl,
  sel: "lightning-timepicker",
  apiVersion: 60
});