/**
 * Site Browser JS Class.
 * Manages Browser|OS detection and compatibility checking.
 */
var SiteBrowser = function () {

  // Base Class Inheritance
  var self = new SiteBase();
  var parent = $.extend(true, {}, self);

  /* ATTRIBUTES ********************************************************/

  /** This class name **/
  self.className = "SiteBrowser";

  /** Bowser Library Manager **/
  self.bowserLib = false;

  /** Formatted browser and OS information **/
  self.info = {};

  /** UI references. */
  self.ui = {};

  /** Browser was checked **/
  self.checked = false;

  /** MAQINT is supported or not **/
  self.supported = true;

  /** Prefix for body classes **/
  self.bodyClassPrefix = "bw-";


  /* PUBLIC METHODS *************************************************************/

  /**
   * Initialize this Class.
   */
  self.init = function () {
    self.log("Init Site Browser Manager");
    initLib();
    initInfo();
    initApi();
    initUi();
    checkBrowserSupport();
  };

  /**
   * Get Browser|OS detection main information.
   * @return Object Browser detection info.
   */
  self.getInfo = function () {
    return self.info;
  };

  /**
   * Get Browser detection main information.
   * @return Object Browser detection info.
   */
  self.getBrowser = function () {
    return self.info.browser;
  };

  /**
   * Get OS detection main information.
   * @return Object OS detection info.
   */
  self.getOs = function () {
    return self.info.os;
  };

  /**
   * Check if browser is of "id" type.
   * @param {String} id Browser Id ('chrome', 'firefox', 'msedge', 'msie', ....)
   * @return {Boolean}
   */
  self.isBrowser = function (id) {
    return (self.info.browser[id.toLowerCase()] || false);
  };

  /**
   * Check if OS is of "id" type.
   * @param {String} id OS Id ('chrome', 'firefox', 'msedge', 'msie', ....)
   * @return {Boolean}
   */
  self.isOs = function (id) {
    return (self.info.os[id.toLowerCase()] || false);
  };

  /**
   * Check if actual browser is a supported browser.
   */
  self.isSupportedBrowser = function () {
    if (!siteConfig.browser.minVersion) return true;
    else {
      return self.bowserLib.check(siteConfig.browser.minVersion, window.navigator.userAgent);
    }
  };


  /* PRIVATE METHODS *************************************************************/

  /**
   * Define Site's main API Methods.
   */
  var initApi = function () {
    self.addToMainApi({
      getInfo: self.getInfo,
      getBrowser: self.getBrowser,
      getOs: self.getOs,
      isBrowser: self.isBrowser,
      isOs: self.isOs,
      isSupportedBrowser: self.isSupportedBrowser
    }, "browser");
  };

  /**
   * Initialize Browser and OS information.
   */
  var initInfo = function () {
    self.info = {
      "browser": {
        "actual": {
          "id": ((self.bowserLib.chrome ? "chrome" : false) || (self.bowserLib.firefox ? "firefox" : false)
          || (self.bowserLib.msedge ? "msedge" : false) || (self.bowserLib.msie ? "msie" : false)
          || (self.bowserLib.safari ? "safari" : false) || (self.bowserLib.opera ? "opera" : false)
          || (self.bowserLib.ios ? "ios" : false) || (self.bowserLib.android ? "android" : false)
          || (self.bowserLib.webos ? "webos" : false)),
          "name": self.bowserLib.name || false,
          "version": self.bowserLib.version || false
        },
        "chrome": self.bowserLib.chrome || false,
        "firefox": self.bowserLib.firefox || false,
        "ff_quantum": (self.bowserLib.firefox && (self.bowserLib.compareVersions([self.bowserLib.version, '57']) > -1)) || false,
        "msedge": self.bowserLib.msedge || false,
        "msie": self.bowserLib.msie || false,
        "safari": self.bowserLib.safari || false,
        "opera": self.bowserLib.opera || false,
        "ios": self.bowserLib.ios || false,
        "android": self.bowserLib.android || false,
        "webos": self.bowserLib.webos || false,
        "engine": {
          "webkit": self.bowserLib.webkit || false,
          "blink": self.bowserLib.blink || false,
          "gecko": self.bowserLib.gecko || false,
          "msie": self.bowserLib.msie || false,
          "msedge": self.bowserLib.msedge || false
        }
      },
      "os": {
        "actual": {
          "id": ((self.bowserLib.mac ? "mac" : false) || (self.bowserLib.windows ? "windows" : false)
          || (self.bowserLib.linux ? "linux" : false) || (self.bowserLib.android ? "android" : false)
          || (self.bowserLib.ios ? "ios" : false) || (self.bowserLib.webos ? "webos" : false)),
          "name": self.bowserLib.osname || false,
          "version": self.bowserLib.osversion || false
        },
        "mac": self.bowserLib.mac || false,
        "windows": self.bowserLib.windows || false,
        "linux": self.bowserLib.linux || false,
        "android": self.bowserLib.android || false,
        "ios": self.bowserLib.ios || false,
        "webos": self.bowserLib.webos || false
      }
    }
  };

  /**
   * Encapsulate library methods for browser detection management (Bowser).
   * @see https://github.com/lancedikson/bowser
   */
  var initLib = function () {
    if (bowser) {
      self.bowserLib = bowser;
    }
  };

  /**
   * Initilaize UI elements.
   */
  var initUi = function () {
    self.ui.$supportInfoModal = $("#modal-support-info");
  };

  /**
   * Check Browser Support for MAQINT.
   */
  var checkBrowserSupport = function () {
    if (!siteConfig.browser.minVersion) return;
    self.supported = self.isSupportedBrowser();
    self.log("Browser Supported:", self.supported, self.info.browser.actual, self.info.os.actual);

    // Add CSS classes to Body
    if (self.info.browser.actual.name) {
      $("body").addClass(self.bodyClassPrefix + self.info.browser.actual.id);
    }
    if (self.supported) {
      $("body").addClass(self.bodyClassPrefix + "supported");
    }

    // Show Suport Warning.
    if (siteConfig.browser.showSupportWarning) {
      $(document).on("maqint:ready", checkBrowserProcess);
      setTimeout(checkBrowserProcess, 3000); // Alternative checking (if previous fails).
    }
  };

  /**
   * Execute Browser process when browser suport checking is done.
   */
  var checkBrowserProcess = function () {
    if (self.checked) return;
    if (self.supported) {
      self.ui.$supportInfoModal = $("#modal-support-info");
      self.ui.$supportInfoModal.remove();
    } else {
      showSupportInfo();
    }
    self.checked = true;
  };


  /**
   * Show Browser Support info modal window.
   */
  var showSupportInfo = function () {
    self.ui.$supportInfoModal = $("#modal-support-info");
    self.ui.$supportInfoModal.find("#browser-info .description")
      .text(self.info.browser.actual.name + " v." + self.info.browser.actual.version);
    self.ui.$supportInfoModal.find("#os-info .description")
      .text(self.info.os.actual.name + " v." + self.info.os.actual.version);

    //Write Minimum versions on modal body
    for (var brow in siteConfig.browser.minVersion) {
      var vers = siteConfig.browser.minVersion[brow];
      self.ui.$supportInfoModal.find(".version." + brow).text(" >= v." + vers);
    }

    // Show modal window.
    self.ui.$supportInfoModal.modal("show");
  };


  /* SELF INIT CLASS */
  self.init();

  return self;

};