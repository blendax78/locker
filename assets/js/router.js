    UT.Router.router = Backbone.Router.extend({

    routes:
    {
      // Call index() function on '/' route
      "": "index"
    },

    initialize: function() {
      this.tickets = new UT.Collections.Tickets();
      this.bags = new UT.Collections.Bags();

      this.views = [
        'enterTicketView',
        'bagDropoffView',
        'indexView'
      ];
    },

    index: function() {      
      var _this = this;

      this.indexView = new UT.Views.IndexView({ bags: this.bags, tickets: this.tickets });
      this.enterTicketView = new UT.Views.EnterTicketView({ bags: this.bags, tickets: this.tickets });
      this.bagDropoffView = new UT.Views.BagDropoffView({ bags: this.bags, tickets: this.tickets });

      $.each(this.views, function(index, viewName) {
        _this[viewName].render();
      });
    }

});
