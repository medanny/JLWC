import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./datepicker.html";
import labelInvalidDate from '@salesforce/label/LightningDateTimePicker.invalidDate';
import labelRangeOverflow from '@salesforce/label/LightningDateTimePicker.rangeOverflow';
import labelRangeUnderflow from '@salesforce/label/LightningDateTimePicker.rangeUnderflow';
import labelMinRangeMessage from '@salesforce/label/LightningDateTimePicker.minRangeMessage';
import labelMaxRangeMessage from '@salesforce/label/LightningDateTimePicker.maxRangeMessage';
import labelMinAndMaxRangeMessage from '@salesforce/label/LightningDateTimePicker.minAndMaxRangeMessage';
import labelRequired from '@salesforce/label/LightningControl.required';
import labelSelectDateFor from '@salesforce/label/LightningDateTimePicker.selectDateFor';
import shortDateFormat from '@salesforce/i18n/dateTime.shortDateFormat';
import mediumDateFormat from '@salesforce/i18n/dateTime.mediumDateFormat';
import longDateFormat from '@salesforce/i18n/dateTime.longDateFormat';
import { parseDateTime, normalizeISODate, normalizeFormattedDate } from 'lightning/internationalizationLibrary';
import { STANDARD_DATE_FORMAT } from 'lightning/iso8601Utils';
import { startPositioning, stopPositioning, Direction } from 'lightning/positionLibrary';
import { classSet, formatLabel } from 'lightning/utils';
import { normalizeBoolean, normalizeAriaAttribute, normalizeString, synchronizeAttrs, getRealDOMId, isIE11 } from 'lightning/utilsPrivate';
import { generateUniqueId, normalizeVariant, VARIANT } from 'lightning/inputUtils';
import { handleKeyDownOnDatePickerIcon, handleBasicKeyDownBehaviour } from './keyboard';
const i18n = {
  invalidDate: labelInvalidDate,
  rangeOverflow: labelRangeOverflow,
  rangeUnderflow: labelRangeUnderflow,
  minRangeMessage: labelMinRangeMessage,
  maxRangeMessage: labelMaxRangeMessage,
  minAndMaxRangeMessage: labelMinAndMaxRangeMessage,
  required: labelRequired,
  selectDateFor: labelSelectDateFor
};
const ARIA_CONTROLS = 'aria-controls';
const ARIA_LABEL = 'aria-label';
const ARIA_LABELLEDBY = 'aria-labelledby';
const ARIA_DESCRIBEDBY = 'aria-describedby';
const DATE_STYLE = {
  SHORT: 'short',
  MEDIUM: 'medium',
  LONG: 'long'
};
class LightningDatePicker extends LightningElement {
  get min() {
    return this._min;
  }
  set min(value) {
    // W-7702418: We previously always set the raw value and should continue to do so unless
    // normalization of the given value is possible.
    this._min = value;
    this._displayMin = value;
    const normalizedDate = normalizeISODate(value, this.dateFormat);
    if (normalizedDate.isoValue) {
      this._min = normalizedDate.isoValue;
      this._displayMin = normalizedDate.displayValue;
    }
  }
  get max() {
    return this._max;
  }
  set max(value) {
    // W-7702418: We previously always set the raw value and should continue to do so unless
    // normalization of the given value is possible.
    this._max = value;
    this._displayMax = value;
    const normalizedDate = normalizeISODate(value, this.dateFormat);
    if (normalizedDate.isoValue) {
      this._max = normalizedDate.isoValue;
      this._displayMax = normalizedDate.displayValue;
    }
  }
  get messageWhenBadInput() {
    return this._messageWhenBadInput || formatLabel(this.i18n.invalidDate, this.dateFormat);
  }
  set messageWhenBadInput(message) {
    this._messageWhenBadInput = message;
  }
  get messageWhenRangeOverflow() {
    return this._messageWhenRangeOverflow || formatLabel(this.i18n.rangeOverflow, this._displayMax);
  }
  set messageWhenRangeOverflow(message) {
    this._messageWhenRangeOverflow = message;
  }
  get messageWhenRangeUnderflow() {
    return this._messageWhenRangeUnderflow || formatLabel(this.i18n.rangeUnderflow, this._displayMin);
  }
  set messageWhenRangeUnderflow(message) {
    this._messageWhenRangeUnderflow = message;
  }

  // setter is required to properly trigger update
  get ariaLabel() {
    return this._ariaLabel;
  }
  set ariaLabel(val) {
    this._ariaLabel = val;
    this.synchronizeA11y();
  }
  set ariaLabelledByElement(el) {
    this._ariaLabelledBy = el;
    this.synchronizeA11y();
  }
  get ariaLabelledByElement() {
    return this._ariaLabelledBy;
  }
  set ariaControlsElement(el) {
    this._ariaControls = el;
    this.synchronizeA11y();
  }
  get ariaControlsElement() {
    return this._ariaControls;
  }
  set ariaDescribedByElements(el) {
    if (Array.isArray(el)) {
      this._ariaDescribedBy = el;
    } else {
      this._ariaDescribedBy = [el];
    }
    this.synchronizeA11y();
  }
  get ariaDescribedByElements() {
    return this._ariaDescribedBy;
  }
  get ariaLabelledbyId() {
    return getRealDOMId(this._ariaLabelledBy);
  }
  get ariaControlsId() {
    return getRealDOMId(this.ariaControlsElement);
  }
  synchronizeA11y() {
    const input = this.template.querySelector('input');
    if (!input) {
      return;
    }
    synchronizeAttrs(input, {
      [ARIA_LABELLEDBY]: this.ariaLabelledbyId,
      [ARIA_DESCRIBEDBY]: this.computedAriaDescribedby,
      [ARIA_CONTROLS]: this.ariaControlsId,
      [ARIA_LABEL]: this._ariaLabel
    });

    // Set aria-describedby on the calendar button that opens the calendar dialog
    // to inform user of date validity (min/max). Same is done for input.
    const calendarButton = this.template.querySelector('lightning-button-icon');
    calendarButton.ariaDescribedBy = this.computedDatepickerButtonAriaDescribedby;
  }
  renderedCallback() {
    this.synchronizeA11y();
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    const normalizedDate = normalizeISODate(newValue, this.dateFormat);
    this._value = normalizedDate.isoValue;
    this._displayValue = normalizedDate.displayValue;
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
  focus() {
    if (this.connected) {
      this.inputElement.focus();
    }
  }
  blur() {
    if (this.connected) {
      this.inputElement.blur();
    }
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
  hasBadInput() {
    return !!this._displayValue && this._value === null;
  }
  get dateStyle() {
    return this._dateStyle;
  }
  set dateStyle(value) {
    this._dateStyle = normalizeString(value, {
      fallbackValue: DATE_STYLE.MEDIUM,
      validValues: [DATE_STYLE.SHORT, DATE_STYLE.MEDIUM, DATE_STYLE.LONG]
    });
    this.dateFormat = this.getDateFormatFromStyle(this._dateStyle);
    const normalizedDate = normalizeISODate(this._value, this.dateFormat);
    this._displayValue = normalizedDate.displayValue;
  }
  constructor() {
    super();
    this._disabled = false;
    this._readonly = false;
    this._required = false;
    this._value = null;
    this._calendarVisible = false;
    this._displayValue = null;
    this._errorMessage = '';
    this._fieldLevelHelp = void 0;
    this._variant = void 0;
    this._min = void 0;
    this._max = void 0;
    this._displayMin = void 0;
    this._displayMax = void 0;
    this.label = void 0;
    this.name = void 0;
    this.placeholder = void 0;
    /**
     * Controls auto-filling of the input. Set the attribute to pass
     * through autocomplete values to be interpreted by the browser.
     * By default autocomplete is off to avoid overlap of dropdown.
     * @type {string}
     */
    this.autocomplete = 'off';
    this.messageWhenValueMissing = void 0;
    this._ariaLabelledBy = void 0;
    this._ariaControls = void 0;
    this._ariaDescribedBy = [];
    this.uniqueId = generateUniqueId();
  }
  connectedCallback() {
    this.connected = true;
    this.keyboardInterface = this.datepickerKeyboardInterface();
  }
  disconnectedCallback() {
    this.connected = false;
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
  get computedUniqueErrorMessageElementId() {
    const el = this.template.querySelector('[data-error-message]');
    return getRealDOMId(el);
  }
  get computedUniqueRangeMessageElementId() {
    const el = this.template.querySelector('[data-range-message]');
    return getRealDOMId(el);
  }
  get isRangeMessageVisible() {
    return this.min || this.max;
  }
  get isCalendarVisible() {
    return this._calendarVisible;
  }
  get displayValue() {
    return this._displayValue;
  }
  get errorMessage() {
    return this._errorMessage;
  }
  get computedIconDisabledState() {
    return this.disabled || this.readOnly;
  }
  get computedAriaDescribedby() {
    const ariaValues = [];
    if (this.errorMessage) {
      ariaValues.push(this.computedUniqueErrorMessageElementId);
    }

    // To inform user of valid date ranges that are set via min/max attributes
    if (this.isRangeMessageVisible) {
      ariaValues.push(this.computedUniqueRangeMessageElementId);
    }
    this._ariaDescribedBy.forEach(item => {
      const id = getRealDOMId(item);
      if (id) {
        ariaValues.push(id);
      }
    });
    return normalizeAriaAttribute(ariaValues);
  }
  get computedDatepickerButtonAriaDescribedby() {
    if (this.isRangeMessageVisible) {
      return this.computedUniqueRangeMessageElementId;
    }
    return '';
  }
  get computedSelectDateLabel() {
    return formatLabel(this.i18n.selectDateFor, this.label);
  }
  get rangeMessage() {
    if (this.min && !this.max) {
      // If only min is set
      return formatLabel(this.i18n.minRangeMessage, this._displayMin);
    } else if (this.max && !this.min) {
      // If only max is set
      return formatLabel(this.i18n.maxRangeMessage, this._displayMax);
    } else if (this.min && this.max) {
      // If both min and max are set
      return formatLabel(this.i18n.minAndMaxRangeMessage, this._displayMin, this._displayMax);
    }
    return '';
  }
  handleInputChange(event) {
    event.stopPropagation();

    // keeping the display value in sync with the element's value
    this._displayValue = event.currentTarget.value;
    this._value = this.parseFormattedDate(this._displayValue);
    this.dispatchChangeEvent();
  }
  handleInput() {
    // keeping the display value in sync with the element's value
    this._displayValue = this.inputElement.value;

    // IE11 fires an input event along with the click event when the element has a placeholder.
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
    // remove this block when we stop support for IE11
    if (isIE11 && this.placeholder !== undefined) {
      return;
    }

    // Making sure that the focus remains on the input and we're not triggering leave
    this.hideCalendarAndFocusTrigger();
  }
  handleInputBlur() {
    if (this._value !== null) {
      const normalizedDate = normalizeISODate(this._value, this.dateFormat);
      this._displayValue = normalizedDate.displayValue;
    }
    this.onFocusOut();
  }
  handleInputClick(event) {
    if (this.readOnly) {
      return;
    }
    this.calendarTrigger = event.target;
    this.showCalendar();
  }

  /**
   * When the element gains focus this function is called.
   */
  onFocusIn() {
    if (this._pendingFocusOut) {
      this._pendingFocusOut = false;
    }
    if (!this._focused) {
      this.dispatchEvent(new CustomEvent('focus'));
    }
    this._focused = true;
  }

  /**
   * When the element looses its focus this function is called.
   */
  onFocusOut() {
    // This assumes that a focusin will be dispatched after a focusout
    this._pendingFocusOut = true;
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    requestAnimationFrame(() => {
      if (this._pendingFocusOut) {
        this._focused = false;
        this.hideCalendar();
        this.dispatchEvent(new CustomEvent('blur'));
      }
    });
  }
  handleDatePickerIconClick(event) {
    if (this.readOnly || this.disabled) {
      return;
    }
    this.calendarTrigger = event.target;
    this.showAndFocusCalendar();
  }
  handleInputKeydown(event) {
    this.calendarTrigger = event.target;
    handleBasicKeyDownBehaviour(event, this.keyboardInterface);
  }
  handleDatePickerIconKeyDown(event) {
    this.calendarTrigger = event.target;
    handleKeyDownOnDatePickerIcon(event, this.keyboardInterface);
  }
  handleCalendarKeyDown(event) {
    handleBasicKeyDownBehaviour(event, this.keyboardInterface);
  }
  handleDateSelect(event) {
    event.stopPropagation();
    this._value = event.detail.value;
    this._displayValue = normalizeISODate(this._value, this.dateFormat).displayValue;
    this.hideCalendarAndFocusTrigger();
    this.dispatchChangeEvent();
  }
  showAndFocusCalendar() {
    this.showCalendar();

    // eslint-disable-next-line @lwc/lwc/no-async-operation
    requestAnimationFrame(() => {
      this.focusCalendar();
    });
  }
  hideCalendarAndFocusTrigger() {
    this.hideCalendar();
    if (this.calendarTrigger) {
      this.calendarTrigger.focus();
    }
  }
  focusCalendar() {
    const calendar = this.template.querySelector('lightning-calendar');
    if (calendar) {
      calendar.focus();
    }
  }
  startPositioning() {
    if (!this._relationship) {
      this._relationship = startPositioning(this, {
        target: () => this.template.querySelector('input'),
        element: () => this.template.querySelector('lightning-calendar').shadowRoot.querySelector('div'),
        align: {
          horizontal: Direction.Right,
          vertical: Direction.Top
        },
        targetAlign: {
          horizontal: Direction.Right,
          vertical: Direction.Bottom
        },
        autoFlip: true,
        // Auto flip direction if not have enough space
        leftAsBoundary: true // horizontal flip uses target left as boundary
      });
    } else {
      this._relationship.reposition();
    }
  }
  stopPositioning() {
    if (this._relationship) {
      stopPositioning(this._relationship);
      this._relationship = null;
    }
  }
  showCalendar() {
    if (!this.isCalendarVisible) {
      this.rootElement.classList.add('slds-is-open');
      this._calendarVisible = true;
    }
  }
  hideCalendar() {
    if (this.isCalendarVisible) {
      this.rootElement.classList.remove('slds-is-open');
      this.stopPositioning();
      this._calendarVisible = false;
    }
  }
  get rootElement() {
    return this.template.querySelector('div');
  }
  get inputElement() {
    return this.template.querySelector('input');
  }
  get dateFormat() {
    if (!this._dateFormat) {
      this._dateFormat = this.getDateFormatFromStyle();
    }
    return this._dateFormat;
  }
  set dateFormat(value) {
    this._dateFormat = value;
  }
  getDateFormatFromStyle(dateStyle) {
    let dateFormat;
    switch (dateStyle) {
      case DATE_STYLE.SHORT:
        dateFormat = shortDateFormat;
        break;
      case DATE_STYLE.LONG:
        dateFormat = longDateFormat;
        break;
      default:
        dateFormat = mediumDateFormat;
        break;
    }
    return dateFormat;
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
  datepickerKeyboardInterface() {
    const that = this;
    return {
      showCalendar() {
        that.showAndFocusCalendar();
      },
      hideCalendar() {
        that.hideCalendarAndFocusTrigger();
      },
      isCalendarVisible() {
        return that.isCalendarVisible;
      }
    };
  }
  parse(dateString) {
    // We cannot use parseDateTimeISO8601 here because that method does not have a strict flag. If the value is not an ISO string, that method will parse using the native Date()
    // Alternatively we could call isValidISODateTimeString and then parseDateTimeISO8601.
    return parseDateTime(dateString, STANDARD_DATE_FORMAT, true);
  }
  get allowedDateFormats() {
    // We should prioritize the long, because a long date matched with the medium format. An issue in aura?
    // Ex: September 8, 2017 when be parsed with the medium format, returns a valid iso date.
    return [longDateFormat, mediumDateFormat, shortDateFormat];
  }

  /**
   * Parses the input date and sets the dateFormat used to parse the displayValue
   * if it is a valid Date.
   *
   * @param {String} displayValue - The input date.
   * @return {null | string} - A normalized formatted date if displayValue is valid. null otherwise.
   */
  parseFormattedDate(displayValue) {
    const allowedFormats = this.allowedDateFormats;
    const n = allowedFormats.length;
    let i = 0,
      value = null;
    do {
      value = normalizeFormattedDate(displayValue, allowedFormats[i]);
      i++;
    } while (value === null && i < n);
    return value;
  }
  get hasExternalLabel() {
    return this.variant === VARIANT.LABEL_HIDDEN && this.ariaLabelledByElement && this.ariaLabelledByElement.length;
  }
  /*LWC compiler v5.0.0*/
}
LightningDatePicker.delegatesFocus = true;
_registerDecorators(LightningDatePicker, {
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
    autocomplete: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    min: {
      config: 3
    },
    max: {
      config: 3
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
    ariaLabel: {
      config: 3
    },
    ariaLabelledByElement: {
      config: 3
    },
    ariaControlsElement: {
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
    dateStyle: {
      config: 3
    }
  },
  publicMethods: ["focus", "blur", "showHelpMessage", "hasBadInput"],
  track: {
    _disabled: 1,
    _readonly: 1,
    _required: 1,
    _value: 1,
    _calendarVisible: 1,
    _displayValue: 1,
    _errorMessage: 1,
    _fieldLevelHelp: 1,
    _variant: 1
  },
  fields: ["_min", "_max", "_displayMin", "_displayMax", "_ariaLabelledBy", "_ariaControls", "_ariaDescribedBy"]
});
export default _registerComponent(LightningDatePicker, {
  tmpl: _tmpl,
  sel: "lightning-datepicker",
  apiVersion: 60
});