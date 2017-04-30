// NOTE: 'Namespaced' variables and code and left in the global scope for the sake of demoing and testing.

// Declares Javascript 'namespacing' and initializes router
UT = {};
UT.Views = {};
UT.Models = {};
UT.Collections = {};
UT.Router = {};
UT.Config = {};

function init() {
  // Basic Application Initialization.

  UT.Config.max = 1000;
  UT.Config.sizes = [ 'Small', 'Medium', 'Large'];
  UT.Router.router = new UT.Router.router();

  Backbone.history.start();
}

