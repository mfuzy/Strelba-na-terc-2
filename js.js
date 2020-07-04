$(document).ready(function() {
  $(document).disableSelection();

  $(document).on("dragstart", "img", function() {
    return false;
  });

  var zasah = document.getElementById("zasahy");
  var celkom = document.getElementById("celkom");
  var score = document.getElementById("score");

  var mier = document.getElementById("mieric");
  var terc = document.getElementById("terc");

  var shot = document.getElementById("shot1");
  var shot2 = document.getElementById("shot2");
  var shot3 = document.getElementById("shot3");

  var celk = 0;
  var zas = 0;
  var to;
  var le;
  var diera;
  var bounding;

  setInterval(function() {
    to = Math.random() * (window.innerHeight - 80) + 5;
    le = Math.random() * (window.innerWidth - 80) + 5;

    terc.style.top = to + "px";
    terc.style.left = le + "px";
  }, 1000);

  score.onclick = function(e) {
    e.stopPropagation();
  };

  //strela mimo terca:
  document.body.onclick = function(e) {
    shot3.play();

    diera = document.createElement("div");
    diera.className = "diera";
    diera.style.position = "absolute";
    diera.style.top = e.pageY - 2 + "px";
    diera.style.left = e.pageX - 2 + "px";
    document.body.appendChild(diera);

    celk += 1;
    celkom.value = celk;
  };

  //strela do terca:
  terc.onclick = function(e) {
    e.stopPropagation();

    bounding = this.getBoundingClientRect();

    if (
      e.pageY >= bounding.top + 34 &&
      e.pageY <= bounding.top + 35 + 8.4 &&
      e.pageX >= bounding.left + 34 &&
      e.pageX <= bounding.left + 35 + 8.4
    ) {
      //trefa
      shot2.play();
      zas += 1;
      zasah.value = zas;
    } else {
      //len terc
      shot.play();
    }

    diera = document.createElement("div");
    diera.className = "diera";
    diera.style.position = "absolute";
    terc.appendChild(diera);

    if (e.target.className === "diera") {
      diera.style.top = e.target.offsetTop + e.offsetY - 2.5 + "px";
      diera.style.left = e.target.offsetLeft + e.offsetX - 2.5 + "px";
    } else {
      diera.style.top = e.offsetY - 2.5 + "px";
      diera.style.left = e.offsetX - 2.5 + "px";
    }

    celk += 1;
    celkom.value = celk;
  };
});
