console.log("hello world");
document.write("roshan");

var person = {
      name:"roshan",
      age:24,
      isMale:true,
      occupation:"waste",
      printName: function(){
          document.write("<h1>"+ this.occupation +"</h1>");
      }
  };
  person.printName();


var collage = {
    name:"SRM",
    year:25,
    remarks:"avrage",
    NameOfCollage :function(){
        document.write("<h1>"+this.name+"</h1>");
    }
    
};
collage.NameOfCollage();


var IsMale= true;
var IsTall= true;

if(IsMale && IsTall) {
    document.write("is tall");
} else if(!IsMale || IsTall) {
    document.write("is not a male");
}
else {
    document.write("you are sisgender");
}



var mymovie={
    title:"social network",
    releasedate:2010,
    duration:2.0,
    actors:[
        {
            name:"roshan",
            birthaday: new Date("december 14, 1998"),
            hometown:"chennai",
        },
        {
            name:"dhana",
            birthaday: new Date("september 9, 1972"),
            hometown:"chennai", 
        },
    ]
        
        
    };
    


document.write(mymovie.actors[0].name);


//whileloop

var i =1;

while(i<=10){
    document.write(i + "<br/>");
    i++

}


var i=11;
do{
    document.write(i+"<br/>");
    i++
}while(i<=10);


//password checker

/*var password ="roshu321";
var response;
var entryCount = 0;
var entryLimit=3;
var error = false;
while(response != password && !error){
    if(entryCount<entryLimit){
    response = window.prompt("enter password");
    entryCount++;

}else{
    error =true;
}
}
if(error){
    alert('too many entries');
}else{
    alert("you got it!");
}
*/


/*var password= "dhana09";
var response;
var entrycount= 0;
var entrylimit= 3;
var error=false;

while(password != response && !error){
    if (entrycount<entrylimit){ 
        response=window.prompt("enter the password");
        entrycount++ ;

        
    }else{
        error= true;
    }
}

if(error){
    alert("too many entries");

}
else{
    alert ("you got it");
}

//for loop

var i=0;
while(i<10){
    document.write( i + "<br/>")
    i++
}
 var friends = ["rajeev" ,"siddhu", "roshan"];
 document.write(friends[0] + "<br/>");
for(var i=0; i< friends.length; i++){
document.write( friends[i] + "<br/>")
}

//Building a quiz

var questions = [
    {
        prompt:"What is your name \n (a) roshan \n(b) Rajeev",
        answer:"a"
    },
    {
        prompt:"What is your age \n (a) 21 \n(b) 22",
        answer:"b"
    },
    {
        prompt:"What is your intrest \n (a) studies \n(b) sports",
        answer:"b"
    },

]
var score =0;

for(var i=0; i<questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("correct");


    }else{
        alert("wrong");
    }
}

alert("you got " + score + "/" + questions.length) */

//2D array and nested loop

//nested loop is loop inside a loop

var numberGrid =[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [0]
        
];
/*document.write(numberGrid[1][2]);

for(var i=0; i<4; i++){
    for(var j=0; j<3; j++){
document.write("i=" +i+ ", j= " + j + "<br/>" );
    } 
}

document.write(numberGrid[1][2]);*/

for(var i=0; i<numberGrid.length; i++){
    for(var j=0; j<numberGrid[i].length; j++){
        document.write(numberGrid[i][j]);

    } 
    document.write("<br/>");
}
        

var friends = ["roshan","siddhu","guru"]
friends.forEach(function(element){
        document.write(friends + "<br>")
});

//timing

function sayHi(){
    alert("hi");
}    

function youaregay() {
    alert("YOU ARE GAY");
    
}

