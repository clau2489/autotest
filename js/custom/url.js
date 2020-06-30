(function (ctx) {

  ctx.SiteURL = {

    getQueryString: function () {
      return decodeURIComponent(window.location.search.substring(1))
    },

    setQueryString: function (query) {
      if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.pathname + '?' + query + window.location.hash);
      } else {
        location.search = query;
      }
    },

    getParams: function () {
      var re = /([^&=]+)=([^&]*)/g, m, params = {};
      while (m = re.exec(this.getQueryString())) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      return params;
    },

    setParams: function (params) {
      this.setQueryString($.param(params));
    },

    getParam: function (param) {
      return this.getParams()[param];
    },

    setParam: function (param, value) {
      var params = this.getParams();
      params[param] = value;
      this.setParams(params);
    }

  };

})(window);