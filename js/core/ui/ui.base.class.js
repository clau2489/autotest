/**
 * Site UI Elements Manager Base Class
 */
var UiBase = function () {

  /**
   *  Base Class Inheritance
   */

  var self = new SiteBase();
  var parent = $.extend(true, {}, self);

  /* ATTRIBUTES ******************************************************************/

  /**
   * This class name
   */
  self.className = 'UiBase';

  /**
   *  UI Pieces.
   */
  self.ui = {};

  /**
   * JQuery animations default speed
   */
  self.animationSpeed = 230;

  /**
   * CSS animation end handler.
   */
  self.cssAnimationHandler = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";


  /**
   *  PUBLIC METHODS ********************************************************************
   */

  /**
   * Initialize this Class.
   */
  self.init = function () {
    initUi();
  };

  /**
   * Refresh ui DOM elements references.
   */
  self.refreshUi = function () {
    initUi();
  };

  /**
   * Show jquery elements delaying some time between each show animation.
   */
  self.showDelayed = function ($items, delay) {
    var delayTime = delay || 300;
    var counter = 0;
    $items.each(function () {
      var $message = $(this);
      $message.delay(delayTime * counter).fadeIn();
      counter++;
    });
  };


  /**
   * Check if two elements collide (some pixels are overlapping) in screen.
   * @param jQuery $elem1
   * @param jQuery $elem2
   * @return boolean
   */
  self.areColliding = function ($elem1, $elem2) {
    var x1 = $elem1.offset().left;
    var y1 = $elem1.offset().top;
    var h1 = $elem1.outerHeight(true);
    var w1 = $elem1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $elem2.offset().left;
    var y2 = $elem2.offset().top;
    var h2 = $elem2.outerHeight(true);
    var w2 = $elem2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    /**
     * Condition
     */

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      return false;
    }
    return true;
  };


  /**
   * Checks if an element is visible in browser window.
   * @param element jQuery Element to check
   * @param fullyInView Full visible
   * @returns {boolean}
   */
  self.isElementInView = function ($element, fullyInView) {
    var pageTop = Math.floor($(window).scrollTop());
    var pageBottom = Math.ceil(pageTop + $(window).height());
    var elementTop = Math.floor($element.offset().top);
    var elementBottom = Math.ceil(elementTop + $element.height()) + 1;

    if (fullyInView === true) {
      return ((pageTop <= elementTop) && (pageBottom >= elementBottom));
    } else {
      return ((pageTop >= elementTop) && (pageTop <= elementBottom)) ||
        ((pageBottom >= elementTop) && (pageBottom <= elementBottom))
    }
  };


  /**
   * PRIVATE METHODS ********************************************************************
   */

  /**
   * Define UI structures and parameters.
   */
  var initUi = function () {
    self.ui.$loader = $(siteConfig.ui.selectors.loader);
    self.ui.$wrapper = $(siteConfig.ui.selectors.mainWrapper);
    self.ui.$header = $(siteConfig.ui.selectors.mainHeader);
    self.ui.$content = $(siteConfig.ui.selectors.mainContent);
    self.ui.$footer = $(siteConfig.ui.selectors.mainFooter);
    self.ui.$leftMenu = $(siteConfig.ui.selectors.leftMenu);
    self.ui.$topMenu = $(siteConfig.ui.selectors.topMenu);
    self.ui.$envDisplayTop = $(siteConfig.ui.selectors.envDisplayTop);
    self.ui.$envDisplay = $(siteConfig.ui.selectors.envDisplay);
  };

  return self;

};

