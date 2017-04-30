<!DOCTYPE html>
<html>
<head>
    <title>QUnit Test Suite</title>

    <link rel="stylesheet" href="https://code.jquery.com/qunit/qunit-2.3.2.css">

    <script src="/assets/js/libs/LAB.min.js"></script>
    <script src="/assets/js/libs/jquery.min.js"></script>
    <script>
    $(document).ready(function() {
      $LAB
        // Libraries
        .script('/assets/js/libs/underscore-min.js').wait()
        .script('/assets/js/libs/backbone-min.js').wait()
        .script('https://code.jquery.com/qunit/qunit-2.3.2.js').wait()
        .script('/assets/js/libs/ICanHaz.min.js')
        .script('/assets/bootstrap/js/bootstrap.min.js')
        // Backbone Objects
        .script('/assets/js/application.js').wait()
        .script('/assets/js/router.js').wait()
        .script('/assets/js/models/ticket.js')
        .script('/assets/js/models/bag.js')
        .script('/assets/js/collections/tickets.js')
        .script('/assets/js/collections/bags.js')
        .script('/assets/js/views/bagDropoff.js')
        .script('/assets/js/views/enterTicket.js')
        .script('/assets/js/views/index.js').wait(function(){
          // Backbone Initialization
          init();
        })
        .script('/assets/js/tests/models.js')
        .script('/assets/js/tests/collections.js')
        .script('/assets/js/tests/views.js');
    });
    </script>

</head>
<body>
    <h1 id="qunit-header">QUnit Test Suite</h1>
    <h2 id="qunit-banner"></h2>
    <div id="qunit-testrunner-toolbar"></div>
    <h2 id="qunit-userAgent"></h2>
    <ol id="qunit-tests">test markup, hidden.</ol>

    <div class="container" style="visibility: hidden;">
      <div class="row bottom-border">
        <div id="enter-ticket-container" class="col-sm-6 col-md-6 col-lg-6"></div>
        <div id="bag-dropoff-container" class="col-sm-6 col-md-6 col-lg-6"></div>
        <hr/>
      </div>
      <div id="modal-container"></div>
      <div class="row">
        <div id="ut-container"></div>
      </div>
    </div>

    <?php require_once('../../../templates.php'); ?>
</body>
</html>