UT.Views.IndexView = Backbone.View.extend({
    el: '#ut-container',

    events: {
      'keyup #update-max': 'updateMax'
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

    updateMax: function() {
      var newMax = parseInt($('#update-max').val());

      if (_.isNaN(newMax)) {
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
