$('#datepicker').datepicker();
$('#datepicker2').datepicker();
$('#datepicker3').datepicker();
$('#datepicker4').datepicker();
$('#datepicker5').datepicker();
// for photo
$(document).ready(function () {

  // input plugin
  bsCustomFileInput.init();

  // get file and preview image
  $("#inputGroupFile").on('change', function () {
    var input = $(this)[0];
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#preview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  })

});


let isVisible=false;
function myFunction() {
var x = document.getElementById("myDIV");

if(isVisible){
x.classList.toggle("d-none")
isVisible=false;
}
else{
x.classList.remove("d-none")
isVisible=true;
}
}


let isPermanent=true;
let clkon=document.getElementById("click-fillup");
clkon.addEventListener("click",(e)=>{
 e.stopPropagation()

 let present=document.getElementById("pres-address").value ;
 let permanent=document.getElementById("per-address");

 let cityFill1=document.getElementById("city-field1").value;
 let cityFill2=document.getElementById("city-field2");

 let selectFill1=document.getElementById("select-box1").value;
 let selectFill2=document.getElementById("select-box2");

 let postFill1=document.getElementById("post-code1").value;
 let postFill2=document.getElementById("post-code2");

 let divisionFill1=document.getElementById("Division1").value;
 let divisionFill2=document.getElementById("Division2");

if(isPermanent){

 permanent.value=present;
 cityFill2.value=cityFill1;
 selectFill2.value=selectFill1;
 postFill2.value=postFill1
 divisionFill2.value=divisionFill1;
 isPermanent=false;
 
}
else{

 permanent.value=" ";
 cityFill2.value=" ";
 selectFill2.value="0";
 postFill2.value=" ";
 divisionFill2=" ";
 isPermanent=true;
}
console.log(isPermanent)
})
