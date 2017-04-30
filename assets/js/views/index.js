UT.Views.IndexView = Backbone.View.extend({
    el: '#ut-container',

    events: {
    },

    initialize: function(options) {
      this.tickets = options.tickets;
      this.bags = options.bags;

      var _this = this;
      this.tickets.on('change', function() {
        console.log('rend');
        _this.render();
      });
    },

    render: function() {
      this.$el.html(
        ich.index_template({})
      );
    }

});
