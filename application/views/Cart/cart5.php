
        <!--Left Panel-->
        <div class="col-sm-12" style="padding:25px;">
          <!--Check in-->
            <div class="col-sm-6">
              <tr>
              <td><label for="">CHECK-IN</label></td>
                  <td>
                      <div class='input-group date' id='datetimepicker_checkin'>
                          <input type='text' id="chkin" class="form-control" name="check_in" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </td>
              </tr>
            </div>

          <!--Check out-->
            <div class="col-sm-6">
              <tr>
                <td><label for="">CHECK-OUT</label></td>
                <td>
                  <div class='input-group date' id='datetimepicker_checkout'>
                      <input type='text' id="chkout" class="form-control" name="check_out"/>
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                  </div>
                </td>
              </tr>
            </div>
          <!--Total Price-->
            <div class="col-sm-12">
              <label for="">Total price:</label>
              <div style="font-size: 22px;background-color:silver;box-shadow:4px 6px 10px gray; border-radius:5px;width: 300px;margin:auto;">
                <p id="totalprices" class="text-center">10$ * 10 hours = 3600000$</p>
              </div>
            </div>
        </div>
        <!--end Left panel-->

        <hr>
        <!--Cancellation-->
        <div class="col-sm-12">
            <h3>Cancellation</h3>
            <p>Flexible: Free cancellation up to 24 hours prior  to booking date
              to get full refund</p>
        </div>
