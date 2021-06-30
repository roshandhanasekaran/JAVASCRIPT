document.write('script .js');
//alert('the file is working');
document.write("<h1 style='color:brown;'>Java script is good</h1>");
document.write("<hr>");
document.write(".../|");
document.write("../.|");
document.write("./..|");
document.write("/___|");



//working with strings


var phrase = "to be or not to be";
var txt="are cool"
document.write( phrase.length); 
document.write(phrase.length);
document.write(phrase.charAt(1));
//phrase="   roshan";
document.write(phrase.toUpperCase());
document.write(phrase.indexOf());
document.write(phrase.toLowerCase());
document.write(phrase.substring(phrase.indexOf("n"),phrase.length));
document.write(phrase.endsWith("be"));
document.write(phrase.includes(txt));
document.write(phrase +" "+ txt)

 var fullname="roshan"
 var age =21

document.write("  "+"my name is "+fullname+"<br>")
document.write(" "+"my age is" +" "+ age+ " years old <br>")

//MATH
var number=6
document.write(8+2*5/12);
document.write("<br>")

document.write(number*12 + "<br>");

document.write(Math.pow(number,3));
document.write('<br>')
document.write(Math.sqrt(number,6));
document.write("<br>")
document.write(Math.round(Math.random()*100 ));
document.write("<br>")
//gives a random whole number




//Getting input from the user

/*var name = window.prompt("Full name");
var age = window.prompt('what is your age')
document.write("hey  "+name+"dhansekaran. do you like being "+age+" years old")*/

//calculator 
/* var num1= window.prompt("enter a number");
 var num2= window.prompt("enter the second value");
 num1= parseFloat(num1);
 num2=parseFloat(num2);
 alert("final value"+ num1+num2);
 //document.write(num1+num2);*/

 //array 

 /*var fruits= ["apple","orange","mango","peaches",23,true];
 fruits[0]="banana";
 fruits= fruits.split(",");
 document.write(fruits[0]);
 document.write(fruits.length);*/



 //functions

 function sayHI(name,age){
     
     document.write("<h1>hello " +name+ "</h1>");
     document.write("<p> your age is "+age+"</p>")

     //alert("hey")
    
 }
 sayHI("Arvind",23);
 sayHI("Rosahn",24);

 function addition(num1,num2){
    return num1+num2;

 }

    document.write( addition(2,5));


    function mult (num1,num2){
        return num1*num2;
    }
        var number = mult(3,5)
        document.write(number);


        function collage(name1,feedback){

            document.write("<h1>"+ name1+ "</H1>");
            document.write("<p>"+feedback+"</p>");

        }
    collage("SRM","Is a good collage");
    collage('VIT',"Is a good collage");


     var header=document.getElementById("header");
     header.innerHTML="ROSHAN WEBSITE";
     header.style.color="red";
     header.style.backgroundColor="black"

     var link=document.getElementById("link");
     href.link= (www.amazon.com);

     /*function handleClick(element){

     element.style="background-color:blue;"
     alert("done")
     
     } */

 
/*var image = document.getElementById("photo");
image.addEventListener("mouseover",function(){
    this.style="box-shadow: 2px 2px 2px blue";
    this.width = "200"
});

image.addEventListener('mouseout',function(){
    this.style="nil";
    this.width = "100"
});

/*var message=document.getElementById("message");
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");

button.addEventListener("click",function(){
    var newMessage = document.createElement("li"); //new varible is equal to a list value li
    newMessage.innerHTML = textbox.value;  // added the value inside the text box
    message.appendChild(newMessage); //append the message with the ul 
    textbox.value="";


}); */


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





 

