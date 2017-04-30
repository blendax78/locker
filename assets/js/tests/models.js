(function() {
  var ticket = new UT.Models.Ticket( { size: 'Medium' } );
  var bag = new UT.Models.Ticket( { size: 'Medium', ticket: ticket.get('id') } );
  ticket.set('bag', bag.get('id'));


  QUnit.module('Tickets');
  QUnit.test('Ticket Setup', function(assert) {
    assert.ok(ticket.get('id') === parseInt(ticket.cid.replace('c', '')));
    assert.ok(ticket.get('bag') === bag.get('id'));
    assert.ok(ticket.get('size') === 'Medium');
  });

  QUnit.test('Blank Ticket', function(assert) {
    var blankTicket = new UT.Models.Ticket({});

    assert.ok(blankTicket.get('id') === parseInt(blankTicket.cid.replace('c', '')));
    assert.ok(blankTicket.get('bag') === 0);
    assert.ok(blankTicket.get('size') === 0);
  });

  QUnit.module('Bags');
  QUnit.test('Bag Setup', function(assert) {
    assert.ok(bag.get('id') === parseInt(bag.cid.replace('c', '')));
    assert.ok(bag.get('ticket') === ticket.get('id'));
    assert.ok(bag.get('size') === 'Medium');
  });

  QUnit.test('Blank Bag', function(assert) {
    var blankBag = new UT.Models.Bag({});

    assert.ok(blankBag.get('id') === parseInt(blankBag.cid.replace('c', '')));
    assert.ok(blankBag.get('ticket') === 0);
    assert.ok(blankBag.get('size') === 0);
  });

})();
