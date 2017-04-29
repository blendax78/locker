UT.Views.EnterTicketView = Backbone.View.extend({

    el: '#enter-ticket-container',

    events: {
      // 'click .c4-tile': 'dropTile'
    },

    initialize: function(options) {
      this.tickets = options.tickets;
    },

    render: function() {
      this.$el.html(
        ich.enter_ticket_template({})
      );
    }

});

