UT.Views.IndexView = Backbone.View.extend({
    el: '#ut-container',

    events: {
      'click #update-max-change': 'updateMax'
    },

    initialize: function(options) {
      this.tickets = options.tickets;
      this.bags = options.bags;

      _.bindAll(this, 'render', 'updateMax');

      this.tickets.on('add remove', function() {
        this.render();
      }, this);

      this.on('changed:max', function() {
        this.render();
      });
    },

    updateMax: function(e) {
      e.preventDefault();
      var newMax = parseInt($('#update-max').val());

      if (_.isNaN(newMax) || newMax < 1) {
        newMax = 1000;
      }

      UT.Config.max = newMax;
      this.trigger('changed:max');
    },

    render: function() {
      this.$el.html(
        ich.index_template({ groupings: this.tickets.getGroupings() })
      );
    }

});
