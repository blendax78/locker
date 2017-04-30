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
      this.ticket_num = $('#ticket-num').val().trim();
      if (this.ticket_num !== '') {
        $('#search-ticket').removeClass('disabled');
      } else {
        $('#search-ticket').addClass('disabled');
      }
    },

    searchTickets: function(e) {
      e.preventDefault();

      var ticket = this.tickets.get(this.ticket_num);
      if (!ticket) {
        this.render('Ticket not found.');
        return undefined;
      }

      var bag = this.bags.get(ticket.get('bag'));

      if (window.confirm('Bag is in Locker #' + ticket.get('id') + ' (' + ticket.get('size') + ')\nRemove bag?')) {
        this.tickets.remove(ticket);
        this.bags.remove(bag);

        // Reset the view
        this.render();
      }
    },

    render: function(error) {
      this.$el.html(
        ich.enter_ticket_template({ error: error })
      );
    }

});

