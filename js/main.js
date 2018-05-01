/* Function for enabling tooltip. Requires popper.js */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

/* ----------------------- BUTTONS ACTIONS ------------------------ */
/* Trigger Demo Button and goto url */
$("#filter-tools").click(function() {
    $("#filter-tool-content").toggle().animate();
    $("#filter-tool-content").toggleClass('d-none');
});


/* Function for changing background color on checkboxes */
$(function (){
  var checkboxs = $('input[type=checkbox]');
  
  checkboxs.each(function(){
    $(this).wrap('<div class="customCheckbox"></div>');
    $(this).before('<span style="color:white">&#10004;</span>');
  });
  
  checkboxs.change(function(){
    if($(this).is(':checked')){
     $(this).parent().addClass('customCheckboxChecked');
    } else {
     $(this).parent().removeClass('customCheckboxChecked');
    }
  });
});