(function() {
  var ticket = new UT.Models.Ticket( { size: 'Medium' } );
  var bag = new UT.Models.Ticket( { size: 'Medium', ticket: ticket.get('id') } );
  ticket.set('bag', bag.get('id'));

  var tickets = new UT.Collections.Tickets([ ticket ]);
  var bags = new UT.Collections.Bags([ bag ]);

  var Index = new UT.Views.IndexView({ bags: bags, tickets: tickets });
  var EnterTicket = new UT.Views.EnterTicketView({ bags: bags, tickets: tickets });
  var BagDropoff = new UT.Views.BagDropoffView({ bags: bags, tickets: tickets });

  QUnit.module('EnterTicket View');
  QUnit.test('Initial View', function(assert) {
    assert.ok(EnterTicket.tickets.length === tickets.length);
    assert.ok(EnterTicket.bags.length === bags.length);
  });

  QUnit.test('Enable Search', function(assert) {
    $('#ticket-num').val(4);
    EnterTicket.enableSearch();
    assert.notOk($('#search-ticket').hasClass('disabled'));
  });

  QUnit.module('BagDropoff View');
  QUnit.test('Initial View', function(assert) {
    assert.ok(BagDropoff.tickets.length === tickets.length);
    assert.ok(BagDropoff.bags.length === bags.length);
  });

  QUnit.test('Enable Submit', function(assert) {
    $('#bag-size option[value="2"]').attr('selected','selected');
    BagDropoff.enableSubmit();
    assert.notOk($('#reserve-locker').hasClass('disabled'));

    assert.ok(BagDropoff.size === 2);
  });

  QUnit.test('Reserve Locker', function(assert) {
    $('#bag-size option[value="2"]').attr('selected','selected');
    BagDropoff.enableSubmit();
    BagDropoff.reserveLocker({ preventDefault: function() {} });

    var newBag = BagDropoff.bags.pop();
    var newTicket = BagDropoff.tickets.pop();

    assert.ok(newBag.get('size') === 'Large');
    assert.ok(newTicket.get('size') === 'Large');
    assert.ok(newBag.get('ticket') === newTicket.get('id'));
  });

  QUnit.module('Index View');
  QUnit.test('Initial View', function(assert) {
    assert.ok(Index.tickets.length === tickets.length);
    assert.ok(Index.bags.length === bags.length);
  });

  QUnit.test('Config Object', function(assert) {
    assert.ok(UT.Config.max === 1000);
    assert.ok(UT.Config.sizes[0] === 'Small');
    assert.ok(UT.Config.sizes[1] === 'Medium');
    assert.ok(UT.Config.sizes[2] === 'Large');
  });

  QUnit.test('Update max', function(assert) {
    assert.ok($('#hidden-max').val() == 1000);
    $('#update-max').val(5);
    $('#update-max-change').click(function() {
      assert.ok($('#hidden-max').val() == 5);
      assert.ok(UT.Config.max === 5);
    });
  });
})();
