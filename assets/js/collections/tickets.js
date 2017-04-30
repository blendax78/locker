UT.Collections.Tickets = Backbone.Collection.extend({
    model: UT.Models.Ticket,

    initialize: function() {
    },

    getUsage: function() {

    },

    getNextAvailable: function() {

    },

    getGroupings: function() {
      var groupings = {};
      var _this = this;

      $.each(UT.Config.sizes, function(index, size) {
        groupings[size] = _this.where({ size: size });
      });

      return groupings
    }
});
