UT.Views.IndexView = Backbone.View.extend({
    el: '#ut-container',

    events: {
      // 'click .c4-tile': 'dropTile'
    },

    initialize: function(options) {
      this.tickets = options.tickets;
    },

    render: function() {
      this.$el.html(
        ich.index_template({})
      );
    }

});
