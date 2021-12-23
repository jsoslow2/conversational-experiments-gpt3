//connect to domain
var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');


//turn your message into a chat message on screen
$('#sendbutton-1').on('click', function(){
  console.log('Button Clicked');
  console.log($('#myMessage-1').val());


  //create outer div
  var div_outer = document.createElement("div");
  div_outer.className = "from-me";

  //create inner element
  var msgBody = document.createElement("p");
  msgBody.innerHTML = $('#myMessage-1').val();

  //ending clear div
  var div_end = document.createElement("div");
  div_end.className = "clear";

  //append text to outer div
  div_outer.appendChild(msgBody);
  

  //get the internal message holder
  var element = document.getElementById("message_holder-1");
  //append the div outer + paragraph
  element.appendChild(div_outer);
  //apend the ending clear
  element.appendChild(div_end);

  //scroll to top
  element.scrollTop = element.scrollHeight;

  //Emit a message to the server so that Python can pick up the 'python' message
  socket.emit('python', {
      'the_text': $('#myMessage-1').val(),
      'number': '1'
    }, namespace='/test');

  document.getElementById('myMessage-1').value = ''
});


//turn your message into a chat message on screen
$('#sendbutton-2').on('click', function(){
    console.log('Button Clicked');
    console.log($('#myMessage-2').val());
  
  
    //create outer div
    var div_outer = document.createElement("div");
    div_outer.className = "from-me";
  
    //create inner element
    var msgBody = document.createElement("p");
    msgBody.innerHTML = $('#myMessage-2').val();
  
    //ending clear div
    var div_end = document.createElement("div");
    div_end.className = "clear";
  
    //append text to outer div
    div_outer.appendChild(msgBody);
    
  
    //get the internal message holder
    var element = document.getElementById("message_holder-2");
    //append the div outer + paragraph
    element.appendChild(div_outer);
    //apend the ending clear
    element.appendChild(div_end);
  
    //scroll to top
    element.scrollTop = element.scrollHeight;
  
    //Emit a message to the server so that Python can pick up the 'python' message
    socket.emit('python', {
        'the_text': $('#myMessage-2').val(),
        'number': '2'
    }, namespace='/test');
  
    document.getElementById('myMessage-2').value = ''
  });



//turn your message into a chat message on screen
$('#sendbutton-3').on('click', function(){
  console.log('Button Clicked');
  console.log($('#myMessage-3').val());


  //create outer div
  var div_outer = document.createElement("div");
  div_outer.className = "from-me";

  //create inner element
  var msgBody = document.createElement("p");
  msgBody.innerHTML = $('#myMessage-3').val();

  //ending clear div
  var div_end = document.createElement("div");
  div_end.className = "clear";

  //append text to outer div
  div_outer.appendChild(msgBody);
  

  //get the internal message holder
  var element = document.getElementById("message_holder-3");
  //append the div outer + paragraph
  element.appendChild(div_outer);
  //apend the ending clear
  element.appendChild(div_end);

  //scroll to top
  element.scrollTop = element.scrollHeight;

  //Emit a message to the server so that Python can pick up the 'python' message
  socket.emit('python', {
      'the_text': $('#myMessage-3').val(),
      'number': '3'
    }, namespace='/test');

  document.getElementById('myMessage-3').value = ''
});


//turn your message into a chat message on screen
$('#sendbutton-4').on('click', function(){
    console.log('Button Clicked');
    console.log($('#myMessage-4').val());
  
  
    //create outer div
    var div_outer = document.createElement("div");
    div_outer.className = "from-me";
  
    //create inner element
    var msgBody = document.createElement("p");
    msgBody.innerHTML = $('#myMessage-4').val();
  
    //ending clear div
    var div_end = document.createElement("div");
    div_end.className = "clear";
  
    //append text to outer div
    div_outer.appendChild(msgBody);
    
  
    //get the internal message holder
    var element = document.getElementById("message_holder-4");
    //append the div outer + paragraph
    element.appendChild(div_outer);
    //apend the ending clear
    element.appendChild(div_end);
  
    //scroll to top
    element.scrollTop = element.scrollHeight;
  
    //Emit a message to the server so that Python can pick up the 'python' message
    socket.emit('python', {
        'the_text': $('#myMessage-4').val(),
        'number': '4'
    }, namespace='/test');
  
    document.getElementById('myMessage-4').value = ''
});



//click sendbutton on 'enter' press
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {

        if (document.getElementById("myMessage-1") == document.activeElement) {
            event.preventDefault();
            document.getElementById("sendbutton-1").click();


        } else if (document.getElementById("myMessage-2") == document.activeElement) {
            event.preventDefault();
            document.getElementById("sendbutton-2").click();


        } else if (document.getElementById("myMessage-3") == document.activeElement) {
            event.preventDefault();
            document.getElementById("sendbutton-3").click();


        } else if (document.getElementById("myMessage-4") == document.activeElement) {
            event.preventDefault();
            document.getElementById("sendbutton-4").click();


        }
    }
});


//update the therapists response when it comes
socket.on('to_socket_string', function(msg) {
    number = msg.number;
    console.log(number);
    
    message_holder_id = "message_holder-" + number;

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
  var element = document.getElementById(message_holder_id);
  element.appendChild(div_outer);
  element.appendChild(div_end); 
  element.scrollTop = element.scrollHeight;
});