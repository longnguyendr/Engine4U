
<h1>aaaa</h1>

<p>Testing</p>
<button onclick="GetCars('html')">Get All Cars</button>
<button onclick="GetCars('json')">Get All Users(JSON)</button>
<p id='results'>aaa</p>


<!--  -->
<label for="">Write a location:</label>
<input type="text" id="s_name" />
<button onclick="GetCarsBySearch()">Search</button>
<br>
<div class="container">
  <div class="table-responsive">
    <label for="resultss">Results:</label>
    <p id='resultss'></p>
  </div>
</div>
<div class="container">
<td><label for="">CHECK-IN</label></td>
    <td>
        <div class='input-group date' id='datetimepicker_checkin'>
            <input type='text' id="chkin" class="form-control" name="check_in" />
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar" ></span>
            </span>
        </div>
    </td>
  </tr>
  <tr>
    <td><label for="">CHECK-OUT</label></td>
    <td>
      <div class='input-group date' id='datetimepicker_checkout' >
          <input type='text' id="chkout" class="form-control" name="check_out"/>
          <span class="input-group-addon">
              <span class="glyphicon glyphicon-calendar"></span>
          </span>
      </div>
    </td>


    <form>
      <div class="form-group" style="margin-top:10px;">
        <label for="mdy">Select Model year (select one):</label>
        <select class="form-control" id="mdy" onload="loadmodelyear()">
          <option selected="true">Model Year (>= selected year)</option>
        </select>
      </div>
    </form>

    <div class="form-group" style="margin-top:10px;">
      <label for="sel3">Select type of car (select one):</label>
      <select class="form-control" onload="loadtypecar()" id="discar">
        <option selected="true">Type of Car</option>
      </select>
    </div>

    <div class="slidecontainer" id="pri" style="margin-left:0;">
      <input type="range" min="0" max="600" value="0" class="slider" id="myRange">
      <p>Price: <span id="pricerange"></span></p>
    </div>
</div>
    <script src="<?php echo base_url('js/test.js'); ?>"></script>
    <script src="<?php echo base_url('js/pricerange.js'); ?>"></script>
    <script src="<?php echo base_url('js/searchstyle.js'); ?>"></script>
    <script src="<?php echo base_url('js/datepicker.js'); ?>"></script>
