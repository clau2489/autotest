/**
 * Layouts Manager Class.
 */
var LayoutManager = function () {

  /**
   * Base Class Inheritance
   */

  var self = new UiBase();
  var parent = $.extend(true, {}, self);

  /*
   * ATTRIBUTES
   * ************************************************************
   */

  /**
   * This class name
   */
  self.className = 'LayoutManager';

  /**
   * Page structure established
   */
  self.actualLayout = false;

  /**
   * Special view structure established
   */
  self.reducedLayout = false;

  /**
   * Mobile device structure established
   */
  self.deviceLayout = false;

  /**
   *  Device orientation established
   */
  self.orientation = false;

  /**
   *  Devices limit measurements (Bootstrap)
   */
  self.layouts = {
    retina: {
      label: 'RT',
      min: 0,
      max: 529
    },
    mobile: {
      label: 'XS',
      min: 530,
      max: 767
    },
    tablet: {
      label: 'SM',
      min: 768,
      max: 991
    },
    medium: {
      label: 'MD',
      min: 992,
      max: 1199
    },
    desktop: {
      label: 'LG',
      min: 1200,
      max: 9999
    }
  };

  /**
   * UI Layout DOM elements
   */
  self.ui = {};

  /*
   * PUBLIC METHODS
   * ************************************************************
   */

  /**
   * Initialize this Class.
   */
  self.init = function () {
    self.log('Init Layout Manager');
    parent.init();
    initUi();
    initEventListeners();
    checkLayout();
    checkOrientation();
    initApi();
  };

  /**
   * Checks if site is shown in a reduced screen layout.
   */
  self.isReducedLayout = function () {
    return self.isMediumLayout() || self.isTabletLayout() || self.isMobileLayout() || self.isRetinaLayout();
  };

  /**
   * Checks if site is shown in a device layout: tablet or mobile.
   */
  self.isDeviceLayout = function () {
    return self.isTabletLayout() || self.isMobileLayout() || self.isRetinaLayout();
  };

  /**
   * Checks if site is shown in a phone device layout: mobile.
   */
  self.isPhoneDeviceLayout = function () {
    return isInLayout(self.layouts.mobile);
  };

  /**
   * Checks if site is shown in a desktop screen layout.
   */
  self.isDesktopLayout = function () {
    return isLayout(self.layouts.desktop);
  };

  /**
   * Checks if site is shown in a medium screen layout.
   */
  self.isMediumLayout = function () {
    return isLayout(self.layouts.medium);
  };

  /**
   * Checks if site is shown in a tablet device layout.
   */
  self.isTabletLayout = function () {
    return isLayout(self.layouts.tablet);
  };

  /**
   * Checks if site is shown in a mobile device layout.
   */
  self.isMobileLayout = function () {
    return isLayout(self.layouts.mobile);
  };

  /**
   * Checks if site is shown in a retina layout.
   */
  self.isRetinaLayout = function () {
    return isLayout(self.layouts.retina);
  };

  /**
   * Determines site's actual layout.
   */
  self.getActualLayout = function () {
    var layout = false;
    /**
     * isRetinaLayout
     */
    layout = self.isRetinaLayout();
    if (layout) {
      return layout;
    }

    layout = self.isMobileLayout();
    if (layout) {
      return layout;
    }

    layout = self.isTabletLayout();
    if (layout) {
      return layout;
    }

    layout = self.isMediumLayout();
    if (layout) {
      return layout;
    }

    layout = self.isDesktopLayout();
    if (layout) {
      return layout;
    }
  };


  /**
   * Checks if a layout's maximum width is content on another layout's width.
   * @param string Layout to search
   * @param string Layout to compare
   * @return bool
   */
  self.isMinusThan = function (lay1, lay2) {
    if (!lay1) {
      return false;
    }
    lay2 = lay2 || self.actualLayout.label;

    var lay1Data = false;
    var lay2Data = false;

    $.each(self.layouts, function (index, lay) {
      if (lay.label === lay1) {
        lay1Data = lay;
      }
    });
    $.each(self.layouts, function (index, lay) {
      if (lay.label === lay2) {
        lay2Data = lay;
      }
    });

    return lay1Data.width <= lay2Data.width;
  };

  /**
   * Returns actual layout's orientation.
   */
  self.getActualOrientation = function () {
    return self.orientation;
  };

  /**
   * Checks if actual layout's orientation is 'portrait'.
   */
  self.isPortrait = function () {
    return self.orientation === 'P';
  };

  /**
   * Returns actual layout's orientation is 'landscape'.
   */
  self.isLandscape = function () {
    return self.orientation === 'L';
  };

  /*
   * PRIVATE METHODS
   * ************************************************************
   */

  /**
   * Define Site's main API Methods.
   */
  var initApi = function () {
    self.addToMainApi({
      isDeviceLayout : self.isDeviceLayout,
      getActualLayout : self.getActualLayout,
      getActualOrientation : self.getActualOrientation
    }, "layout");
  };

  /**
   * Initialize Layout UI elements.
   */
  var initUi = function () {
    initLayoutTexts();
  };

  /**
   * Initialize DOM elements with changing texts based on page layout
   */
  var initLayoutTexts = function () {
    self.ui.$layoutTextItems = $('[data-layout-text]');
    self.ui.$layoutTextItems.each(function () {
      var initialLayoutText = $(this).text();
      $(this).data('initialLayoutText', initialLayoutText);
    });
  };

  /**
   * Initialize General Page & Window events
   */
  var initEventListeners = function () {
    customEvents.on('layoutChange', function () {
      setLayoutTexts();
    });
    $(window).on('resize', checkLayout);
    $(window).on('orientationchange', checkOrientation);
  };

  /**
   * Determine actual layout and trigger an event if changes.
   * Event: 'layoutChange'
   */
  var checkLayout = function () {
    setLayout();
    if (self.memory['actualLayout'] !== self.actualLayout) {
      self.log('Page Layout:', self.actualLayout, 'Reduced: ',
        self.reducedLayout, 'Device:', self.deviceLayout);
      customEvents.triggerHandler('layoutChange', [self.actualLayout]);
    }
  };

  /**
   * Determine actual orientation and trigger an event if changes.
   * Event: 'oriChange'
   */
  var checkOrientation = function () {
    setOrientation();
    if (self.memory['orientation'] !== self.orientation) {
      self.log('Orientation:', self.orientation);
      customEvents.triggerHandler('oriChange', [self.orientation]);
    }
  };

  /**
   * Checks if site is shown in a concrete layout.
   */
  var isLayout = function (layout) {
    var layoutWidth = Math.max(document.documentElement.clientWidth,
      window.innerWidth || 0);
    if (layoutWidth <= layout.max && layoutWidth >= layout.min) {
      return layout.label;
    }
    else {
      return false;
    }
  };

  /**
   * Checks if site's screen resolution is included in a concrete layout.
   */
  var isInLayout = function (layout) {
    var layoutWidth = Math.max(document.documentElement.clientWidth,
      window.innerWidth || 0);
    if (layoutWidth <= layout.max) {
      return true;
    }
    else {
      return false;
    }
  };

  /**
   * Determines the page structure based on viewport size and returns if it's
   * changes.
   */
  var setLayout = function () {
    /**
     * Store previous values
     */

    self.memory['reducedLayout'] = self.reducedLayout;
    self.memory['deviceLayout'] = self.deviceLayout;
    self.memory['actualLayout'] = self.actualLayout;

    /**
     * Determine new values
     */

    self.reducedLayout = self.isReducedLayout();
    self.deviceLayout = self.isDeviceLayout();
    self.actualLayout = self.getActualLayout();
  };

  /**
   * Determines the actual orientation for the layout and stores previous
   * values.
   */
  var setOrientation = function () {
    /**
     * Store previous value
     */

    self.memory['orientation'] = self.orientation;

    /**
     * Determine new value
     */
    if (window.innerHeight > window.innerWidth) {
      self.orientation = 'P';
    }
    else {
      self.orientation = 'L';
    }
  };

  /**
   * **** Layout Based UI Transformations
   * ************************************************************************
   */

  /**
   * Change texts of DOM elements based on page layout
   */
  var setLayoutTexts = function () {
    self.ui.$layoutTextItems.each(function () {
      var $item = $(this);
      var layoutTextData = $item.data('layoutText');
      var thisLayoutText = layoutTextData[self.actualLayout] || false;
      var newText = thisLayoutText || $item.data('initialLayoutText');
      $item.text(newText);
    });
  };

  /**
   *  SELF INIT CLASS
   */
  self.init();

  return self;

};
