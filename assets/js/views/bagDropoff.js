UT.Views.BagDropoffView = Backbone.View.extend({

    el: '#bag-dropoff-container',

    events: {
      'click #reserve-locker': 'reserveLocker',
      'change #bag-size': 'enableSubmit'
    },

    initialize: function(options) {
      this.tickets = options.tickets;
      this.bags = options.bags;

      _.bindAll(this, 'render', 'reserveLocker', 'enableSubmit', 'renderModal');
    },

    render: function(error) {
      this.$el.html(
        ich.bag_dropoff_template({ error: error })
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

    renderModal: function(newTicket) {
      $('#modal-container').html(ich.dropoff_modal_template({ ticket_num: newTicket.id, size: newTicket.size }));
      $('#dropoffModal').modal();
    },

    reserveLocker: function(e) {
      e.preventDefault();

      var size = this.tickets.getNextAvailable(this.size);

      if (_.isUndefined(size)) {
        // Nothing available
        this.render('Sufficient locker space not available.');
        return undefined;
      }

      // Need to check for returning undefined
      var newTicket = new UT.Models.Ticket({
        size: size
      });

      var newBag = new UT.Models.Bag({
        size: UT.Config.sizes[this.size],
        ticket: newTicket.get('id')
      });

      newTicket.set('bag', newBag.get('id'));
      this.tickets.add(newTicket);
      this.bags.add(newBag);

      // Reset the view
      this.renderModal(newTicket.toJSON());
      this.render();
    },

});
