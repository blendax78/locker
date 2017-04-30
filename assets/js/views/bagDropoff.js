UT.Views.BagDropoffView = Backbone.View.extend({

    el: '#bag-dropoff-container',

    events: {
      'click #reserve-locker': 'reserveLocker',
      'change #bag-size': 'enableSubmit'
    },

    initialize: function(options) {
      this.tickets = options.tickets;
      this.bags = options.bags;

      _.bindAll(this, 'render', 'reserveLocker', 'enableSubmit', 'resetView');
    },

    render: function() {
      this.$el.html(
        ich.bag_dropoff_template({})
      );
    },

    enableSubmit: function() {
      if (size !== '') {
        $('#reserve-locker').removeClass('disabled');
      } else {
        $('#reserve-locker').addClass('disabled');
      }

    },

    reserveLocker: function(e) {
      e.preventDefault();

      var size = $('#bag-size option:selected').val();
      var newTicket = new UT.Models.Ticket({
        size: size
      });

      this.tickets.add(newTicket);

      this.bags.add(
        new UT.Models.Bag({
          size: size,
          ticket: newTicket.get('id')
        })
      );

      this.resetView();
    },

    resetView: function() {
      this.render();
    }

});
