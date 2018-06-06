var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var center = document.getElementById("center");



counter.style.backgroundColor = "coral";
counter.style.color = "white";

window.onscroll = function(){
  counter.style.color = "black";

  var fromTop=window.pageYOffset;

  counter.style.top = fromTop *1.01 +"px";
  //counter.innerHTML = fromTop + "px";

  truck.style.top = fromTop *1.01 +"px";

  if(fromTop > 582){
      counter.style.backgroundColor= "salmon";
    }else if(fromTop < 582){
      counter.style.backgroundColor= "coral";
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
