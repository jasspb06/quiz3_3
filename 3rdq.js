 function higherordergreet(name="stranger"){
     alert("Hellp " + " , " + name + "!");
 }
 function processuserinput(callback){
     var name =prompt('enter your name.');
     callback(name);
 }
 processuserinput(higherordergreet);
