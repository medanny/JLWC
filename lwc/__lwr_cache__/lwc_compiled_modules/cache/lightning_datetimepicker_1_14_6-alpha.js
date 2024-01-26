import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./datetimepicker.html";
import labelDate from '@salesforce/label/LightningDateTimePicker.dateLabel';
import labelRangeOverflow from '@salesforce/label/LightningDateTimePicker.rangeOverflow';
import labelRangeUnderflow from '@salesforce/label/LightningDateTimePicker.rangeUnderflow';
import labelTime from '@salesforce/label/LightningDateTimePicker.timeLabel';
import { classSet, formatLabel } from 'lightning/utils';
import { normalizeBoolean, normalizeAriaAttribute, synchronizeAttrs, getRealDOMId } from 'lightning/utilsPrivate';
import { getCurrentTime, normalizeISODateTime, normalizeFormattedDateTime } from 'lightning/internationalizationLibrary';
import { TIME_SEPARATOR } from 'lightning/iso8601Utils';
import { generateUniqueId, InteractingState, normalizeVariant, VARIANT } from 'lightning/inputUtils';
const i18n = {
  date: labelDate,
  rangeOverflow: labelRangeOverflow,
  rangeUnderflow: labelRangeUnderflow,
  time: labelTime
};
class LightningDateTimePicker extends LightningElement {
  // getters and setters necessary to trigger sync
  set timeAriaControls(val) {
    this._timeAriaControls = val;
    this.synchronizeA11y();
  }
  get timeAriaControls() {
    return this._timeAriaControls;
  }
  set timeAriaLabelledBy(val) {
    this._timeAriaLabelledBy = val;
    this.synchronizeA11y();
  }
  get timeAriaLabelledBy() {
    return this._timeAriaLabelledBy;
  }
  set timeAriaDescribedBy(val) {
    this._timeAriaDescribedBy = val;
    this.synchronizeA11y();
  }
  get timeAriaDescribedBy() {
    return this._timeAriaDescribedBy;
  }
  get messageWhenBadInput() {
    if (this._messageWhenBadInput) {
      return this._messageWhenBadInput;
    } else if (this.hasBadDateInput) {
      return this.getDatepicker().messageWhenBadInput;
    } else if (this.hasBadTimeInput) {
      return this.getTimepicker().messageWhenBadInput;
    }
    return null;
  }
  set messageWhenBadInput(message) {
    this._messageWhenBadInput = message;
  }
  get messageWhenRangeOverflow() {
    return this._messageWhenRangeOverflow || formatLabel(i18n.rangeOverflow, this.formattedMax);
  }
  set messageWhenRangeOverflow(message) {
    this._messageWhenRangeOverflow = message;
  }
  get messageWhenRangeUnderflow() {
    return this._messageWhenRangeUnderflow || formatLabel(i18n.rangeUnderflow, this.formattedMin);
  }
  set messageWhenRangeUnderflow(message) {
    this._messageWhenRangeUnderflow = message;
  }
  get max() {
    return this.maxValue;
  }
  set max(newValue) {
    this.maxValue = newValue;
    this.calculateFormattedMaxValue();
  }
  get min() {
    return this.minValue;
  }
  set min(newValue) {
    this.minValue = newValue;
    this.calculateFormattedMinValue();
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this.connected) {
      this.setDateAndTimeValues(newValue);
    } else {
      // we set the values in connectedCallback to make sure timezone is available.
      this._initialValue = newValue;
    }
  }
  get timezone() {
    return this._timezone;
  }
  set timezone(newValue) {
    this._timezone = newValue;
    if (this.connected) {
      this.updateValuesForTimezone();
    }
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
  }
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = normalizeBoolean(value);
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

  /**
   * Sets focus on the date input element.
   */
  focus() {
    if (this.connected) {
      this.getDatepicker().focus();
    }
  }

  /**
   * Removes keyboard focus from the input elements.
   */
  blur() {
    if (this.connected) {
      this.getDatepicker().blur();
      this.getTimepicker().blur();
    }
  }
  hasBadInput() {
    return this.connected && (this.hasBadDateInput || this.hasBadTimeInput);
  }
  get hasBadDateInput() {
    return this.getDatepicker().hasBadInput();
  }
  get hasBadTimeInput() {
    const timeBadInput = this.getTimepicker().hasBadInput();
    const timeMissing = this.required && this._dateValue && !this._timeValue;
    return timeMissing || timeBadInput;
  }
  showHelpMessage(message) {
    if (!this.connected) {
      return;
    }
    if (!message) {
      this.clearHelpMessage();
      return;
    }
    if (this.hasBadDateInput && !this._messageWhenBadInput) {
      this.clearHelpMessage();
      this.getDatepicker().showHelpMessage(message);
      return;
    }
    if (this.hasBadTimeInput && !this._messageWhenBadInput) {
      this.clearHelpMessage();
      this.getTimepicker().showHelpMessage(message);
      return;
    }
    this.classList.add('slds-has-error');
    this._customErrorMessage = message;
  }
  clearHelpMessage() {
    this.classList.remove('slds-has-error');
    this._customErrorMessage = '';
    this.getDatepicker().showHelpMessage('');
    this.getTimepicker().showHelpMessage('');
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get computedLabelClass() {
    return classSet('slds-form-element__legend slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  get i18n() {
    return i18n;
  }
  get customErrorMessage() {
    return this._customErrorMessage;
  }
  get dateMin() {
    return this._dateMin;
  }
  get dateMax() {
    return this._dateMax;
  }
  get errorMessageElementId() {
    return getRealDOMId(this.template.querySelector('[data-error-message]'));
  }
  get computedDateAriaDescribedBy() {
    const ariaValues = [];
    if (this.customErrorMessage) {
      ariaValues.push(this.errorMessageElementId);
    }
    if (this.dateAriaDescribedBy) {
      ariaValues.push(this.dateAriaDescribedBy);
    }
    return normalizeAriaAttribute(ariaValues);
  }
  get computedTimeAriaDescribedBy() {
    const ariaValues = [];
    if (this.customErrorMessage) {
      ariaValues.push(this.errorMessageElementId);
    }
    if (this.timeAriaDescribedBy) {
      ariaValues.push(this.timeAriaDescribedBy);
    }
    return normalizeAriaAttribute(ariaValues);
  }
  get hasExternalLabel() {
    return this.variant === VARIANT.LABEL_HIDDEN && this.timeAriaLabelledBy && this.timeAriaLabelledBy.length && this.dateAriaLabelledBy && this.dateAriaLabelledBy.length;
  }
  constructor() {
    super();
    this._disabled = false;
    this._readonly = false;
    this._required = false;
    this._fieldLevelHelp = void 0;
    this._variant = void 0;
    this._value = null;
    this._timezone = null;
    this._customErrorMessage = '';
    this._dateMin = void 0;
    this._dateMax = void 0;
    this.label = void 0;
    this.name = void 0;
    this.placeholder = '';
    this.dateStyle = void 0;
    this.timeStyle = void 0;
    this.timeAriaLabel = void 0;
    /**
     * Controls auto-filling of the input. Set the attribute to pass
     * through autocomplete values to be interpreted by the browser.
     * By default autocomplete is off to avoid overlap of dropdowns.
     * @type {string}
     */
    this.autocomplete = 'off';
    this.dateAriaControls = void 0;
    this.dateAriaLabel = void 0;
    this.dateAriaLabelledBy = void 0;
    this.dateAriaDescribedBy = void 0;
    this.messageWhenValueMissing = void 0;
    this.uniqueId = generateUniqueId();
  }
  synchronizeA11y() {
    const datepicker = this.template.querySelector('lightning-datepicker');
    const timepicker = this.template.querySelector('lightning-timepicker');
    if (datepicker) {
      synchronizeAttrs(datepicker, {
        ariaLabelledByElement: this.dateAriaLabelledBy,
        ariaDescribedByElements: this.computedDateAriaDescribedBy,
        ariaControlsElement: this.dateAriaControls,
        'aria-label': this.dateAriaLabel
      });
    }
    if (timepicker) {
      synchronizeAttrs(timepicker, {
        ariaLabelledByElement: this.timeAriaLabelledBy,
        ariaDescribedByElements: this.computedTimeAriaDescribedBy,
        ariaControlsElement: this.timeAriaControls,
        'aria-label': this.timeAriaLabel
      });
    }
  }
  connectedCallback() {
    this.connected = true;

    // we set the initial values here in order to make sure timezone is available.
    this.updateValuesForTimezone(this._initialValue);
    this.interactingState = new InteractingState({
      debounceInteraction: true
    });
    this.interactingState.onenter(() => {
      this.dispatchEvent(new CustomEvent('focus'));
    });
    this.interactingState.onleave(() => {
      this.dispatchEvent(new CustomEvent('blur'));
    });
  }
  renderedCallback() {
    this.synchronizeA11y();
  }
  disconnectedCallback() {
    this.connected = false;
  }
  getTimepicker() {
    return this.template.querySelector('lightning-timepicker');
  }
  getDatepicker() {
    return this.template.querySelector('lightning-datepicker');
  }
  handleDatepickerFocus() {
    this._dateFocus = true;
    this.interactingState.enter();
  }
  handleTimepickerFocus() {
    this._timeFocus = true;
    this.interactingState.enter();
  }
  handleDatepickerBlur() {
    this._dateFocus = false;

    // timepicker fires focus before datepicker fires blur
    if (!this._timeFocus) {
      this.interactingState.leave();
    }
  }
  handleTimepickerBlur() {
    this._timeFocus = false;

    // datepicker fires focus before timepicker fires blur
    if (!this._dateFocus) {
      this.interactingState.leave();
    }
  }
  handleDateChange(event) {
    event.stopPropagation();
    if (!event.detail) {
      return;
    }
    this._dateValue = event.detail.value;
    if (this._dateValue) {
      this._timeValue = this._timeValue || getCurrentTime(this.timezone);
      this.setTimepickerValue(this._timeValue);
    }
    this.updateValue();
  }
  handleTimeChange(event) {
    event.stopPropagation();
    if (!event.detail) {
      return;
    }
    this._timeValue = event.detail.value;
    this.updateValue();
  }
  updateValue() {
    const dateValue = this._dateValue;
    const timeValue = this._timeValue;
    if (dateValue && timeValue) {
      const dateTimeString = dateValue + TIME_SEPARATOR + timeValue;
      this._value = normalizeFormattedDateTime(dateTimeString, this.timezone);
      this.dispatchChangeEvent();
    } else if (!dateValue) {
      this._value = null;
      this.dispatchChangeEvent();
    }
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
  updateValuesForTimezone(datetimeValue) {
    this.setDateAndTimeValues(datetimeValue || this._value);
    this.calculateFormattedMinValue();
    this.calculateFormattedMaxValue();
  }
  setDateAndTimeValues(value) {
    const normalizedValue = normalizeISODateTime(value, this.timezone).isoValue;
    const isDateOnly = normalizedValue && value.indexOf(TIME_SEPARATOR) < 0;
    if (isDateOnly) {
      this._dateValue = value;
      this._value = this._dateValue;
      this.setDatepickerValue(value);
      return;
    }
    const dateAndTime = this.separateDateTime(normalizedValue);
    this._dateValue = dateAndTime && dateAndTime[0];
    this._timeValue = dateAndTime && dateAndTime[1];
    this._value = value;
    this.setDatepickerValue(this._dateValue);
    this.setTimepickerValue(this._timeValue);
  }
  setDatepickerValue(value) {
    const datepicker = this.getDatepicker();
    if (datepicker) {
      datepicker.value = value;
    }
  }
  setTimepickerValue(value) {
    const timepicker = this.getTimepicker();
    if (timepicker) {
      timepicker.value = value;
    }
  }
  calculateFormattedMinValue() {
    if (!this.min) {
      return;
    }
    const normalizedDate = normalizeISODateTime(this.min, this.timezone);
    this._dateMin = this.separateDateTime(normalizedDate.isoValue)[0];
    this.formattedMin = normalizedDate.displayValue;
  }
  calculateFormattedMaxValue() {
    if (!this.max) {
      return;
    }
    const normalizedDate = normalizeISODateTime(this.max, this.timezone);
    this._dateMax = this.separateDateTime(normalizedDate.isoValue)[0];
    this.formattedMax = normalizedDate.displayValue;
  }
  separateDateTime(isoString) {
    return typeof isoString === 'string' ? isoString.split(TIME_SEPARATOR) : null;
  }
  /*LWC compiler v5.0.0*/
}
LightningDateTimePicker.delegatesFocus = true;
_registerDecorators(LightningDateTimePicker, {
  publicProps: {
    label: {
      config: 0
    },
    name: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    dateStyle: {
      config: 0
    },
    timeStyle: {
      config: 0
    },
    timeAriaLabel: {
      config: 0
    },
    autocomplete: {
      config: 0
    },
    timeAriaControls: {
      config: 3
    },
    timeAriaLabelledBy: {
      config: 3
    },
    timeAriaDescribedBy: {
      config: 3
    },
    dateAriaControls: {
      config: 0
    },
    dateAriaLabel: {
      config: 0
    },
    dateAriaLabelledBy: {
      config: 0
    },
    dateAriaDescribedBy: {
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
    max: {
      config: 3
    },
    min: {
      config: 3
    },
    value: {
      config: 3
    },
    timezone: {
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
    }
  },
  publicMethods: ["focus", "blur", "hasBadInput", "showHelpMessage"],
  track: {
    _disabled: 1,
    _readonly: 1,
    _required: 1,
    _fieldLevelHelp: 1,
    _variant: 1,
    _value: 1,
    _timezone: 1,
    _customErrorMessage: 1,
    _dateMin: 1,
    _dateMax: 1
  }
});
export default _registerComponent(LightningDateTimePicker, {
  tmpl: _tmpl,
  sel: "lightning-datetimepicker",
  apiVersion: 60
});