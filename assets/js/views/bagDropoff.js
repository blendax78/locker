UT.Views.BagDropoffView = Backbone.View.extend({

    el: '#bag-dropoff-container',

    events: {
      'click #reserve-locker': 'reserveLocker',
      'change #bag-size': 'enableSubmit'
    },

    initialize: function(options) {
      this.tickets = options.tickets;
      this.bags = options.bags;
      this.newBag = {};

      _.bindAll(this, 'render', 'reserveLocker', 'enableSubmit', 'resetView');
    },

    render: function() {
      this.$el.html(
        ich.bag_dropoff_template({})
      );
    },

    enableSubmit: function() {
      var size = $('#bag-size option:selected').val();
      if (size !== '') {
        $('#reserve-locker').removeClass('disabled');
      } else {
        $('#reserve-locker').addClass('disabled');
      }

      this.newBag = {
        size: size,
        ticket: 1
      };
    },

    reserveLocker: function(e) {
      e.preventDefault();
      this.bags.add(new UT.Models.Bag(this.newBag));

      this.resetView();
      console.log(this.bags);
    },

    resetView: function() {
      this.render();
    }

});
