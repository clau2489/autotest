/**
 * Site Pages Manager Base Class
 */
var PageBase = function () {

  /**
   *  Base Class Inheritance
   */

  var self = new UiBase();
  var parent = $.extend(true, {}, self);

  /* ATTRIBUTES ******************************************************************/

  /**
   * This class name
   */
  self.className = 'PageBase';

  /**
   * Page ID
   */
  self.pageSelector = "#_basePage_";


  /**
   *  PUBLIC METHODS ********************************************************************
   */

  /**
   * Initialize this Class.
   */
  self.init = function () {
    parent.init();
    self.ui.$page = self.ui.$content.find(self.pageSelector);
  };

  /**
   * Checks if page that manages this class exists in DOM.
   */
  self.checkPage = function () {
    return self.ui.$page.length;
  };

  return self;

};
