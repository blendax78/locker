<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  
    <title>Locker Management</title>
    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap-theme.min.css" type="text/css" />
    <link rel="stylesheet" href="/assets/stylesheets/style.css" type="text/css" />
  </head>
  <body class="container">

  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">Locker Management</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
        </div>
    </div>
  </nav>

    <div class="container">
      <div class="row bottom-border">
        <div id="enter-ticket-container" class="col-sm-6 col-md-6 col-lg-6"></div>
        <div id="bag-dropoff-container" class="col-sm-6 col-md-6 col-lg-6"></div>
        <hr/>
      </div>
      <div class="row">
        <div id="ut-container"></div>
      </div>
    </div>

    <script src="/assets/js/libs/LAB.min.js"></script>
    <script src="/assets/js/libs/jquery.min.js"></script>
    <script>
    $(document).ready(function() {
      $LAB
        // Libraries
        .script('/assets/js/libs/underscore-min.js').wait()
        .script('/assets/js/libs/backbone-min.js').wait()
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
        });
    });
    </script>

  <!-- JS Templates -->
    <script id="index_template" type="text/html">
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-8">
          <h2>Locker Statistics</h2>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6">
              <table class="table table-striped table-bordered table-hover table-condensed">
                <tr><th colspan="2">Locker Usage</th></tr>
                {{#groupings}}
                  <tr><th>Small Lockers</th><td>{{#Small}}{{length}}{{/Small}}/{{max}}</td></tr>
                  <tr><th>Medium Lockers</th><td>{{#Medium}}{{length}}{{/Medium}}/{{max}}</td></tr>
                  <tr><th>Large Lockers</th><td>{{#Large}}{{length}}{{/Large}}/{{max}}</td></tr>
                {{/groupings}}
              </table>
            </div>
          </div>
        </div>
      </div>
    </script>

    <script id="enter_ticket_template" type="text/html">
      <div class="row">
        <form class="form-inline">
          <label for="enterTicket">Look Up Ticket # </label>
          <input type="text" class="form-control" id="ticket-num" />
          <button id="search-ticket" class="btn btn-primary disabled">Search</button>
        </form>
      </div>
    </script>

    <script id="bag_dropoff_template" type="text/html">
      <div class="row">
        <form class="form-inline">
          <label for="bagSize">Drop Off Bag: </label>
          <select class="form-control mb-2 mr-sm-2 mb-sm-2" id="bag-size">
            <option value="" selected>Select a Size:</option>
            <option value="0">Small</option>
            <option value="1">Medium</option>
            <option value="2">Large</option>
          </select>
          <button class="btn btn-primary disabled" id="reserve-locker">Reserve Locker</button>
        </form>
      </div>
    </script>

  </body>
</html>