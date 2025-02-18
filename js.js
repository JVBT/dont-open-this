i = 0;
/*while(true) {
  i++
 document.getElementById("hello").innerHTML += i + ".pogi ako" + "<br>";
}
*/
setInterval(() => {
  i++;
  document.getElementById("hello").innerHTML += i + ".pogi ako" + "<br>";
}, 1000);