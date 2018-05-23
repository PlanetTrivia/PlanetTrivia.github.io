var arrayQ = ["How many water resevoirs are there in Vancouver?", "How much water does a human use daily?","When brushing your teeth you should?","What percent of freshwater is trapped in glaciers?","What percent of Earth’s water is frozen and unusable?","How much water is needed to grow a day’s food for a family of four?","How much does water expand when it’s frozen?","How many liters of water does it take to fill an average bathtub?","How much water do outdoor pools lose each month due evaporation?","How much water is on the Earth?","How long should you water your lawn for?","You should use the dishwasher when...","What country has the most fresh water in the world?","What Country uses the most water in the world?","Which country has the least fresh water in the world?","What is a drought?","What country has the cleanest tap water?","What country sells the most bottled water?","What country produces the most bottled water?","How much water is used when flushing a toilet?","How much water does a 5 minute shower use?","What percent of food never gets eaten worldwide?","What food gets wasted the most?","How much food does an average person waste a day?","What percent of food waste in Vancouver is avoidable?","How many tonnes of avoidable food waste does Vancouver produce a year?","How much does wasted food cost a Vancouver household per year?"];
  var arrayA = [["2","3","5"],["1000 Litres","570 Litres","330 Litres"],["Turn on the tap","Turn off the tap", "Flush the toilet"],["69%","40%","95%"],["2%", "75%","20%"],["260,000 L","550 L","55,000 L"],["9%","18%","65%"],["200 L","100 L","265 L"],["1000 L" ,"3785 L","50 L"],["2.5 Billion L","500,000 L","1.2 Trillion L"],["1 hr","5 hrs","15 hrs"],["It is full","One thing is dirty","You feel like it"],["Brazil","Canada","United States"],["United States","China","Russia"],["Kuwait/Bahamas","Germany","South Africa"],["A drink","A long period of low rainfall","A tasty doughnut"],["Canada","France","Switzerland"],["China","United States","Russia"],["Canada","China","United States"],["8 L","12 L","2 L"],["50 L","200 L","500 L"],["5%","30%","20%"],["Fruits and Veggies","Milk","Pizza"],["400 grams", "200 grams","650 grams"],["10%","25%","50%"],["100,000","10,000","50,000"],["$500","$700","$900"]];
  var arrayCorrect = ["3","330 Litres","Turn off the tap","69%","2%","260,000 L","9%","265 L","3785 L","1.2 Trillion L","1 hr","It is full","Brazil","China","Kuwait/Bahamas","A long period of low rainfall","Switzerland","China","United States","8 L","200 L","30%","Fruits and Veggies","400 grams","50%","100,000","$700"];
  var qu;
  var count = 0;
  var numQ2 = 0;
  var b1;
  var b2;
  var b3;
  var selectedAnswer;
  var counter = 10;
  var theClock;
  var num = document.getElementById("p").textContent;
  var numCon = Number(num);
  var newNum = numCon;
  var back = "<p id='t'>10</p>" +
      "<p id='score'>Score:</p>" +
      "<p id='p'>0</p>" +
      "<p id='q'></p>" + "<div id='buttons'>" + 
      "<button id='b1' onclick='clicked1()'></button>" + "<br/>" + 
      "<button id='b2' onclick='clicked2()'></button>" + "<br/>" + 
      "<button id='b3' onclick='clicked3()'></button>" + "</div>";

  document.getElementById("h1").addEventListener("click", playSong);

  function playSong(){
    var audio = new Audio ('../assets/song.mp3');
    audio.play();
  }

  playSong();

  function start1() {
    qu = arrayQ[count];
    b1 = arrayA[count][0];
    b2 = arrayA[count][1];
    b3 = arrayA[count][2];
    count += 1;
    document.getElementById("q").innerHTML = qu;
    document.getElementById("b1").innerHTML = b1;
    document.getElementById("b2").innerHTML = b2;
    document.getElementById("b3").innerHTML = b3;
  }  

  function correct2(){
    if(count === numQ2){
      newNum = newNum + 1;
      leaderboard(newNum);
    } else {
      var s = document.getElementById("background");
      s.style.background = "rgba(255,255,255,0.75)";
      s.innerHTML = back;
      newNum = newNum + 1;
      document.getElementById("p").innerHTML = newNum;
      start1();
      timer();
      counter = 10;
    }
  }

  function correct(){
    var d = document.getElementById("background");
    var corr = "<p id='corr'>Correct &#10003;</p><p id='correctAns'>Answer: " + arrayCorrect[count-1] + "</p>";
    d.style.backgroundColor = "lightgreen";
    d.innerHTML = corr;
    setTimeout(correct2,3000);
  }

  function incorrect2(){
    if(count === numQ2){
      leaderboard(newNum);
    } else {
      var d = document.getElementById("background");
      d.style.background = "rgba(255,255,255,0.75)";
      d.innerHTML = back;
      newNum = newNum;
      document.getElementById("p").innerHTML = newNum;
      start1();
      timer();
      counter = 10;
    }
  }

  function incorrect(){
    var incorr = "<p id='incorr'>Incorrect &#10006;</p><p id='correctAns'>Answer: " + arrayCorrect[count-1] + "</p>";
    var d = document.getElementById("background");
    d.style.backgroundColor = "#ff3333";
    d.innerHTML = incorr;
    setTimeout(incorrect2,3000);
  }

  function timesUp2(){
    if(count === numQ2){
      leaderboard(newNum);
    } else {
      var s = document.getElementById("background");
      s.style.background = "rgba(255,255,255,0.75)";
      s.innerHTML = back;
      newNum = newNum;
      document.getElementById("p").innerHTML = newNum;
      start1();
      timer();
      counter = 10;
    }
  }

  function timesUp(){
    var d = document.getElementById("background");
    var timeUp = "<p id='timesUp'>Times Up 	&#128337;</p><p id='correctAns'>Answer: " + arrayCorrect[count-1] + "</p>";
    d.style.backgroundColor = "#ff3333";
    d.innerHTML = timeUp;
    setTimeout(timesUp2,3000);
  }

  function timer(){
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
      if (counter === 0) {
        clearInterval(theClock);
        timesUp();
      }
      if (counter > 0) {
        document.getElementById("t").style.color = "black";
        counter--;
        document.getElementById("t").innerHTML = counter;
        if(counter < 6) {
          document.getElementById("t").style.color = "red";
        }
      }
    }
  }

  function clicked1(){
    if(counter > 0){
      var ms = counter * 1000;
      setTimeout(clicked1,ms);
    } else {
      selectedAnswer = document.getElementById("b1").textContent;
      if(arrayCorrect[count-1] == selectedAnswer) {
        clearInterval(theClock);
        correct();
      } else {
        clearInterval(theClock);
        incorrect();
      }
    }
  }

  function clicked2(){
    if(counter > 0){
      var ms = counter * 1000;
      setTimeout(clicked2,ms);
    } else {
      selectedAnswer = document.getElementById("b2").textContent;
      if(arrayCorrect[count-1] == selectedAnswer) {
        clearInterval(theClock);
        correct();
      } else {
        clearInterval(theClock);
        incorrect();
      }
    }
  }

  function clicked3(){
    if(counter > 0){
      var ms = counter * 1000;
      setTimeout(clicked3,ms);
    } else {
      selectedAnswer = document.getElementById("b3").textContent;
      if(arrayCorrect[count-1] == selectedAnswer) {
        clearInterval(theClock);
        correct();
      } else {
        clearInterval(theClock);
        incorrect();
      }
    }
  }

  var firebaseRef = firebase.database().ref();
  var ID = 0;
  var rand;
  var randQ;
  var v;
  var x = document.getElementById("myDIV");
  var y = document.getElementById("myDIV2");

  function randNum(){

    document.getElementById("fullbody").style.animation = "none"; document.getElementById("fullbody").style.backgroundSize = "90%";

    randQ = Math.floor(Math.random() * 18);
    rand = Math.floor(Math.random() * 1000000);
    randStr = rand.toString();
    firebaseRef.child(randStr).set({Number : {randQ}});
    newPage();
    document.getElementById("sessionh1").innerHTML += rand;
  }

  function startGame(){
    v = rand + 1;
    var readyString = v.toString();
    firebaseRef.child(readyString).set({"admin" : {"teacher" : "started game"}});
    document.getElementById('start').innerHTML = "Game has started";
    document.getElementById('start').style.backgroundColor = "lightgreen";
    document.getElementById('start').style.color = "black";
    document.getElementById('start').style.textShadow = "0px 0px 8px white";
  }

  function newPage(){
    var x = document.getElementById("content").style.display = "none";
    var y = document.getElementById("createSession").style.display = "block";
  }

  var counterQ = 0;
  x.style.display = "block";
  function myFunction() {
    if(counterQ === 0){
      for(var i = randQ; i < randQ + 10; i++){
        x.innerHTML += "<br><b><span>" + arrayQ[i] + "</span></b><br>" + "Answer: " + arrayCorrect[i] + "<br>";
      }
    }
    counterQ++;
    if(counterQ % 2 === 0){
      x.style.display = "none";
    }else{
      x.style.display = "block";
    }
  }

  var username;
  var code;

  function joinGame(){
    username = document.getElementById("username").value;
    code = document.getElementById("gameCode").value;
    var score = 0;
    var ready = Number(code) + 1;
    var ready2 = ready.toString();

    firebaseRef.once('value', function(snapshot) {

      if (snapshot.hasChild(code)) {
        console.log('exists, adding to session...');
        firebaseRef.child(code + "/members").update({[username] : {score}});
        document.getElementById("body").style.display = "block";
        document.getElementById("body").style.backgroundColor = "transparent";
        document.getElementById("background").style.display = "none";
        document.getElementById("wholebody").style.display = "none";
        document.getElementById("fullbody").style.animation = "none";
        document.getElementById("fullbody").style.backgroundSize = "100%";

        looper();

        function looper(){

          firebaseRef.once('value', function(snapshot) {

            if(snapshot.hasChild(ready2)){
              document.getElementById("background").style.display = "block";
              document.getElementById("fullbody").style.animation = "none";
              document.getElementById("fullbody").style.marginTop = "-7%";
              document.getElementById("fullbody").style.marginLeft = "5%";
              document.getElementById("wait").style.display = "none";
              firebase.database().ref(code).child('/Number').once('value', function(snapshot) {
                snapshot.forEach(function(child) {
                  numQ = child.val();
                  count = numQ;

                  numQ2 = count + 10;

                  start1();
                  timer();
                });
              }); 

            } else {
              setTimeout(looper,0);
            }
          });
        }

      } else {
        document.getElementById("gameCode").value = "";
        document.getElementById("gameCode").placeholder = "Invalid Game Code.";
      }
    });
  }

  function leaderboard(score){

    var gameCode = document.getElementById("gameCode").value;

    firebaseRef.child(gameCode + "/members").update({[username] : {score}});

    setTimeout(pause,5000);

    function pause(){
      firebase.database().ref(gameCode).child('/members').once('value', function(snapshot) {

        var array = [];

        var table = "<table id='table'><tr><th>Username</th><th>Score</th></tr>";
        snapshot.forEach(function(child) {
          var k = child.key;
          var v = child.val();
          var vS = v['score'];
          var o = {name: k ,val: vS}

          array.push(o);
        });

        array.sort(function(a, b){return a['val'] - b['val']});
        array.reverse();

        for(var i = 0; i < array.length; i++){
          table += "<tr><td>" + array[i]['name'] + "</td><td>" + array[i]['val'] + "</td></tr>";
        }

        table += "</table><br/><span style='margin-left: -3%'><button id='buttons1' onClick='window.location.href=window.location.href'>Play Again</button></span>";

        var s = document.getElementById("fullbody");
        s.innerHTML = table;

        s.style.backgroundImage = "url('../img/g.gif')";
      });
    }
  }