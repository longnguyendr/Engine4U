
<h1>aaaa</h1>

<p>Testing</p>
<button onclick="GetCars('html')">Get All Cars</button>
<button onclick="GetCars('json')">Get All Users(JSON)</button>
<p id='results'>aaa</p>


<!--  -->
<label for="">Write a location:</label>
<input type="text" id="s_name" />
<button onclick="GetCarsByLocation()">Search</button>
<br>
<label for="resultss">Results:</label>
<p id='resultss'></p>

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
