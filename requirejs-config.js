var config = {

  // When load 'requirejs' always load the following files also
  deps: [
    "js/toggle",
  ],
  paths: {
    "toggle": "js/toggle"
  },
  shim: {
      "toggle": {
          "deps": ["jquery", "jquery/ui", "domReady"]
      }
  }

};
