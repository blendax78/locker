UT.Collections.Tickets = Backbone.Collection.extend({
    model: UT.Models.Ticket,

    initialize: function() {
    },

    getUsage: function() {

    },

    getNextAvailable: function(size) {
      var groupings = this.getGroupings();

      if (groupings[UT.Config.sizes[size]].length !== UT.Config.max) {
        return UT.Config.sizes[size];
      }

      size++;

      if (!_.isUndefined(groupings[UT.Config.sizes[size]])) {
        return this.getNextAvailable(size);  
      } else {
        return undefined;
      }
    },

    getGroupings: function() {
      var groupings = { max: UT.Config.max };
      var group = {};
      var _this = this;

      $.each(UT.Config.sizes, function(index, size) {
        group = _this.where({ size: size });

        groupings[size] = {
          group: group,
          length: group.length
        };
      });

      return groupings
    }
});
