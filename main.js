function reverse(){
  var str = document.getElementById("str_inp").value;
  var reversed = "";
  document.getElementById("my_output").innerHTML = 'Your Words: '+str;
  for (var i = 0; i < str.length; i++) {
    var character = str[i];
    reversed = character + reversed;
  }
  document.getElementById("output").innerHTML = "Reversed: "+reversed;
}