document.write("<H1>THIS IS A WEBSITE </H1>");

/*var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});*/

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click",function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value="";
});


function sayhi(name,age){
    document.write("<h1>hey my name is " +name + "</h1>");
    document.write("and iam  " +age+ " years old ");
}

  sayhi("ROSHAN",22);
  alert("HELLO DHANSEKARAN")


var num1 = window.prompt("enter the value num1");
var num2 = window.prompt("enter the num2 value");
    num1= parseFloat(num1);
    num2= parseFloat(num2);
     document.write( num1+num2);

     document.write("<br>");


     document.write(Math.round(Math.random()*100));




     function friends(name,age){
         document.write("his name is "+name);
         document.write("his age is "+age);
     };

     friends("roshan",99); 
 
    var information = document.getElementById("list");
    var input = document.getElementById("input");
    var button2 = document.getElementById("button2");

    button2.addEventListener("click",function(){
        var pudhumessage = document.createElement(li);
        pudhumessage.innerHTML=input.value;
        information.appendChild(pudhumessage);
        input.value="";
    });


    var isMale = true;
    var isTall = true;
if(isMale && isTall){
    document.write("you are male");
}
else if(isMale && !isTall){
    document.write('you are a short male');
} 
else if(!isMale && isTall){
    document.write("is not a male but you are tall");
} else {
    document.write('is not male');
}



var isMale = false;
var isTall = false;
if(isMale || isTall){
    document.write("you are male");
}else {
    document.write('is not male');
}