import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./input.css";

import _implicitScopedStylesheets from "./input.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import _lightningPrimitiveFileDroppableZone from "lightning/primitiveFileDroppableZone";
import _lightningPrimitiveColorpickerButton from "lightning/primitiveColorpickerButton";
import _lightningDatepicker from "lightning/datepicker";
import _lightningTimepicker from "lightning/timepicker";
import _lightningDatetimepicker from "lightning/datetimepicker";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-spinner__dot-a${0}"${2}></div>`;
const $fragment2 = parseFragment`<div class="slds-spinner__dot-b${0}"${2}></div>`;
const $fragment3 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment4 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment5 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment6 = parseFragment`<span class="slds-radio_faux${0}"${2}></span>`;
const stc0 = {
  "slds-required": true
};
const stc1 = {
  "slds-input": true
};
const stc2 = {
  props: {
    "iconName": "utility:search",
    "variant": "bare",
    "svgClass": "slds-input__icon slds-input__icon_left slds-icon-text-default"
  },
  key: 5
};
const stc3 = {
  classMap: {
    "slds-input__icon-group": true,
    "slds-input__icon-group_right": true
  },
  key: 6
};
const stc4 = {
  classMap: {
    "slds-spinner": true,
    "slds-spinner_brand": true,
    "slds-spinner_x-small": true,
    "slds-input__spinner": true
  },
  attrs: {
    "role": "status"
  },
  key: 7
};
const stc5 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 8
};
const stc6 = {
  "slds-input__icon": true,
  "slds-input__icon_right": true,
  "slds-button": true,
  "slds-button_icon": true
};
const stc7 = {
  "data-element-id": "searchClear"
};
const stc8 = {
  props: {
    "iconName": "utility:clear",
    "variant": "bare",
    "svgClass": "slds-button__icon"
  },
  key: 14
};
const stc9 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 15
};
const stc10 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 16
};
const stc11 = {
  "slds-checkbox_toggle": true,
  "slds-grid": true
};
const stc12 = {
  "slds-checkbox_faux_container": true
};
const stc13 = {
  classMap: {
    "slds-checkbox_on": true
  },
  key: 24
};
const stc14 = {
  classMap: {
    "slds-checkbox_off": true
  },
  key: 25
};
const stc15 = {
  "slds-checkbox__label": true
};
const stc16 = {
  classMap: {
    "slds-checkbox_add-button": true
  },
  key: 41
};
const stc17 = {
  "slds-assistive-text": true
};
const stc18 = {
  "slds-checkbox_faux": true
};
const stc19 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 44
};
const stc20 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 45
};
const stc21 = {
  classMap: {
    "slds-radio": true
  },
  key: 46
};
const stc22 = {
  "slds-radio__label": true
};
const stc23 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 54
};
const stc24 = {
  "slds-file-selector": true,
  "slds-file-selector_files": true
};
const stc25 = {
  "slds-file-selector__input": true,
  "slds-assistive-text": true
};
const stc26 = {
  "slds-file-selector__body": true
};
const stc27 = {
  classMap: {
    "slds-file-selector__button": true,
    "slds-button": true,
    "slds-button_neutral": true
  },
  key: 59
};
const stc28 = {
  props: {
    "iconName": "utility:upload",
    "variant": "bare",
    "svgClass": "slds-button__icon slds-button__icon_left"
  },
  key: 60
};
const stc29 = {
  classMap: {
    "slds-file-selector__text": true,
    "slds-medium-show": true
  },
  key: 61
};
const stc30 = {
  classMap: {
    "slds-color-picker": true
  },
  key: 62
};
const stc31 = {
  classMap: {
    "slds-form-element": true,
    "slds-color-picker__summary": true
  },
  key: 63
};
const stc32 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 67
};
const stc33 = {
  classMap: {
    "slds-color-picker__summary-input": true
  },
  key: 69
};
const stc34 = {
  "slds-input": true,
  "slds-m-right_x-small": true
};
const stc35 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17, _m18, _m19, _m20, _m21, _m22, _m23, _m24, _m25, _m26, _m27, _m28, _m29, _m30, _m31, _m32, _m33, _m34, _m35, _m36, _m37, _m38, _m39} = $ctx;
  return [$cmp.isTypeSimple ? !$cmp.hasExternalLabel ? api_element("label", {
    className: $cmp.computedLabelClass,
    attrs: {
      "for": api_scoped_id("input")
    },
    key: 0
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 1
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]) : null : null, $cmp.isTypeSimple ? !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 2
  }) : null : null : null, $cmp.isTypeSimple ? api_element("div", {
    className: $cmp.computedFormElementClass,
    key: 3
  }, [api_element("input", {
    classMap: stc1,
    attrs: {
      "type": $cmp._internalType,
      "id": api_scoped_id("input"),
      "aria-label": $cmp.computedAriaLabel,
      "aria-invalid": $cmp.computedAriaInvalid,
      "accesskey": $cmp.accesskey,
      "autocomplete": $cmp.autocomplete,
      "max": $cmp.normalizedMax,
      "min": $cmp.normalizedMin,
      "inputmode": $cmp._inputMode,
      "step": $cmp.step,
      "maxlength": $cmp.maxLength,
      "minlength": $cmp.minLength,
      "pattern": $cmp.pattern,
      "placeholder": $cmp.placeholder,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null
    },
    key: 4,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleChange)),
      "input": _m3 || ($ctx._m3 = api_bind($cmp.handleInput)),
      "keydown": _m4 || ($ctx._m4 = api_bind($cmp.handleKeyDown))
    }
  }), $cmp.isTypeSearch ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc2) : null, $cmp.isTypeSearch ? api_element("div", stc3, [$cmp.isLoading ? api_element("div", stc4, [api_element("span", stc5, [api_text(api_dynamic_text($cmp.i18n.loading))]), api_static_fragment($fragment1(), 10), api_static_fragment($fragment2(), 12)]) : null, $cmp._showClearButton ? api_element("button", {
    classMap: stc6,
    attrs: stc7,
    key: 13,
    on: {
      "blur": _m5 || ($ctx._m5 = api_bind($cmp.handleBlur)),
      "click": _m6 || ($ctx._m6 = api_bind($cmp._clearAndSetFocusOnInput))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc8), api_element("span", stc9, [api_text(api_dynamic_text($cmp.i18n.clear))])]) : null]) : null]) : null, $cmp.isTypeToggle ? api_element("div", stc10, [api_element("label", {
    classMap: stc11,
    attrs: {
      "for": api_scoped_id("checkbox-toggle")
    },
    key: 17
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 18
  }, [api_text("*")]) : null, api_element("span", {
    className: $cmp.computedLabelClass,
    key: 19
  }, [api_text(api_dynamic_text($cmp.label))]), api_element("input", {
    attrs: {
      "type": "checkbox",
      "id": api_scoped_id("checkbox-toggle"),
      "aria-label": $cmp.computedAriaLabel,
      "accesskey": $cmp.accesskey,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null
    },
    key: 20,
    on: {
      "blur": _m7 || ($ctx._m7 = api_bind($cmp.handleBlur)),
      "focus": _m8 || ($ctx._m8 = api_bind($cmp.handleFocus)),
      "change": _m9 || ($ctx._m9 = api_bind($cmp.handleChange))
    }
  }), api_element("span", {
    classMap: stc12,
    attrs: {
      "id": api_scoped_id("toggle-description"),
      "data-toggle-description": "",
      "aria-live": "assertive"
    },
    key: 21
  }, [api_static_fragment($fragment3(), 23), api_element("span", stc13, [api_text(api_dynamic_text($cmp.messageToggleActive))]), api_element("span", stc14, [api_text(api_dynamic_text($cmp.messageToggleInactive))])])])]) : null, $cmp.isTypeCheckbox ? !$cmp.isStandardVariant ? api_element("label", {
    classMap: stc15,
    attrs: {
      "for": api_scoped_id("checkbox")
    },
    key: 26
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 27
  }, [api_text("*")]) : null, api_element("span", {
    className: $cmp.computedLabelClass,
    key: 28
  }, [api_text(api_dynamic_text($cmp.label))])]) : null : null, $cmp.isTypeCheckbox ? !$cmp.isStandardVariant ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 29
  }) : null : null : null, $cmp.isTypeCheckbox ? api_element("div", {
    className: $cmp.computedFormElementClass,
    key: 30
  }, [api_element("span", {
    className: $cmp.computedCheckboxClass,
    key: 31
  }, [$cmp.isStandardVariant ? $cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 32
  }, [api_text("*")]) : null : null, api_element("input", {
    attrs: {
      "type": "checkbox",
      "id": api_scoped_id("checkbox"),
      "aria-label": $cmp.computedAriaLabel,
      "accesskey": $cmp.accesskey,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null
    },
    key: 33,
    on: {
      "blur": _m10 || ($ctx._m10 = api_bind($cmp.handleBlur)),
      "focus": _m11 || ($ctx._m11 = api_bind($cmp.handleFocus)),
      "change": _m12 || ($ctx._m12 = api_bind($cmp.handleChange))
    }
  }), !$cmp.isStandardVariant ? api_static_fragment($fragment4(), 35) : null, $cmp.isStandardVariant ? api_element("label", {
    classMap: stc15,
    attrs: {
      "for": api_scoped_id("checkbox")
    },
    key: 36
  }, [api_static_fragment($fragment5(), 38), api_element("span", {
    className: $cmp.computedLabelClass,
    key: 39
  }, [api_text(api_dynamic_text($cmp.label))])]) : null, $cmp.isStandardVariant ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 40
  }) : null : null])]) : null, $cmp.isTypeCheckboxButton ? api_element("div", stc16, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "checkbox",
      "id": api_scoped_id("checkbox-button"),
      "aria-label": $cmp.computedAriaLabel,
      "accesskey": $cmp.accesskey,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null
    },
    key: 42,
    on: {
      "blur": _m13 || ($ctx._m13 = api_bind($cmp.handleBlur)),
      "focus": _m14 || ($ctx._m14 = api_bind($cmp.handleFocus)),
      "change": _m15 || ($ctx._m15 = api_bind($cmp.handleChange))
    }
  }), api_element("label", {
    classMap: stc18,
    attrs: {
      "for": api_scoped_id("checkbox-button")
    },
    key: 43
  }, [api_element("span", stc19, [api_text(api_dynamic_text($cmp.label))])])]) : null, $cmp.isTypeRadio ? api_element("div", stc20, [api_element("span", stc21, [api_element("input", {
    attrs: {
      "type": "radio",
      "id": api_scoped_id("radio"),
      "accesskey": $cmp.accesskey,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null
    },
    key: 47,
    on: {
      "blur": _m16 || ($ctx._m16 = api_bind($cmp.handleBlur)),
      "focus": _m17 || ($ctx._m17 = api_bind($cmp.handleFocus)),
      "change": _m18 || ($ctx._m18 = api_bind($cmp.handleChange))
    }
  }), api_element("label", {
    classMap: stc22,
    attrs: {
      "for": api_scoped_id("radio")
    },
    key: 48
  }, [api_static_fragment($fragment6(), 50), api_element("span", {
    className: $cmp.computedLabelClass,
    key: 51
  }, [api_text(api_dynamic_text($cmp.label))])])])]) : null, $cmp.isTypeFile ? api_element("span", {
    className: $cmp.computedLabelClass,
    attrs: {
      "id": api_scoped_id("form-label"),
      "data-form-label": ""
    },
    key: 52
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 53
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]) : null, $cmp.isTypeFile ? api_element("div", stc23, [api_element("div", {
    classMap: stc24,
    key: 55,
    on: {
      "drop": _m19 || ($ctx._m19 = api_bind($cmp.handleDropFiles))
    }
  }, [api_custom_element("lightning-primitive-file-droppable-zone", _lightningPrimitiveFileDroppableZone, {
    props: {
      "multiple": $cmp.multiple,
      "disabled": $cmp.disabled
    },
    key: 56
  }, [api_element("input", {
    classMap: stc25,
    attrs: {
      "type": "file",
      "id": api_scoped_id("input-file"),
      "aria-label": $cmp.computedAriaLabel,
      "accesskey": $cmp.accesskey,
      "accept": $cmp.accept,
      "multiple": $cmp.multiple ? "" : null,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null
    },
    key: 57,
    on: {
      "blur": _m20 || ($ctx._m20 = api_bind($cmp.handleBlur)),
      "click": _m21 || ($ctx._m21 = api_bind($cmp.handleFileClick)),
      "focus": _m22 || ($ctx._m22 = api_bind($cmp.handleFocus)),
      "change": _m23 || ($ctx._m23 = api_bind($cmp.handleChange))
    }
  }), api_element("label", {
    classMap: stc26,
    attrs: {
      "id": api_scoped_id("file-selector-label"),
      "data-file-selector-label": "",
      "for": api_scoped_id("input-file"),
      "aria-hidden": "true"
    },
    key: 58
  }, [api_element("span", stc27, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc28), api_text(api_dynamic_text($cmp.i18n.inputFileButtonLabel))]), api_element("span", stc29, [api_text(api_dynamic_text($cmp.i18n.inputFileBodyText))])])])])]) : null, $cmp.isTypeColor ? api_element("div", stc30, [api_element("div", stc31, [!$cmp.hasExternalLabel ? api_element("label", {
    className: $cmp.computedColorLabelClass,
    attrs: {
      "for": api_scoped_id("color")
    },
    key: 64
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 65
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 66
  }) : null : null, api_element("div", stc32, [api_custom_element("lightning-primitive-colorpicker-button", _lightningPrimitiveColorpickerButton, {
    props: {
      "value": $cmp.value,
      "disabled": $cmp.disabled
    },
    key: 68,
    on: {
      "blur": _m24 || ($ctx._m24 = api_bind($cmp.handleBlur)),
      "focus": _m25 || ($ctx._m25 = api_bind($cmp.handleFocus)),
      "change": _m26 || ($ctx._m26 = api_bind($cmp.handleColorChange))
    }
  }), api_element("div", stc33, [api_element("input", {
    classMap: stc34,
    attrs: {
      "type": "text",
      "id": api_scoped_id("color"),
      "name": $cmp.name,
      "autocomplete": $cmp.autocomplete,
      "accesskey": $cmp.accesskey,
      "aria-label": $cmp.computedAriaLabel,
      "disabled": $cmp.disabled ? "" : null,
      "minlength": "4",
      "maxlength": "7",
      "placeholder": $cmp.placeholder,
      "pattern": $cmp.pattern
    },
    key: 70,
    on: {
      "blur": _m27 || ($ctx._m27 = api_bind($cmp.handleBlur)),
      "focus": _m28 || ($ctx._m28 = api_bind($cmp.handleFocus)),
      "change": _m29 || ($ctx._m29 = api_bind($cmp.handleChange)),
      "input": _m30 || ($ctx._m30 = api_bind($cmp.handleInput))
    }
  })])])])]) : null, $cmp.isTypeDesktopDate ? api_custom_element("lightning-datepicker", _lightningDatepicker, {
    props: {
      "max": $cmp.max,
      "min": $cmp.min,
      "label": $cmp.label,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "ariaLabel": $cmp.ariaLabel,
      "dateStyle": $cmp.dateStyle,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required,
      "readOnly": $cmp.readOnly,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "autocomplete": "off",
      "messageWhenBadInput": $cmp.messageWhenBadInput,
      "messageWhenValueMissing": $cmp.messageWhenValueMissing,
      "messageWhenRangeOverflow": $cmp.messageWhenRangeOverflow,
      "messageWhenRangeUnderflow": $cmp.messageWhenRangeUnderflow,
      "disabled": $cmp.disabled
    },
    key: 71,
    on: {
      "change": _m31 || ($ctx._m31 = api_bind($cmp.handleChange)),
      "blur": _m32 || ($ctx._m32 = api_bind($cmp.handleBlur)),
      "focus": _m33 || ($ctx._m33 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.isTypeDesktopTime ? api_custom_element("lightning-timepicker", _lightningTimepicker, {
    props: {
      "max": $cmp.max,
      "min": $cmp.min,
      "label": $cmp.label,
      "name": $cmp.name,
      "ariaLabel": $cmp.ariaLabel,
      "variant": $cmp.variant,
      "timeStyle": $cmp.timeStyle,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required,
      "readOnly": $cmp.readOnly,
      "autocomplete": "off",
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "messageWhenBadInput": $cmp.messageWhenBadInput,
      "messageWhenValueMissing": $cmp.messageWhenValueMissing,
      "messageWhenRangeOverflow": $cmp.messageWhenRangeOverflow,
      "messageWhenRangeUnderflow": $cmp.messageWhenRangeUnderflow,
      "disabled": $cmp.disabled
    },
    key: 72,
    on: {
      "change": _m34 || ($ctx._m34 = api_bind($cmp.handleChange)),
      "blur": _m35 || ($ctx._m35 = api_bind($cmp.handleBlur)),
      "focus": _m36 || ($ctx._m36 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp.isTypeDesktopDateTime ? api_custom_element("lightning-datetimepicker", _lightningDatetimepicker, {
    props: {
      "dateAriaControls": $cmp.dateAriaControls,
      "dateAriaLabel": $cmp.dateAriaLabel,
      "dateAriaLabelledBy": $cmp.dateAriaLabelledBy,
      "dateAriaDescribedBy": $cmp.dateAriaDescribedBy,
      "dateStyle": $cmp.dateStyle,
      "timeStyle": $cmp.timeStyle,
      "timeAriaControls": $cmp.timeAriaControls,
      "timeAriaLabel": $cmp.timeAriaLabel,
      "timeAriaLabelledBy": $cmp.timeAriaLabelledBy,
      "timeAriaDescribedBy": $cmp.timeAriaDescribedBy,
      "max": $cmp.max,
      "min": $cmp.min,
      "timezone": $cmp.timezone,
      "label": $cmp.label,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required,
      "readOnly": $cmp.readOnly,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "autocomplete": "off",
      "messageWhenBadInput": $cmp.messageWhenBadInput,
      "messageWhenValueMissing": $cmp.messageWhenValueMissing,
      "messageWhenRangeOverflow": $cmp.messageWhenRangeOverflow,
      "messageWhenRangeUnderflow": $cmp.messageWhenRangeUnderflow,
      "disabled": $cmp.disabled
    },
    key: 73,
    on: {
      "change": _m37 || ($ctx._m37 = api_bind($cmp.handleChange)),
      "blur": _m38 || ($ctx._m38 = api_bind($cmp.handleBlur)),
      "focus": _m39 || ($ctx._m39 = api_bind($cmp.handleFocus))
    }
  }) : null, $cmp._helpMessage ? api_element("div", {
    classMap: stc35,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "role": "alert"
    },
    key: 74
  }, [api_text(api_dynamic_text($cmp._helpMessage))]) : null];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-66unc5l95ad";
tmpl.legacyStylesheetToken = "lightning-input_input";
freezeTemplate(tmpl);
