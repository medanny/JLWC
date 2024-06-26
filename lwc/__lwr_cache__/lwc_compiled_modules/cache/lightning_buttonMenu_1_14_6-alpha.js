import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./buttonMenu.html";
import labelLoading from '@salesforce/label/LightningButtonMenu.loading';
import labelShowMenu from '@salesforce/label/LightningButtonMenu.showMenu';
import { classSet } from 'lightning/utils';
import { normalizeBoolean, normalizeString, observePosition, animationFrame, timeout, buttonGroupOrderClass } from 'lightning/utilsPrivate';
import { handleKeyDownOnMenuItem, handleKeyDownOnMenuTrigger } from './keyboard';
// remove-next-line-for-c-namespace
import { Direction, startPositioning, stopPositioning } from 'lightning/positionLibrary';
// remove-next-line-for-c-namespace
import { Tooltip } from 'lightning/tooltipLibrary';
const i18n = {
  loading: labelLoading,
  showMenu: labelShowMenu
};

// CSS class and selectors for menu items
const menuItemCSSClassName = 'slds-dropdown__item';
const menuItemCSSSelector = `.slds-dropdown__list .${menuItemCSSClassName}`;
const validMenuAlignments = ['left', 'center', 'right', 'bottom-left', 'bottom-center', 'bottom-right'];

// remove-next-line-for-c-namespace
validMenuAlignments.push(...['auto', 'auto-right', 'auto-left']);

/**
 * Represents a dropdown menu with a list of actions or functions.
 * @slot default Placeholder for menu-item
 */
class LightningButtonMenu extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * The size of the icon.
     * Options include xx-small, x-small, small, medium, or large.
     * This value defaults to medium.
     *
     * @type {string}
     * @default medium
     */
    this.iconSize = 'medium';
    /**
     * The name of the icon to be used in the format 'utility:down'.
     * If an icon other than 'utility:down' or 'utility:chevrondown' is used,
     * a utility:down icon is appended to the right of that icon.
     * This value defaults to utility:down.
     *
     * @type {string}
     * @default utility:down
     */
    this.iconName = 'utility:down';
    /**
     * The value for the button element.
     * This value is optional and can be used when submitting a form.
     *
     * @type {string}
     */
    this.value = '';
    /**
     * The assistive text for the button.
     *
     * @type {string}
     */
    this.alternativeText = i18n.showMenu;
    /**
     * Message displayed while the menu is in the loading state.
     *
     * @type {string}
     */
    this.loadingStateAlternativeText = i18n.loading;
    /**
     * Optional text to be shown on the button.
     *
     * @type {string}
     */
    this.label = void 0;
    /**
     * Describes the reason for showing the draft indicator.
     * This is required when is-draft is true.
     *
     * @type {string}
     */
    this.draftAlternativeText = void 0;
    /**
     * Reserved for internal use only.
     * Describes the order of this element (first, middle or last) inside lightning-button-group.
     * @type {string}
     */
    this.groupOrder = '';
    /**
     * Reserved for internal use only.
     * Should be set to -1 if button should not
     * be focused when navigating with tab
     * @type {number}
     */
    this.tabIndex = void 0;
    this._accesskey = null;
    this._disabled = false;
    this._dropdownVisible = false;
    this._dropdownOpened = false;
    this._nubbin = false;
    this._title = null;
    this._isDraft = false;
    this._isLoading = false;
    this._focusOnIndexDuringRenderedCallback = null;
    this._tabindex = 0;
    this._order = null;
    this._variant = 'border';
    this._positioning = false;
    this._menuAlignment = 'left';
    this._boundingRect = {};
    // remove-next-line-for-c-namespace
    this._tooltip = null;
    this._needsFocusAfterRender = false;
  }
  connectedCallback() {
    this._connected = true;
    this.keyboardInterface = this.menuKeyboardInterface();
    this.classList.add('slds-dropdown-trigger', 'slds-dropdown-trigger_click');
    if (this.isDraft) {
      this.classList.add('slds-is-unsaved');
    }
  }
  disconnectedCallback() {
    this._connected = false;
  }
  renderedCallback() {
    // remove-next-line-for-c-namespace
    this.initTooltip();

    // if we are using autopositioning focus happens in its own cycle
    if (!this._positioning && this._dropdownVisible) {
      // logic to focus on first menu item after render
      this.focusOnMenuItemAfterRender();
    }
  }
  get iconSvgClass() {
    if (this.label) {
      return 'slds-button__icon slds-button__icon_right';
    }
    return 'slds-button__icon';
  }

  /**
   * The variant changes the look of the button.
   * Accepted variants include bare, container, border, border-filled, bare-inverse, and border-inverse.
   * This value defaults to border.
   *
   * @type {string}
   * @default border
   */
  get variant() {
    return this._variant;
  }
  set variant(variant) {
    this._variant = normalizeString(variant, {
      fallbackValue: 'border',
      validValues: ['border', 'border-inverse', 'border-filled', 'bare', 'bare-inverse', 'container']
    });
  }

  /**
   * Determines the alignment of the menu relative to the button.
   * Available options are: auto, left, center, right, bottom-left, bottom-center, bottom-right.
   * The auto option aligns the dropdown menu based on available space.
   * This value defaults to left.
   *
   * @type {string}
   * @default left
   */
  get menuAlignment() {
    return this._menuAlignment;
  }
  set menuAlignment(value) {
    this._menuAlignment = normalizeString(value, {
      fallbackValue: 'left',
      validValues: validMenuAlignments
    });
  }

  /**
   * If present, the menu can be opened by users.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }

  /**
   * If present, a nubbin is present on the menu.
   * A nubbin is a stub that protrudes from the menu item towards the button menu.
   * The nubbin position is based on the menu-alignment.
   * @type {boolean}
   * @default false
   */
  get nubbin() {
    return this._nubbin;
  }
  set nubbin(value) {
    this._nubbin = normalizeBoolean(value);
  }

  /**
   * Displays tooltip text when the mouse moves over the button menu.
   * @type {string}
   */
  get title() {
    return this._title;
  }
  set title(newValue) {
    this._title = newValue;
  }

  /**
   * If present, the menu trigger shows a draft indicator.
   * @type {boolean}
   * @default false
   */
  get isDraft() {
    return this._isDraft;
  }
  set isDraft(value) {
    this._isDraft = normalizeBoolean(value);
  }

  /**
   * If present, the menu is in a loading state and shows a spinner.
   * @type {boolean}
   * @default false
   */
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value) {
    const normalizedValue = normalizeBoolean(value);
    if (this.isAutoAlignment()) {
      // stop previous positioning if any as it maintains old position relationship
      this.stopPositioning();
      if (this._isLoading && !normalizedValue) {
        // was loading before and now is not, we need to reposition
        // remove-next-line-for-c-namespace
        this.startPositioning();
      }
    }
    this._isLoading = normalizedValue;
  }

  /**
   * The keyboard shortcut for the button menu.
   * @type {string}
   */
  get accessKey() {
    return this._accesskey;
  }
  set accessKey(newValue) {
    this._accesskey = newValue;
  }

  // remove-next-line-for-c-namespace
  /**
   * Text to display when the user mouses over or focuses on the button.
   * The tooltip is auto-positioned relative to the button and screen space.
   * @type {string}
   */
  get tooltip() {
    return this._tooltip ? this._tooltip.value : undefined;
  }

  // remove-next-line-for-c-namespace
  set tooltip(value) {
    if (this._tooltip) {
      this._tooltip.value = value;
    } else if (value) {
      // Note that because the tooltip target is a child element it may not be present in the
      // dom during initial rendering.
      this._tooltip = new Tooltip(value, {
        root: this,
        target: () => this.template.querySelector('button')
      });
      this._tooltip.initialize();
    }
  }

  /**
   * Sets focus on the button.
   */
  focus() {
    if (this._connected) {
      this.focusOnButton();
    }
  }

  /**
   * Simulates a mouse click on the button.
   */
  click() {
    if (this._connected) {
      this.template.querySelector('button').click();
    }
  }
  get computedAriaExpanded() {
    return String(this._dropdownVisible); // default value must be a string for the attribute to always be present with a string value
  }

  // remove-next-line-for-c-namespace
  initTooltip() {
    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.initialize();
    }
  }
  focusOnMenuItemAfterRender() {
    // if no menu items are focused then set focus on the first or last one once registered
    // :: this can occur if there's a delay in loading the menu items (loading from server for example)
    // :: revealing the menu in an empty state to later have menu items loaded
    let focusOnIndex = this._focusOnIndexDuringRenderedCallback || 0;

    // if focus index is greater than the size of the list,
    // or next focus should be on LAST,
    // set to the last item
    const menuItems = this.getMenuItems();

    // if specified as 'LAST' set it to a valid numeric value instead
    if (focusOnIndex === 'LAST') {
      focusOnIndex = menuItems.length - 1;

      // maintain 'LAST' value if menu items aren't available yet
      if (focusOnIndex < 0) {
        focusOnIndex = 'LAST';
      }
    }

    // only perform operations when we have a valid numeric index
    if (focusOnIndex !== 'LAST') {
      if (focusOnIndex > menuItems.length - 1 && menuItems.length > 0) {
        focusOnIndex = menuItems.length - 1;
      }

      // set the focus
      this.focusOnMenuItem(focusOnIndex);

      // reset tracker value
      this._focusOnIndexDuringRenderedCallback = null;
    }
  }
  get computedAccessKey() {
    return this._accesskey;
  }
  get computedTitle() {
    return this._title;
  }
  get computedAlternativeText() {
    return this.alternativeText || i18n.showMenu;
  }
  get computedLoadingStateAlternativeText() {
    return this.loadingStateAlternativeText || i18n.loading;
  }
  get computedButtonClass() {
    const isDropdownIcon = !this.computedShowDownIcon;
    const isBare = this.variant === 'bare' || this.variant === 'bare-inverse';
    const classes = classSet('slds-button');
    if (this.label) {
      classes.add({
        'slds-button_neutral': this.variant === 'border',
        'slds-button_inverse': this.variant === 'border-inverse'
      });
    } else {
      // The inverse check is to allow for a combination of a non-default icon and an -inverse variant
      const useMoreContainer = this.variant === 'container' || this.variant === 'bare-inverse' || this.variant === 'border-inverse';
      classes.add({
        'slds-button_icon': !isDropdownIcon,
        'slds-button_icon-bare': isBare,
        'slds-button_icon-more': !useMoreContainer && !isDropdownIcon,
        'slds-button_icon-container-more': useMoreContainer && !isDropdownIcon,
        'slds-button_icon-container': this.variant === 'container' && isDropdownIcon,
        'slds-button_icon-border': this.variant === 'border' && isDropdownIcon,
        'slds-button_icon-border-filled': this.variant === 'border-filled',
        'slds-button_icon-border-inverse': this.variant === 'border-inverse',
        'slds-button_icon-inverse': this.variant === 'bare-inverse',
        'slds-button_icon-xx-small': this.iconSize === 'xx-small' && !isBare,
        'slds-button_icon-x-small': this.iconSize === 'x-small' && !isBare,
        'slds-button_icon-small': this.iconSize === 'small' && !isBare,
        'slds-button_icon-large': this.iconSize === 'large' && !isBare
      });
    }
    return classes.add(buttonGroupOrderClass(this.groupOrder)).toString();
  }
  get computedShowDownIcon() {
    return !(this.iconName === 'utility:down' || this.iconName === 'utility:chevrondown');
  }
  get computedDropdownClass() {
    return classSet('slds-dropdown').add({
      'slds-dropdown_left': this.menuAlignment === 'left' || this.isAutoAlignment(),
      'slds-dropdown_center': this.menuAlignment === 'center',
      'slds-dropdown_right': this.menuAlignment === 'right',
      'slds-dropdown_bottom': this.menuAlignment === 'bottom-center',
      'slds-dropdown_bottom slds-dropdown_right slds-dropdown_bottom-right': this.menuAlignment === 'bottom-right',
      'slds-dropdown_bottom slds-dropdown_left slds-dropdown_bottom-left': this.menuAlignment === 'bottom-left',
      'slds-nubbin_top-left': this.nubbin && this.menuAlignment === 'left',
      'slds-nubbin_top-right': this.nubbin && this.menuAlignment === 'right',
      'slds-nubbin_top': this.nubbin && this.menuAlignment === 'center',
      'slds-nubbin_bottom-left': this.nubbin && this.menuAlignment === 'bottom-left',
      'slds-nubbin_bottom-right': this.nubbin && this.menuAlignment === 'bottom-right',
      'slds-nubbin_bottom': this.nubbin && this.menuAlignment === 'bottom-center',
      'slds-p-vertical_large': this.isLoading
    }).toString();
  }
  handleMenuItemPrivateSelect(event) {
    if (this._dropdownVisible) {
      this.toggleMenuVisibility();
      this.focusOnButton();
    }
    event.stopPropagation();
    this.dispatchSelect(event);
  }
  dispatchSelect(event) {
    this.dispatchEvent(new CustomEvent('select', {
      cancelable: true,
      detail: {
        value: event.detail.value // pass value through from original private event
      }
    }));
  }
  handleButtonClick() {
    this.allowBlur();
    this.toggleMenuVisibility();

    // Focus on the button even if the browser doesn't do it by default
    // (the behaviour differs between Chrome, Safari, Firefox)
    this.focusOnButton();
  }
  handleButtonKeyDown(event) {
    handleKeyDownOnMenuTrigger(event, this.keyboardInterface);
  }
  handleButtonMouseDown(event) {
    const mainButton = 0;
    if (event.button === mainButton) {
      this.cancelBlur();
    }
  }
  handleDropdownMouseDown(event) {
    // if the menu contais a scrollbar due to large number of menu-items
    // this is needed so that menu doesnt close on dragging the scrollbar with the mouse
    const mainButton = 0;
    if (event.button === mainButton) {
      this.cancelBlur();
    }
  }
  handleDropdownMouseUp() {
    // We need this to make sure that if a scrollbar is being dragged with the mouse, upon release
    // of the drag we allow blur, otherwise the dropdown would not close on blur since we'd have cancel blur
    // set
    this.allowBlur();
  }
  handleDropdownMouseLeave() {
    // this is to close the menu after mousedown happens on scrollbar
    // in this case we close immediately if no menu-items were hovered/focused
    // without this the menu would remain open since the blur on the menuitems has happened already
    // when clicking the scrollbar
    if (!this._menuHasFocus) {
      this.close();
    }
  }
  handleDropdownScroll(event) {
    // We don't want this to bubble up to the modal which due to event retargeting wouldn't be able
    // to know what is actually being scrolled and thus may lead to the scrolling of the modal
    event.stopPropagation();
  }
  focusOnButton() {
    this.template.querySelector('button').focus();
  }
  focusOnMenuItem(itemIndex) {
    if (this._dropdownVisible) {
      const menuItem = this.getMenuItemByIndex(itemIndex);
      this.cancelBlurAndFocusOnMenuItem(menuItem);
    }
  }
  isAutoAlignment() {
    return this.menuAlignment.startsWith('auto');
  }

  // remove-next-line-for-c-namespace
  startPositioning() {
    if (!this.isAutoAlignment()) {
      return Promise.resolve();
    }
    this._positioning = true;
    const align = {
      horizontal: Direction.Left,
      vertical: Direction.Top
    };
    const targetAlign = {
      horizontal: Direction.Left,
      vertical: Direction.Bottom
    };
    let autoFlip = true;
    let autoFlipVertical;
    if (this.menuAlignment === 'auto-right') {
      align.horizontal = Direction.Right;
      targetAlign.horizontal = Direction.Right;
    }
    if (this.menuAlignment === 'auto-right' || this.menuAlignment === 'auto-left') {
      autoFlip = false;
      autoFlipVertical = true;
    }
    return animationFrame().then(() => {
      this.stopPositioning();
      this._autoPosition = startPositioning(this, {
        target: () => this.template.querySelector('button'),
        element: () => this.template.querySelector('.slds-dropdown'),
        align,
        targetAlign,
        autoFlip,
        autoFlipVertical,
        scrollableParentBound: true,
        keepInViewport: true
      }, true);
      // Edge case: W-7460656
      if (this._autoPosition) {
        return this._autoPosition.reposition();
      }
      return Promise.reject();
    }).then(() => {
      this._needsFocusAfterRender = true;
      return timeout(0);
    }).then(() => {
      // focus on the first item in next cycle
      // Use a flag to prevent this async function from executing multiple times in a single lifecycle
      // TODO: add reason why we need to dedupe
      this._positioning = false;
      if (this._needsFocusAfterRender) {
        this.focusOnMenuItemAfterRender();
        this._needsFocusAfterRender = false;
      }
    });
  }

  // remove-next-line-for-c-namespace
  stopPositioning() {
    if (this._autoPosition) {
      stopPositioning(this._autoPosition);
      this._autoPosition = null;
    }
    this._positioning = false;
  }
  toggleMenuVisibility() {
    if (!this.disabled) {
      this._dropdownVisible = !this._dropdownVisible;
      if (!this._dropdownOpened && this._dropdownVisible) {
        this._dropdownOpened = true;
      }
      if (this._dropdownVisible) {
        // remove-next-line-for-c-namespace
        this.startPositioning();
        this.dispatchEvent(new CustomEvent('open'));

        // update the bounding rect when the menu is toggled
        this._boundingRect = this.getBoundingClientRect();
        this.pollBoundingRect();
      } else {
        // remove-next-line-for-c-namespace
        this.stopPositioning();
        this.dispatchEvent(new CustomEvent('close'));
      }
      this.classList.toggle('slds-is-open');
    }
  }
  getMenuItems() {
    return Array.from(this.querySelectorAll(menuItemCSSSelector));
  }
  getMenuItemByIndex(index) {
    return this.getMenuItems()[index];
  }
  findMenuItemIndex(menuItemElement) {
    return this.getMenuItems().indexOf(menuItemElement);
  }
  findMenuItemFromEventTarget(element) {
    let currentNode = element;
    const stopAtElement = this.template.querySelector("[role='menu']");
    while (currentNode !== stopAtElement) {
      if (currentNode.classList && currentNode.classList.contains(menuItemCSSClassName)) {
        return currentNode;
      }
      if (currentNode.parentNode) {
        currentNode = currentNode.parentNode;
      } else {
        return null;
      }
    }
    return null;
  }
  handleKeyOnMenuItem(event) {
    const menuItem = this.findMenuItemFromEventTarget(event.target);
    if (menuItem) {
      handleKeyDownOnMenuItem(event, this.findMenuItemIndex(menuItem), this.keyboardInterface);
    }
  }
  handleMouseOverOnMenuItem(event) {
    const menuItem = this.findMenuItemFromEventTarget(event.target);
    if (menuItem) {
      const menuItemIndex = this.findMenuItemIndex(menuItem);
      this.focusOnMenuItem(menuItemIndex);
    }
  }
  cancelBlurAndFocusOnMenuItem(menuItem) {
    if (menuItem) {
      // prevent blur during a non-blurring focus change
      // set lock so that while focusing on menutitem, menu doesnt close
      this.cancelBlur();
      menuItem.focus();
    }
    // allowBlur is called when the menu items receives focus
  }
  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handlePrivateBlur(event) {
    // The event may be synthetic from the menu items
    event.stopPropagation();

    // perform common blurring behavior
    this.handleBlur();
    this._menuHasFocus = false;
  }
  handlePrivateFocus(event) {
    // synthetic from the menu items
    event.stopPropagation();
    // reset the cancelBlur so any clicks outside the menu can now close the menu
    this.allowBlur();
    this._menuHasFocus = true;
  }
  handleBlur() {
    // Don't handle the blur event if the focus events are inside the menu (see the cancelBlur/allowBlur functions)
    if (this._cancelBlur) {
      return;
    }
    // Hide only when the focus moved away from the container
    if (this._dropdownVisible) {
      this.toggleMenuVisibility();
    }

    // dispatch standard blur event
    this.dispatchEvent(new CustomEvent('blur'));
  }
  allowBlur() {
    this._cancelBlur = false;
  }
  cancelBlur() {
    this._cancelBlur = true;
  }
  menuKeyboardInterface() {
    const that = this;
    return {
      getTotalMenuItems() {
        return that.getMenuItems().length;
      },
      focusOnIndex(index) {
        that.focusOnMenuItem(index);
      },
      setNextFocusIndex(index) {
        that._focusOnIndexDuringRenderedCallback = index;
      },
      returnFocus() {
        that.focusOnButton();
      },
      isMenuVisible() {
        return that._dropdownVisible;
      },
      toggleMenuVisibility() {
        that.toggleMenuVisibility();
      },
      focusMenuItemWithText(text) {
        const match = [...that.getMenuItems()].filter(menuItem => {
          const label = menuItem.label;
          return label && label.toLowerCase().indexOf(text) === 0;
        });
        if (match.length > 0) {
          that.focusOnMenuItem(match[0]);
        }
      }
    };
  }

  /**
   * {Function} close - Closes the dropdown if it's open
   */
  close() {
    // should only do something if dropdown is visible
    if (this._dropdownVisible) {
      this.toggleMenuVisibility();
    }
  }

  /**
   * Poll for change in bounding rectangle
   * only if it is menuAlignment=auto since that is
   * position:fixed and is opened
   */
  pollBoundingRect() {
    // only poll if the dropdown is auto aligned
    if (this.isAutoAlignment() && this._dropdownVisible) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      setTimeout(() => {
        if (this._connected) {
          observePosition(this, 300, this._boundingRect, () => {
            this.close();
          });

          // continue polling
          this.pollBoundingRect();
        }
      }, 250 // check every 0.25 second
      );
    }
  }
  /*LWC compiler v5.0.0*/
}
LightningButtonMenu.delegatesFocus = true;
_registerDecorators(LightningButtonMenu, {
  publicProps: {
    iconSize: {
      config: 0
    },
    iconName: {
      config: 0
    },
    value: {
      config: 0
    },
    alternativeText: {
      config: 0
    },
    loadingStateAlternativeText: {
      config: 0
    },
    label: {
      config: 0
    },
    draftAlternativeText: {
      config: 0
    },
    groupOrder: {
      config: 0
    },
    tabIndex: {
      config: 0
    },
    variant: {
      config: 3
    },
    menuAlignment: {
      config: 3
    },
    disabled: {
      config: 3
    },
    nubbin: {
      config: 3
    },
    title: {
      config: 3
    },
    isDraft: {
      config: 3
    },
    isLoading: {
      config: 3
    },
    accessKey: {
      config: 3
    },
    tooltip: {
      config: 3
    }
  },
  publicMethods: ["focus", "click"],
  track: {
    _accesskey: 1,
    _disabled: 1,
    _dropdownVisible: 1,
    _dropdownOpened: 1,
    _nubbin: 1,
    _title: 1,
    _isDraft: 1,
    _isLoading: 1,
    _focusOnIndexDuringRenderedCallback: 1,
    _tabindex: 1,
    _order: 1,
    _variant: 1
  },
  fields: ["_positioning", "_menuAlignment", "_boundingRect", "_tooltip", "_needsFocusAfterRender"]
});
export default _registerComponent(LightningButtonMenu, {
  tmpl: _tmpl,
  sel: "lightning-button-menu",
  apiVersion: 60
});