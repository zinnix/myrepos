/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function mysecondfunction()  /* comment */
{

    var index,text="";
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    for	(index = 0; index < fruits.length; index++) {
        text += fruits[index]+" ";        
    }
    document.write("<h1>Hello World!</h1><p>Have a nice day!</p>--"+text+"--");
    document.write("<br>Bye Bye!!");
    document.getElementById("Showtime").innerHTML = "<b>Date is:</b> " + Date();
  
    var str = "Please locate where 'locate' occurs!";
    var pos = str.indexOf("locate");

    document.getElementById("demo3").innerHTML ="<b><font color=blue>" +pos+"</b></font>";
    
          

}