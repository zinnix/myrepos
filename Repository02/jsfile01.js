// This is my first java script file
function myfirsyfunction() { /* comment */
    
    
    title=document.createTextNode("This is written by Jscript");
    
 
    document.getElementById("ACBParagraph").innerHTML = "New Content 11a111.";
    document.getElementById("ACBParagraph2").innerHTML = "New Content2.";
    //document.getElementById("ACBParagraph3").innerHTML = "<b>Date is:</b> " + Date();
//    windows.alert( Date ());
    //document.write("Date()");
    
    document.getElementById("demo").innerHTML = "Mouse over";
            
    var firstName = "John"     ,lastName = "Doe"     ,age = 35 ;
    var cars = ["Saab", "Volvo", "BMW"];
    var x = {firstName:"John", lastName:"Doe"}; 
    var myarray=new Array(7);  // 0-6
    var myaaray02=[];
    var vehicles = new Array("car", "truck", "van");
    // 
    // person["lastName"];    person.lastName;
        var person = {
            firstName:"John",
            lastName:"Doe",
            fullName : function() {
                return this.firstName + " " + this.lastName;
            },
            age:50,
            eyeColor:"blue"
        };

    document.getElementById("demo").innerHTML = firstName + " " + lastName + " is " + age;

    //document.write("Hi");
    //var   
    var string01="String101" ;
    var num01=15;
    
    //alert(string01);
    //document.getElementById("parameter1").innerHTML = "Paragraph changed22";
      //      console.log(5 + 6);
}

function createlist() {
    var str;
    str="<ul><li>Tiberia</li><li>Tel-Aviv</li><li>New-York</li></ul>";
    spare=document.getElementById("marathondiv");
    spare.innerHTML=str;
}
