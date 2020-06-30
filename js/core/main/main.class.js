/**
 * Site Main JS Behaviour Class.
 */
var SiteMain = function (params) {

  // Base Class Inheritance
  var self = new SiteBase();
  var parent = $.extend(true, {}, self);


  /* ATTRIBUTES ********************************************************/
  /** This class name **/
  self.className = "SiteMain";

  /** Language Manager **/
  self.lang = false;

  /** Navigation Manager **/
  self.nav = false;

  /** Utils **/
  self.utils = {};

  /** UI Managers. */
  self.ui = {};

  /** Block Managers **/
  self.blocks = {};

  /** Page Managers **/
  self.pages = {};

  /** Includes **/
  self.includes = {};

  /**
   * Default options for class initialization
   **/
  self.options = {
    /**
     * Lazy initialization => Controls Manual initialization of this class.
     */
    lazy: false,
    /**
     * Auto hide Loader => Controls manual Loader hiding
     */
    autoHideLoader: true,
    /**
     * Callback to call when initialization ends.
     */
    afterInit: $.noop
  };


  /* PUBLIC METHODS *************************************************************/

  /**
   * Initialize this Class.
   */
  self.init = function () {
    self.log("Init Site", params);
    $.extend(true, self.options, params);
    initGlobalEventHandler();
    initUtils();
    if (!self.options.lazy) {
      self.lazyInit();
    }
  };

  /**
   * Lazy initialization.
   */
  self.lazyInit = function () {
    self.log("Lazy INIT");
    initConfig();
    initBrowser();
    initNavigation();
    initUi();
  };


  /* PRIVATE METHODS *************************************************************/

  /**
   * Initialize General jQuery object for bind global events
   */
  var initGlobalEventHandler = function () {
    window.customEvents = $(document);
  };

  /**
   * Initialize browser manager.
   * @see https://github.com/ded/bowser.
   */
  var initBrowser = function () {
    self.browser = new SiteBrowser();
  };

  /**
   * Initialize util's global object.
   */
  var initUtils = function () {
    self.utils = new Utils();
  };

  /**
   * Initialize 'Navigation between pages' Manager.
   */
  var initNavigation = function () {
    self.nav = new SiteNavigation();
  };

  /**
   * Establishes global config parameters using CORE config and Custom config files.
   * js/core/config.js (base options)
   * js/custom/config.js (full custom options)
   * js/customize.js (basic custom options)
   */
  var initConfig = function () {

    //Check for base config. (CORE)
    if (typeof siteConfig === "undefined") {
      console.error("No config object avaliable!");
      return;
    }

    //Check for custom config override. (CUSTOM)
    if (typeof customConfig !== "undefined") {
      $.extend(true, siteConfig, customConfig);
    }

    // Check for basic customize file values.
    if (typeof customize !== "undefined") {
      initCustomizeFile(customize);
    }

  };

  /**
   * Define UI structures and parameters.
   */
  var initUi = function () {
    var initCb = function () {
      initLayout();
      initPages();
      if ($.isFunction(self.options.afterInit)) self.options.afterInit();
      if (self.options.autoHideLoader) self.ui.components.loader.hideMainLoader();
    };
    if (siteConfig.nav.onePageNav) {
      self.nav.initActualPage(initCb);
    } else {
      initCb();
    }
  };

  /**
   * Initialize Layout ans Structure Manager.
   */
  var initLayout = function () {
    if (siteConfig.layoutDisplay) $("body").addClass("layd"); // Layout Display
    self.ui.layout = new LayoutManager();
  };

  /**
   * Initialize UI Page Managers.
   */
  var initPages = function () {
    self.pages.dashboard = (typeof Page_Dashboard === 'function') ? new Page_Dashboard() : null;
  };


  /* SELF INIT CLASS */
  self.init();

  return self;

};