/**
 * Base Class with common functions.
 */
var SiteBase = function () {
  
  /* ATTRIBUTES ******************************************************************/

  /** Debug mode established **/
  this.DEBUG = siteConfig.debug || false;

  /** This class name **/
  this.className = 'SiteBase';

  /** Default text to log on execution stop **/
  this.executionStopDefaultText = 'Site forces to Stop JS Execution';

  /** Use for store anything **/
  this.memory = {};

  /* METHODS *********************************************************************/

  /**
   * Add methods defined in the class object named "api" in general site API.
   * @param apiMethods Object containing methods to add to main API.
   * @param key: name for method's container in API object.
   *  Empty: uses "class name".
   *  false: Stores methods in object's first level.
   */
  this.addToMainApi = function (apiMethods, key) {

    var api = apiMethods || {};
    var keyName = this.className;
    if (typeof(key) !== "undefined") {
      keyName = key;
    }

    if (!siteConfig.api || !$.isPlainObject(api) || !Object.size(api)) return;

    if (typeof window[siteConfig.api] === "undefined") {
      window[siteConfig.api] = {
        version: siteConfig.version
      };
      this.log("Main API initialized -> " + siteConfig.api, window[siteConfig.api]);
    }

    if (!keyName) {
      window[siteConfig.api] = $.extend(window[siteConfig.api], api);
    } else if (typeof window[siteConfig.api][keyName] === "undefined") {
      window[siteConfig.api][keyName] = api;
    } else {
      window[siteConfig.api][keyName] = $.extend(window[siteConfig.api][keyName], api);
    }

  };


  /* --- Debugging Functions ------------------------------------------------------------------ */

  /**
   * Debug Class Log
   */
  this.log = function () {
    if (!this.DEBUG) return;
    var args = [].slice.apply(arguments);
    var caller = this.getLineNumber();
    args.unshift("[" + this.className + "]" + (caller.name ? " [" + caller.name + "]" : " ") + "=> Line " + caller.line + "\n");
    console.info.apply(console, args);
  };

  /**
   * Force to stop JS execution.
   * Throws an error and finish any JS execution before that
   */
  this.stopExecution = function (errorText) {
    var text = errorText || this.executionStopDefaultText;
    throw new Error('[' + text + ']');
  };

  /**
   * Returns line number of the caller function
   */
  this.getLineNumber = function () {
    function getErrorObject(){
      try { throw Error('') } catch(err) { return err; }
    }
    var err = getErrorObject();
    var caller = "unknown";
    var number = "unknown";
    if (typeof err.stack !== "undefined") {
      var caller_line = err.stack.split("\n")[5];
      var pieces = caller_line.split(":");
      number = pieces[pieces.length-2];
      var findCaller = pieces[0].split("at ");
      caller = (findCaller[1]) ? findCaller[1].split(" ")[0] : false;
    }
    return {
      line : number,
      name : caller
    }
  };

};