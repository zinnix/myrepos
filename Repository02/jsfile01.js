// This is my first java script file
function myfirsyfunction()  /* comment */
{
 
    document.getElementById("ACBParagraph").innerHTML = "New Content 11a111.";
    document.getElementById("ACBParagraph2").innerHTML = "New Content2.";
    //document.getElementById("ACBParagraph3").innerHTML = "<b>Date is:</b> " + Date();
//    windows.alert( Date ());
    //document.write("Date()");
    
    document.getElementById("demo").innerHTML = "Mouse over";
            
    var firstName = "John" 
    ,lastName = "Doe" 
    ,age = 35 ;
    var cars = ["Saab", "Volvo", "BMW"];
    var x = {firstName:"John", lastName:"Doe"}; 
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
    string01="String101" ;
    var num01=15;
    
    //alert(string01);
    //document.getElementById("parameter1").innerHTML = "Paragraph changed22";
      //      console.log(5 + 6);
}