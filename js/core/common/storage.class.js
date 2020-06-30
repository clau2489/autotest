/**
 * HTML5 Web Storage management
 */
var Storage = {

  self: this,

  /**
   * Check if web storage is possible.
   * @param type storage type
   * @returns {boolean}
   */
  check: function(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  },

  /**
   * Checks if string is a json parseable value.
   */
  tryParseJSON: function (jsonString){
    try {
      var o = JSON.parse(jsonString);
      if (o && typeof o === "object" && o !== null) return o;
    }
    catch (e) { }
    return false;
  },

  /* Local Storage Manager ******************************************************************************/
  ls : {

    /**
     * Checks if localStorage works in the browser.
     * @returns {boolean}
     */
    exists: function () {
      return Storage.check('localStorage');
    },

    /**
     * Store data by key
     * @param string key Key
     * @param mixed value Data to store
     */
    set : function (key, value) {
      var tosave = "";
      if (typeof value === 'object') tosave = JSON.stringify(value);
      else tosave = value;

      if (Storage.check('localStorage')) localStorage.setItem(key, tosave);
    },

    /**
     * Return stored data by key
     * @param string key
     * @return mixed Stored data
     */
    get : function (key, defValue) {
      var def = defValue || null;
      var value = (Storage.check('localStorage')) ? localStorage.getItem(key) : null;
      if (value === null) return def;
      else return (Storage.tryParseJSON(value)) ? JSON.parse(value) : value;
    },

    /**
     * Remove stored data by key
     * @param string key
     */
    remove : function (key) {
      if (Storage.check('localStorage')) localStorage.removeItem(key);
    }

  },

  /* Session Storage Manager *****************************************************************************/
  ss: {

    /**
     * Checks if sessionStorage works in the browser.
     * @returns {boolean}
     */
    exists: function () {
      return Storage.check('sessionStorage');
    },

    /**
     * Store data by key
     * @param string key Key
     * @param mixed value Data to store
     */
    set : function (key, value) {
      var tosave = "";
      if (typeof value === 'object') tosave = JSON.stringify(value);
      else tosave = value;
      if (Storage.check('sessionStorage')) sessionStorage.setItem(key, tosave);
    },

    /**
     * Return stored data by key
     * @param string key
     * @param mixed defValue Value to return if key doesn't exists.
     * @return mixed Stored data
     */
    get : function (key, defValue) {
      var def = defValue || null;
      var value = (Storage.check('sessionStorage')) ? sessionStorage.getItem(key) : null;
      if (value === null) return defValue;
      else return (Storage.tryParseJSON(value)) ? JSON.parse(value) : value;
    },

    /**
     * Remove stored data by key
     * @param string key
     */
    remove : function (key) {
      if (Storage.check('sessionStorage')) sessionStorage.removeItem(key);
    }
  }
};

