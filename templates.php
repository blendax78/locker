
  <!-- JS Templates -->
    <script id="dropoff_modal_template" type="text/html">
      <div class="modal fade" id="dropoffModal" tabindex="-1" role="dialog" aria-labelledby="dropoffModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="dropoffModalLabel">New Ticket</h4>
            </div>
            <div class="modal-body">
              Your ticket/locker number is: <h3>{{ticket_num}} ({{size}} Locker)</h3>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Print & Close</button>
            </div>
          </div>
        </div>
      </div>
    </script>

    <script id="index_template" type="text/html">
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-8">
          <h2>Locker Statistics</h2>
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6">
              <table class="table table-striped table-bordered table-hover table-condensed">
                <tr><th colspan="2">Locker Usage</th></tr>
                {{#groupings}}
                  <input type="hidden" id="hidden-max" value="{{max}}" />
                  <tr><th>Small Lockers</th><td>{{#Small}}{{length}}{{/Small}}/{{max}}</td></tr>
                  <tr><th>Medium Lockers</th><td>{{#Medium}}{{length}}{{/Medium}}/{{max}}</td></tr>
                  <tr><th>Large Lockers</th><td>{{#Large}}{{length}}{{/Large}}/{{max}}</td></tr>
                {{/groupings}}
              </table>
            </div>
          </div>
        </div>
        <div class="row bottom-right">
          <form class="form-inline">
            <label for="update-max">Max Lockers (dev): </label>
            <input type="text" class="form-control" id="update-max" />
            <button class="btn" id="update-max-change">Update</button>
          </form>
        </div>
      </div>
    </script>

    <script id="enter_ticket_template" type="text/html">
      <div class="row">
        <form class="form-inline">
          <label for="ticket-num">Look Up Ticket # </label>
          <input type="text" class="form-control" id="ticket-num" />
          <button id="search-ticket" class="btn btn-primary disabled">Search</button>
        </form>
        <div class="error-msg">{{error}}</div>
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
        <div class="error-msg">{{error}}</div>
      </div>
    </script>
