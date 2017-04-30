UT.Models.Bag = Backbone.Model.extend({
    initialize: function(options) {
      this.set('id', parseInt(this.cid.replace('c', '')));
      this.set('size', options.size || '');
      this.set('ticket', options.ticket || 0);
    },
});
