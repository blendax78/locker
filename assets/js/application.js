// NOTE: 'Namespaced' variables and code and left in the global scope for the sake of demoing and testing.

// Declares Javascript 'namespacing' and initializes router
UT = {};
UT.Views = {};
UT.Models = {};
UT.Collections = {};
UT.Router = {};

function init() {
  // Basic Application Initialization.
  UT.Router.router = new UT.Router.router();
  Backbone.history.start();
}

