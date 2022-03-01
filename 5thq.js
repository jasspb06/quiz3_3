var mysecondarr = [1, 2, 3, 4];
 mysecondarr.foreach(myfunction)

 function myfunction(item, index, arr){
     arr[index] = item * item;
 }