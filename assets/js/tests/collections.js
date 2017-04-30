(function() {
  var ticket = new UT.Models.Ticket( { size: 'Medium' } );
  var bag = new UT.Models.Ticket( { size: 'Medium', ticket: ticket.get('id') } );
  ticket.set('bag', bag.get('id'));

  var tickets = new UT.Collections.Tickets([ ticket ]);
  var bags = new UT.Collections.Bags([ bag ]);

  QUnit.module('Tickets');
  QUnit.test('Initial Ticket Collection', function(assert) {
    assert.ok(tickets.length === 1);
    assert.ok(tickets.pluck('size')[0] === 'Medium');
  });

  QUnit.test('Add to Ticket Collection', function(assert) {
    tickets.add(ticket.clone());
    assert.ok(tickets.length === 2);
  });

  QUnit.test('Remove from Ticket Collection', function(assert) {
    tickets.remove(tickets.models[1]);
    assert.ok(tickets.length === 1);
  });

  QUnit.test('Empty Ticket Collection', function(assert) {
    var emptyTickets = new UT.Collections.Tickets();
    assert.ok(emptyTickets.length === 0);
  });

  QUnit.test('Ticket Groupings', function(assert) {
    var groupings = tickets.getGroupings();

    assert.ok(groupings.max === 1000);
    assert.ok(groupings.Small.length === 0);
    assert.ok(groupings.Medium.length === 1);
    assert.ok(groupings.Large.length === 0);
  });

  QUnit.test('Update Ticket Groupings', function(assert) {
    for (var i = 0; i < 999; i++) {
      tickets.add(ticket.clone());
    }
    var groupings = tickets.getGroupings();

    assert.ok(groupings.max === 1000);
    assert.ok(groupings.Small.length === 0);
    assert.ok(groupings.Medium.length === 1000);
    assert.ok(groupings.Large.length === 0);
  });

  QUnit.test('Ticket getNextAvailable', function(assert) {
    var next = {
      'Small': tickets.getNextAvailable(0),
      'Medium': tickets.getNextAvailable(1),
      'Large': tickets.getNextAvailable(2)
    };

    assert.ok(next.Small === 'Small');
    assert.ok(next.Medium === 'Medium');
    assert.ok(next.Large === 'Large');

    var newTickets = tickets.clone();
    for (var i = 0; i < 999; i++) {
      newTickets.add(ticket.clone());
    }

    assert.ok(newTickets.getNextAvailable(1) === 'Large');
    assert.notOk(newTickets.getNextAvailable(1) === 'Medium');
  });

  QUnit.test('Nothing Available', function(assert) {
    var newTickets = tickets.clone();
    for (var i = 0; i <= 999; i++) {
      newTickets.add(new UT.Models.Ticket({ size: 'Large' }));
    }

    assert.ok(_.isUndefined(newTickets.getNextAvailable(2)));
  });


  QUnit.module('Bags');
  QUnit.test('Initial Bag Collection', function(assert) {
    assert.ok(bags.length === 1);
    assert.ok(bags.pluck('size')[0] === 'Medium');
  });

  QUnit.test('Add to Bag Collection', function(assert) {
    bags.add(bag.clone());
    assert.ok(bags.length === 2);
  });

  QUnit.test('Remove from Bag Collection', function(assert) {
    bags.remove(bags.models[1]);
    assert.ok(bags.length === 1);
  });

  QUnit.test('Empty Bag Collection', function(assert) {
    var emptyBags = new UT.Collections.Bags();
    assert.ok(emptyBags.length === 0);
  });

})();
