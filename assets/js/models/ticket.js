UT.Models.Ticket = Backbone.Model.extend({
    initialize: function(options) {
      this.set('bag', options.bag || 0);
      this.set('size', options.size || 0);
      this.set('id', parseInt(this.cid.replace('c', '')));
    },
});
