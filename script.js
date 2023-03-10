// update the follow button every clickhttps://ClickAQR.katieapp2023.repl.co
function changeFollow(id) {
  const follow = document.getElementById("follow" + id);
  const following = document.getElementById("following" + id);
  
  if (follow) {
    // follow.style.animation = "flipA 0.2s linear";
    follow.src="images/FollowingButton.png";
    follow.id="following" + id;
  } else {
    // following.style.animation = "flipB 0.2s linear";
    following.src="images/FollowButton.png";
    following.id="follow" + id;
  }
}



var defaultLikeSize = "60px";
var largeLikeSize = "65px";


function changeLike(id) {
  const emptylike = document.getElementById("emptylike" + id);
  const filledlike = document.getElementById("filledlike" + id);
  if (emptylike) {
    emptylike.src="images/filledlike.png";
    emptylike.id="filledlike" + id;
    emptylike.style.animation = "flipV 0.8s linear";
    
  } else {
    filledlike.src="images/emptylike.png";
    filledlike.id="emptylike" + id;
    filledlike.style.animation = "flipH 0.8s linear";
  }
}

function spinHappyEmoji(id) {
  const happyEmoji = document.getElementById("happyEmoji" + id);
  const happyEmojiFlipped = document.getElementById("happyEmojiFlipped" + id);
  if (happyEmoji) {
    happyEmoji.src = "images/happyBorder.png";
    happyEmoji.style.animation = "flipV 0.8s linear";
    happyEmoji.id="happyEmojiFlipped" + id;
   
    
    } else {
      happyEmojiFlipped.src = "images/happy.png";
      happyEmojiFlipped.style.animation = "flipH 0.8s linear";
      happyEmojiFlipped.id="happyEmoji" + id;
  
  }

}

function spinShockedEmoji(id) {
  const shockedEmoji = document.getElementById("shockedEmoji" + id);
  const shockedEmojiFlipped = document.getElementById("shockedEmojiFlipped" + id);
  if (shockedEmoji) {
    shockedEmoji.src = "images/shockedBorder.png";
    shockedEmoji.style.animation = "flipV 0.8s linear";
    shockedEmoji.id="shockedEmojiFlipped" + id;
   
    
  } else {
      shockedEmojiFlipped.src = "images/shocked.png";
      shockedEmojiFlipped.style.animation = "flipH 0.8s linear";
      shockedEmojiFlipped.id="shockedEmoji" + id;
  
  }

}

function spinLaughingEmoji(id) {
  const laughingEmoji = document.getElementById("laughingEmoji" + id);
  const laughingEmojiFlipped = document.getElementById("laughingEmojiFlipped" + id);
  if (laughingEmoji) {
    laughingEmoji.src = "images/laughingBorder.png";
    laughingEmoji.style.animation = "flipV 0.8s linear";
    laughingEmoji.id="laughingEmojiFlipped" + id;
   
    
  } else {
      laughingEmojiFlipped.src = "images/laughing.png";
      laughingEmojiFlipped.style.animation = "flipH 0.8s linear";
      laughingEmojiFlipped.id="laughingEmoji" + id;
  
  }

}


var defaultSize = "60px";
var largeSize = "100px";


function showQRCode(id) {
  var qr = document.getElementById("QR" + id);
  var large = (qr.style.width == largeSize);
  
  if (large) {
    qr.style.height = defaultSize;
    qr.style.width = defaultSize;
  } else {
    qr.style.width = largeSize;
    qr.style.height = largeSize;
  }
}

//colour scheme constants
const yellowPinkWhite = "linear-gradient(to right top, #879af2, #988ae9, #a978db, #b963c8, #c74bb1, #db3e9e, #ea3387, #f42f6f, #ff4959, #ff6641, #ff8328, #fda000)";
const whitePinkYellow = "linear-gradient(to right bottom, #879af2, #988ae9, #a978db, #b963c8, #c74bb1, #db3e9e, #ea3387, #f42f6f, #ff4959, #ff6641, #ff8328, #fda000)";

const blueTealGreen = "linear-gradient(to right bottom, #276174, #117484, #00878f, #009a95, #00ad96, #08ba96, #22c794, #3ad38f, #42de8f, #4be88d, #56f38b, #63fd88)";
const greenTealBlue = "linear-gradient(to right top, #276174, #117484, #00878f, #009a95, #00ad96, #08ba96, #22c794, #3ad38f, #42de8f, #4be88d, #56f38b, #63fd88)";

const blueMagentaPink = "linear-gradient(to right bottom, #363553, #42385e, #523a67, #633b6e, #763a73, #853b78, #953b7b, #a53b7d, #b63d82, #c64086, #d74289, #e8458b)";
const pinkMagentaBlue = "linear-gradient(to right top, #363553, #42385e, #523a67, #633b6e, #763a73, #853b78, #953b7b, #a53b7d, #b63d82, #c64086, #d74289, #e8458b)";

const lightBluePurple = "linear-gradient(to right top, #208ffb, #0082ff, #0075ff, #0566ff, #2e54ff, #434aff, #553efe, #662efc, #722afc, #7d24fc, #871efc, #9115fc)";
const purpleLightBlue = "linear-gradient(to right bottom, #208ffb, #0082ff, #0075ff, #0566ff, #2e54ff, #434aff, #553efe, #662efc, #722afc, #7d24fc, #871efc, #9115fc)";

function uploadPlusScheme(colour) {
  switch(colour) {
    case(0):
      document.getElementsByClassName("one")[0].style.background = lightBluePurple;
      document.getElementsByClassName("two")[0].style.background = purpleLightBlue;
      document.getElementsByClassName("three")[0].style.background = lightBluePurple;
      document.getElementsByClassName("four")[0].style.background = purpleLightBlue
      document.getElementsByClassName("five")[0].style.background = lightBluePurple;
      break;
    case(1):
      document.getElementsByClassName("one")[0].style.background = yellowPinkWhite;
      document.getElementsByClassName("two")[0].style.background = whitePinkYellow;
      document.getElementsByClassName("three")[0].style.background = yellowPinkWhite;
      document.getElementsByClassName("four")[0].style.background = whitePinkYellow;
      document.getElementsByClassName("five")[0].style.background = yellowPinkWhite;
      break;
    case(2):
      document.getElementsByClassName("one")[0].style.background = blueTealGreen;
      document.getElementsByClassName("two")[0].style.background = greenTealBlue;
      document.getElementsByClassName("three")[0].style.background = blueTealGreen;
      document.getElementsByClassName("four")[0].style.background = greenTealBlue;
      document.getElementsByClassName("five")[0].style.background = blueTealGreen;
      break;
    case(3):
      document.getElementsByClassName("one")[0].style.background = blueMagentaPink;
      document.getElementsByClassName("two")[0].style.background = pinkMagentaBlue;
      document.getElementsByClassName("three")[0].style.background = blueMagentaPink;
      document.getElementsByClassName("four")[0].style.background = pinkMagentaBlue;
      document.getElementsByClassName("five")[0].style.background = blueMagentaPink;
      break;
    case(4):
      document.getElementsByClassName("one")[0].style.backgroundImage = "url(images/swirlygradient.gif)";
      document.getElementsByClassName("two")[0].style.backgroundImage = "url(images/swirlygradientupsidedown.gif)";
      document.getElementsByClassName("three")[0].style.backgroundImage = "url(images/swirlygradient.gif)";
      document.getElementsByClassName("four")[0].style.backgroundImage = "url(images/swirlygradientupsidedown.gif)";
      document.getElementsByClassName("five")[0].style.backgroundImage = "url(images/swirlygradient.gif)";
      break;
  }
}

var curDis;
var curDis0 = true;
var curDis1 = true;
var curDis2 = true;
var curDis3 = true;
var curDis4 = true;



function displayInfo(reelNum) {
  switch(reelNum) {
    case 0:
      curDis0 = !curDis0;
      curDis = curDis0;
      break;
    case 1:
      curDis1 = !curDis1;
      curDis = curDis1;
      break;
    case 2:
      curDis2 = !curDis2;
      curDis = curDis2;
      break;
    case 3:
      curDis3 = !curDis3;
      curDis = curDis3;
      break;
    case 4:
      curDis4 = !curDis4;
      curDis = curDis4;
      break;
  }
  var pop = document.getElementById("popup" + reelNum);
  if(curDis){
    pop.style.display = 'none'; //hides
    curDis = false;
  } else {
    pop.style.display = 'block'; //shows
    curDis = true;
  }
}


var currentUploadPlus = 0;

function cycleUploadPlus() {
  if (currentUploadPlus >= 4) currentUploadPlus = 0;
  uploadPlusScheme(currentUploadPlus);
  currentUploadPlus++;
}

function changeBackground(to) {
  switch (to) {
    case 0:
      uploadPlusScheme(0);
      break;
    case 1:
      cycleUploadPlus();
      break;
    case 2:
      uploadPlusScheme(4);
      break;
    case 3:
      document.getElementsByClassName("one")[0].style.backgroundImage = "url(images/Beautiful_background_image.jpg)";
      document.getElementsByClassName("two")[0].style.backgroundImage = "url(images/Beautiful_background_image.jpg)";
      document.getElementsByClassName("three")[0].style.backgroundImage = "url(images/Beautiful_background_image.jpg)";
      document.getElementsByClassName("four")[0].style.backgroundImage = "url(images/Beautiful_background_image.jpg)";
      document.getElementsByClassName("five")[0].style.backgroundImage = "url(images/Beautiful_background_image.jpg)";
      break;
  }
}

function tagApplied() {
  var text = document.getElementById("searchBar").value;
  if(text.charAt(0) == '#') {
    searchBar.style.color = 'blue';
    searchBar.style.textDecoration = 'underline';
  } else {
    searchBar.style.color = 'black';
    searchBar.style.textDecoration = 'none';
  }
}

