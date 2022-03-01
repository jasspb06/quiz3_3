let text ="";
 var myarr=["one","two","three","four"];
 myarr.foreach(myfunction);
 
 function myfunction(item, index)  {
     text += index + ":" + item + "<br>";
 }
