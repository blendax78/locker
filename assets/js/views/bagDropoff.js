UT.Views.BagDropoffView = Backbone.View.extend({

    el: '#bag-dropoff-container',

    events: {
      // 'click .c4-tile': 'dropTile'
    },

    initialize: function(options) {
      // this.tickets = options.tickets;
      // Change to bags
    },

    render: function() {
      this.$el.html(
        ich.bag_dropoff_template({})
      );
    }

});
