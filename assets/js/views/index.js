UT.Views.IndexView = Backbone.View.extend({
    el: '#ut-container',

    events: {
    },

    initialize: function(options) {
      this.tickets = options.tickets;
      this.bags = options.bags;

      this.tickets.on('add remove', function() {
        this.render();
      }, this);
    },

    render: function() {
      this.$el.html(
        ich.index_template({ groupings: this.tickets.getGroupings() })
      );
    }

});
