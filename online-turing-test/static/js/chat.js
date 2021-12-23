//connect to domain
var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');


//turn your message into a chat message on screen
$('#sendbutton').on('click', function(){
  console.log('Button Clicked');
  console.log($('#myMessage').val());


  //create outer div
  var div_outer = document.createElement("div");
  div_outer.className = "from-me";

  //create inner element
  var msgBody = document.createElement("p");
  msgBody.innerHTML = $('#myMessage').val();

  //ending clear div
  var div_end = document.createElement("div");
  div_end.className = "clear";

  //append text to outer div
  div_outer.appendChild(msgBody);
  

  //get the internal message holder
  var element = document.getElementById("message_holder");
  //append the div outer + paragraph
  element.appendChild(div_outer);
  //apend the ending clear
  element.appendChild(div_end);

  //scroll to top
  element.scrollTop = element.scrollHeight;

  //Emit a message to the server so that Python can pick up the 'python' message
  socket.emit('python', {'the_text': $('#myMessage').val()}, namespace='/test');

  document.getElementById('myMessage').value = ''
});



//click sendbutton on 'enter' press
var input = document.getElementById("myMessage");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("sendbutton").click();
    }
});


//update the therapists response when it comes
socket.on('to_socket_string', function(msg) {
  //create outer div
  var div_outer = document.createElement("div");
  div_outer.className = "from-them";

  //insert inner element
  var msgBody = document.createElement("p");
  msgBody.innerHTML = msg.string;

  //ending clear div
  var div_end = document.createElement("div");
  div_end.className = "clear";

  //append both
  div_outer.appendChild(msgBody);
  div_outer.appendChild(div_end);

  //append outer div and clear end div to message holder
  var element = document.getElementById("message_holder");
  element.appendChild(div_outer);
  element.appendChild(div_end); 
  element.scrollTop = element.scrollHeight;
});