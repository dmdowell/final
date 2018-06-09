var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var center = document.getElementById("center");



counter.style.backgroundColor = "coral";
counter.style.color = "white";

window.onscroll = function(){
  counter.style.color = "white";

  var fromTop=window.pageYOffset;

  counter.style.top = fromTop *1.01 +"px";
  counter.innerHTML = fromTop /25 + "min";

  truck.style.top = fromTop *1.01 +"px";

  if(fromTop > 9000){
      counter.style.backgroundColor= "red";
    }if(fromTop < 9000){
        counter.style.backgroundColor= "blue";
      }if(fromTop < 7000){
        counter.style.backgroundColor= "blue";
      }if(fromTop < 5000){
          counter.style.backgroundColor= "green";
        }if(fromTop < 3000){
            counter.style.backgroundColor= "yellow";
          }if(fromTop < 1000){
              counter.style.backgroundColor= "coral";
            }else if(fromTop < 582){
      counter.style.backgroundColor= "salmon";
    }


};




/*  Current time
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML =
      h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
    }
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
    */
