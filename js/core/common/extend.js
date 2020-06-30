/**
 * EXTEND JQUERY BEHAVIOUR
 * @require jQuery Lib.
 */

(function( $ ){

  /**
   * Returns selector's outer HTML, including own HTML.
   * @returns {*|string}
   */
  $.fn.outerHtml = function() {
    return this[0].outerHTML;
  };

  /**
   * Initialize accessible click elements behaviour.
   * Mouse click = keypress Enter key.
   */
  $.fn.setAccesibleClick = function () {
    return this.each(function() {
      $(this).off("keypress").on("keypress", function (evt) {
        if ($(this).is("a[href]")) return;
        var keyCode = evt.which || evt.keyCode;
        if (keyCode == "13") {
          evt.preventDefault();
          $(this).trigger("click");
        }
      });
    });
  };

  /**
   * Detach an item saving his actual position in container.
   */
  $.fn.detachItem = function() {
    this.data('dt_placeholder',$('<span class="det-plh hidden" />').insertAfter( this ));
    return this.detach();
  };

  /**
   * Reattach an item in his previous position.
   * @returns {jQuery}
   */
  $.fn.attachItem = function() {
    if(this.data('dt_placeholder')){
      this.insertBefore( this.data('dt_placeholder') );
      this.data('dt_placeholder').remove();
      this.removeData('dt_placeholder');
    }
    else if(window.console && console.error)
      console.error("Unable to reattach this element because its placeholder is not available.");
    return this;
  };


})( jQuery );


/**
 * EXTEND OBJECT PROTOTYPE
 */
Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};