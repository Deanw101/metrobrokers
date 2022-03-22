
(function ($) {
    "use strict";

    $('a.page-scroll').bind('click', function(event) {
       var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
       }, 400, 'easeInOutExpo');
       event.preventDefault();
   });

    // Jquery Dependency

$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() {
    formatCurrency($(this), "blur");
  }
});


function formatNumber(n) {
// format number 1000000 to 1,234,567
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
// appends $ to value, validates decimal side
// and puts cursor back in right position.

// get input value
var input_val = input.val();

// don't validate empty input
if (input_val === "") { return; }

// original length
var original_len = input_val.length;

// initial caret position
var caret_pos = input.prop("selectionStart");

// check for decimal
if (input_val.indexOf(".") >= 0) {

  // get position of first decimal
  // this prevents multiple decimals from
  // being entered
  var decimal_pos = input_val.indexOf(".");

  // split number by decimal point
  var left_side = input_val.substring(0, decimal_pos);
  var right_side = input_val.substring(decimal_pos);

  // add commas to left side of number
  left_side = formatNumber(left_side);

  // validate right side
  right_side = formatNumber(right_side);

  // On blur make sure 2 numbers after decimal
  // if (blur === "blur") {
  //   right_side += "00";
  // }

  right_side = right_side.substring(0, 2);


  input_val = "$" + left_side + "." + right_side;

} else {

  input_val = formatNumber(input_val);
  input_val = "$" + input_val;

  //
  // if (blur === "blur") {
  //   input_val += ".00";
  // }
}


input.val(input_val);


var updated_len = input_val.length;
caret_pos = updated_len - original_len + caret_pos;
input[0].setSelectionRange(caret_pos, caret_pos);
}

function getFormDetails() {

  var $inputs = $('#calcNP :input');

  var values = {};
  $inputs.each(function() {
      values[this.name] = $(this).val().replace(/[^\d.-]/g, '');

  });

  let $selectFields = $('select');
  console.log($selectFields);

  for (var i = 0; i < $selectFields.length; i++) {
    let field = $selectFields[i]
    values[field.id] = field.value;
  }


  console.log(values);
  return values;
}

$('#submitFormTwo').on('click', (e) => {
  event.preventDefault();
  event.stopPropagation();
  const values = getFormDetails();
console.log(values);
    if (values.office == 2700){
      const otherNetProfit = values.comVal * values.ffee * values.split - values.officeFees - values.miscFees;
      const franFee = values.comVal - values.comVal * values.ffee;
      const netProfit = values.comVal*0.9 - values.office - values.miscFees - 1500;
      const otherNetProfitb = otherNetProfit.toFixed(0);
      const netProfitb = netProfit.toFixed(0);
      const otherNetProfitc = otherNetProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const netProfitc = netProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(otherNetProfitc);
      console.log(netProfitc);

      $("#otherP").text('$' + otherNetProfitc);
      $("#metroP").text('$' + netProfitc);
      $("#franFeeT").text('Franchise Fee: ' + franFee);

      const difference = netProfit - otherNetProfit;
      const differenceb = difference.toFixed(0);
      const differencec = differenceb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(differencec);
      $("#calcDiff").text('$' + differencec);
      $(".green").css("color", "#28a745");
    } else {
      const otherNetProfit = values.comVal * values.ffee * values.split - values.officeFees - values.miscFees;
      const franFee = values.comVal - values.comVal * values.ffee;
      const netProfit = values.comVal - values.office - values.miscFees - 1500;
      const otherNetProfitb = otherNetProfit.toFixed(0);
      const netProfitb = netProfit.toFixed(0);
      const otherNetProfitc = otherNetProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const netProfitc = netProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(otherNetProfitc);
      console.log(netProfitc);

      $("#otherP").text('$' + otherNetProfitc);
      $("#metroP").text('$' + netProfitc);
      $("#franFeeT").text('Franchise Fee: $' + franFee);


      const difference = netProfit - otherNetProfit;
      const differenceb = difference.toFixed(0);
      const differencec = differenceb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(differencec);
      $("#calcDiff").text('$' + differencec);
      $("#calcDiff").css("color", "#28a745");
      $("#green").css("color", "#28a745");
      $("#otherP").css("color", "#ff4040");
      $("#metroP").css("color", "#33ab4f");
    }

});

$('#submitForm').on('click', (e) => {
  event.preventDefault();
  event.stopPropagation();
  const values = getFormDetails();
console.log(values);
    if (values.office == 2700){
      const otherNetProfit = values.comVal * values.ffee * values.split - values.officeFees - values.miscFees;
      const franFee = values.comVal - values.comVal * values.ffee;
      const netProfit = values.comVal*0.9 - values.office - values.miscFees - 1500;
      const otherNetProfitb = otherNetProfit.toFixed(0);
      const netProfitb = netProfit.toFixed(0);
      const otherNetProfitc = otherNetProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const netProfitc = netProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(otherNetProfitc);
      console.log(netProfitc);

      $("#otherP").text('$' + otherNetProfitc);
      $("#metroP").text('$' + netProfitc);
      $("#franFeeT").text('Franchise Fee: ' + franFee);

      const difference = netProfit - otherNetProfit;
      const differenceb = difference.toFixed(0);
      const differencec = differenceb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(differencec);
      $("#calcDiff").text('$' + differencec);
      $(".green").css("color", "#28a745");
    } else {
      const otherNetProfit = values.comVal * values.ffee * values.split - values.officeFees - values.miscFees;
      const franFee = values.comVal - values.comVal * values.ffee;
      const netProfit = values.comVal - values.office - values.miscFees - 1500;
      const otherNetProfitb = otherNetProfit.toFixed(0);
      const netProfitb = netProfit.toFixed(0);
      const otherNetProfitc = otherNetProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const netProfitc = netProfitb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(otherNetProfitc);
      console.log(netProfitc);

      $("#otherP").text('$' + otherNetProfitc);
      $("#metroP").text('$' + netProfitc);
      $("#franFeeT").text('Franchise Fee: $' + franFee);


      const difference = netProfit - otherNetProfit;
      const differenceb = difference.toFixed(0);
      const differencec = differenceb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(differencec);
      $("#calcDiff").text('$' + differencec);
      $("#calcDiff").css("color", "#28a745");
      $("#green").css("color", "#28a745");
      $("#otherP").css("color", "#ff4040");
      $("#metroP").css("color", "#33ab4f");
    }

});

  const $eventLog = document.querySelector('.event-log-a');
  const $eventLogB = document.querySelector('.event-log-b');
    const $eventLogC = document.querySelector('.event-log-c');

$('#gross_sales').on('keyup', function() {
    $eventLog.innerHTML = $(this).val();
});

$('#commission').on('keyup', function() {
    $eventLogB.innerHTML = $(this).val();
});

$('#misc_fees').on('keyup', function() {
    $eventLogC.innerHTML = $(this).val();
});

$('#emailInfo').on('click', (e) => {
  event.preventDefault();
  event.stopPropagation();
  // Post req
  $.post("/api/schedulerequest", values, function(data,status){
    console.log(data, status);
    location.reload();
  });
});



})(jQuery);
