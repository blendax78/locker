UT.Views.EnterTicketView = Backbone.View.extend({

    el: '#enter-ticket-container',

    events: {
      'click #search-ticket': 'searchTickets',
      'keyup #ticket-num': 'enableSearch'
    },

    initialize: function(options) {
      this.tickets = options.tickets;
      this.bags = options.bags;

      _.bindAll(this, 'render', 'searchTickets', 'enableSearch');
    },

    enableSearch: function() {
      if ($('#ticket-num').val().trim() !== '') {
        $('#search-ticket').removeClass('disabled');
      } else {
        $('#search-ticket').addClass('disabled');
      }
    },

    searchTickets: function(e) {
      e.preventDefault();
      var ticket_num = $('#ticketNum').val();
      console.log('search');
    },

    render: function() {
      this.$el.html(
        ich.enter_ticket_template({})
      );
    }

});

