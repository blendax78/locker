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
      this.size = parseInt($('#bag-size option:selected').val());

      if (!_.isUndefined(this.size)) {
        $('#reserve-locker').removeClass('disabled');
      } else {
        $('#reserve-locker').addClass('disabled');
      }

    },

    reserveLocker: function(e) {
      e.preventDefault();

      // Need to check for returning undefined
      var newTicket = new UT.Models.Ticket({
        size: this.tickets.getNextAvailable(this.size)
      });

      var newBag = new UT.Models.Bag({
        size: UT.Config.sizes[this.size],
        ticket: newTicket.get('id')
      });

      newTicket.set('bag', newBag.get('id'));
      this.tickets.add(newTicket);
      this.bags.add(newBag);

      this.resetView();
    },

    resetView: function() {
      this.render();
    }

});
