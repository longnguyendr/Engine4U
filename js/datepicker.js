$(function () {
$('#datetimepicker_checkin').datetimepicker({
            format: 'YYYY-MM-DD'
        });
$('#datetimepicker_checkout').datetimepicker({
    useCurrent: false ,
    format: 'YYYY-MM-DD'  //Important! See issue #1075
});
$("#datetimepicker_checkin").on("dp.change", function (e) {
    $('#datetimepicker_checkout').data("DateTimePicker").minDate(e.date);
});

});
