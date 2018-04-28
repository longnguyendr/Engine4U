<h1>AAA</h1>
<h1>AAA</h1>
<?php echo $cars['carID']; ?><br>
<div class="container">
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
</div>
