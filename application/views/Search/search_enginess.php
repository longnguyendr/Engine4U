
  <!--              Instruction              -->
  <!-- Modal -->
  <div class="container">
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Instruction</h4>
          </div>
          <div class="modal-body">

                    <div class="text-center">
                      <h1>Welcome to Engine4u</h1>
                    </div>
                    <hr>
                    <div>
                      <h4>FOR CUSTOMER</h4><br>
                      <p>To rent a car, you need:</p>
                      <p>1. Login to the system</p>
                      <p>2. Provide searching criterias</p>
                      <p>3. Provide exact your identity and credit car information</p>
                      <p>4. Confirm booking</p>
                    </div>
                    <hr>
                    <div>
                      <h4>FOR HOST</h4><br>
                      <p>To give a car for rent, you need:</p>
                      <p>1. Login to the system</p>
                      <p>2. Add listing</p>
                      <p>3. Equip your listing with details</p>
                      <p>4. Publish your listing</p>
                    </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!--End Instruction-->

  <!--Begin Search -->
      <div class="container text-center">
        <h3>Book at Engine4U for the Best Rates Guaranteed</h3>
        <br>
        <div class="frame-search">
        		<div class="row">
              <!--   Col 4   -->
              	<div style="margin-top:10px;" class="col-sm-4">
                  <label for="s_name">Choose location:</label>
                    <input type="text" id="s_name" class="form-control pick-input" placeholder="Pickup location">
                </div>
              <!--    Col 3  -->

                <div style="margin-top:10px;" class="col-sm-3">
                    <div class="col-sm-12">
                        <label>Check-in</label>
                    </div>
                    <br>
                    <div class="col-sm-12">
                      <div class='input-group date' id='datetimepicker_checkin'>
                          <input type='text' id="chkin" class="form-control" name="check_in" />
                          <span class="input-group-addon">
                              <span class="glyphicon glyphicon-calendar"></span>
                          </span>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <form>
                      <div class="form-group" style="margin-top:10px;">
                        <label for="sel3">Select type of car (select one):</label>
                        <select class="form-control" onload="loadtypecar()" id="discar">
                          <option selected="true">Type of Car</option>
                        </select>
                      </div>
                    </form>
                    </div>
                </div>
                <!--    Col 3  -->
                <div style="margin-top:10px;" class="col-sm-3">
                    <div class="col-sm-12">
                      <label>Check-out:</label>
                    </div>
                    <br>
                    <div class="col-sm-12">
                      <div class='input-group date' id='datetimepicker_checkout'>
                          <input type='text' id="chkout" class="form-control" name="check_out"/>
                          <span class="input-group-addon">
                              <span class="glyphicon glyphicon-calendar"></span>
                          </span>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <form>
                        <div class="form-group" style="margin-top:10px;">
                          <label for="mdy">Select Model year (select one):</label>
                          <select class="form-control" id="mdy" onload="loadmodelyear()">
                            <option selected="true">Model Year</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!--    Col 2  -->
                  <div class="col-sm-2">
                    <div >
                      <button type="button" class="btn-search" onclick="GetCarsBySearch()"> Search</button>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slidecontainer" id="pri">
                      <input type="range" min="0" max="999" value="0" class="slider" id="myRange">
                      <p>Price: <span id="pricerange"></span></p>
                    </div>
                  </div>
            </div>
          </div>
        <hr>
  </div>
  <!--End Search-->

  <!-- body content-->
    <div class="container">
      <div class="row" >
        <!-- Google map API-->
        <div class="col-sm-6">
          <h3>My Google Maps Demo</h3>
          <div id="floating-panel">
            <input id="address" type="textbox" value="Sydney, NSW">
            <input id="submit" type="button" value="Search Location">
          </div>
          <div id="map"></div>
        </div>
        <!-- End google map -->
        <!--Images display-->
        <div class="col-sm-6" style="overflow-y:scroll;height: 500px;">
          <label for="resultss">Results:</label>
          <p id='resultss'></p>
        </div>
        <!--End images display-->
      </div>
    </div>
  <!-- End body content-->
  <hr>
  <script src="<?php echo base_url('js/pricerange.js'); ?>"></script>
  <script src="<?php echo base_url('js/search.js'); ?>"></script>
  <script src="<?php echo base_url('js/searchstyle.js'); ?>"></script>
  <script src="<?php echo base_url('js/googlemap.js');?>"></script>
  <script src="<?php echo base_url('js/datepicker.js'); ?>"></script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcvzlX3wXewDZjucmkOLPL1U_baon3TEA&callback=initMap">
    </script>
