// Select color input
var color;
// Select size input
var height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  var height = $('#inputHeight').val();
  var width = $('#inputWeight').val();
  makeGrid(height, width);
   //console.log('Height value: ' + height +' Width value: ' + width); // Test Height and Width values

})

function makeGrid(x, y) {

  //Remove table rows after submit
   $('tr').remove();
    // console.log('Height: ' + x); //Test value

   //Create a grid of squares
    for(var i=1; i<=x; i++){
      
       $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j=1; j<=y; j++) {
          
          $('#table' + i).append('<td></td>');
        }
       
    }

    //Apply colors to the squares 
    $('td').click(function addColor(){
      colorPicker = $('#colorPicker').val();

      if($(this).attr('style')){
        $(this).removeAttr('style')
      }
      else{
        $(this).attr('style', 'background-color:' + colorPicker);
      }
    })

  }