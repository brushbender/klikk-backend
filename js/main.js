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


/* SIDEBAR FOLLOW PAGE */



/* Function for changing background color on checkboxes */
$(function (){
  var checkboxs = $('input[type=checkbox].primary-checkbox');
  
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


/* Activate switch-toggle */
$("[name='checkbox1']").bootstrapSwitch({
	on: 'Easy Setup',
	off: 'Advanced Setup',
    same: true,
    size: 'xs',
});

$("[name='checkbox2']").bootstrapSwitch({
	on: '32 bit OS',
	off: '64 bit OS',
    same: true,
    size: 'xs',
});



/* PLUS MINUS BUTTON */
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    
    
/* Activate Slider Component in Bootstrap */
// CPU-SLIDER
$("#cpu").slider();
$("#cpu").on("slide", function(slideEvt) {
	$("#cpuSliderVal").text(slideEvt.value); });

// RAM-SLIDER
$("#ram").slider();
$("#ram").on("slide", function(slideEvt) {
	$("#ramSliderVal").text(slideEvt.value);
});

// RAM-SLIDER
$("#ssd").slider();
$("#ssd").on("slide", function(slideEvt) {
	$("#ssdSliderVal").text(slideEvt.value);
});

/* Calculate value of sliders and update price */
$(document).change(function () {
		
		var price_cpu = 0.1;
		var price_ram = 0.1;
		var price_ssd = 0.1;
		var cpu = document.getElementById("cpu").value;
		var ram = document.getElementById("ram").value;
		var ssd = document.getElementById("ssd").value;
		var total = (parseFloat(cpu) * parseFloat(price_cpu)) + (parseFloat(ram) * parseFloat(price_ram)) + (parseFloat(ssd) * parseFloat(price_ssd));
		var amount = total.toFixed(2);

        	$("#price-number").text('$' + amount).append('<span class="font-weight-normal text-dark"><small style="font-size:40%;"> /mo</small></span>');
});

/* ACTIVATE TAGS */
$('.chips-placeholder').material_chip({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
});


/* SCRIPT SECTION FORM */
$("#script-btn").click(function() {
    $("#script-form").toggle().animate();
    $("#script-form").toggleClass('d-none');
});





