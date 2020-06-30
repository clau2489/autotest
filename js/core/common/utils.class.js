/**
 * Common JS utils.
 * @require jQuery Lib.
 */
var Utils = function () {

  var self  = this;

  /**
   * Generate an unique id based in mk-time.
   * @returns {*}
   */
  self.getUniqueId = function () {
    // desired length of Id
    var idStrLen = 32;
    // always start with a letter -- base 36 makes for a nice shortcut
    var idStr = (Math.floor((Math.random() * 25)) + 10).toString(36) + "_";
    // similar to above, complete the Id using random, alphanumeric characters
    do {
      idStr += (Math.floor((Math.random() * 35))).toString(36);
    } while (idStr.length < idStrLen);

    return (idStr);
  };
  
  /**
   * Get URL parameters
   * @param sParam Parámetro concreto a obtener
   * @returns {*}
   */
  self.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i, returnVal;

    if (!sPageURL) return "";

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (typeof sParam === 'undefined') {
        returnVal = returnVal || {};
        returnVal[sParameterName[0]] = sParameterName[1];
      }
      else if (sParameterName[0] === sParam) {
        returnVal = sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
    return returnVal;
  };

  /**
   * Replace all occurrences of a substring in a string for another string.
   * @param string String where to find
   * @param search Substring to search
   * @param replacement String to replace for search occurrences
   * @returns {string}
   */
  self.replaceAll = function (string, search, replacement) {
    return string.replace(new RegExp(search, 'g'), replacement);
  };

  /**
   * Copy custom text or an jquery element's text into clipboard.
   * @param element jquery element or text to copy
   */
  self.copyToClipboard = function(element) {
    var copyText = element;
    if (element instanceof jQuery) {
      copyText = element.text();
    }
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(copyText).select();
    document.execCommand("copy");
    $temp.remove();
  };

  /**
   * Get all CSS rules of the page
   * @param filter CSS rule filter (Beginning of the rule)
   * @returns {Array} CSS rules
   */
  self.readAllCssRules = function (filter) {
    var allRules = [];
    var sSheetList = document.styleSheets;
    for (var sSheet = 0; sSheet < sSheetList.length; sSheet++)
    {
      var ruleList = document.styleSheets[sSheet].cssRules;
      if (ruleList && ruleList.length > 0) {
        for (var rule = 0; rule < ruleList.length; rule ++)
        {
          var selectorText = ruleList[rule].selectorText;
          if (!selectorText) continue;
          if (filter && (selectorText.search(filter) !== 0)) continue;
          allRules.push( ruleList[rule].selectorText );
        }
      }
    }
    return allRules;
  };

  return self;

};
