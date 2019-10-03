// booleans for button click conditional
let footballClicked = false;
let baseballClicked = false;
let basketballClicked = false;
let soccerClicked = false;
let hockeyClicked = false;
let slipClick = false;
let openClick = false;
let textAlready = false;

// AJAX LOGIC
let sportData;

const footballAjax = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      sportData = JSON.parse(this.responseText).data;
      console.log(sportData);
      console.log(sportData[0].teams);
      console.log(sportData[0].sites[0].odds.h2h);
    }
  };
  // xhttp.open("GET", "https://api.the-odds-api.com/v3/sports/?apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", true);
  xhttp.open("GET", "https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", false);
  xhttp.send();
  setTimeout(conditionalTableGen, 300);
};
const baseballAjax = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      sportData = JSON.parse(this.responseText).data;
      console.log(sportData);
    }
  };
  // xhttp.open("GET", "https://api.the-odds-api.com/v3/sports/?apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", true);
  xhttp.open("GET", "https://api.the-odds-api.com/v3/odds/?sport=baseball_mlb&region=us&apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", false);
  xhttp.send();
  setTimeout(conditionalTableGen, 300);
};
const basketballAjax = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      sportData = JSON.parse(this.responseText).data;
      console.log(sportData);
    }
  };
  // xhttp.open("GET", "https://api.the-odds-api.com/v3/sports/?apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", true);
  xhttp.open("GET", "https://api.the-odds-api.com/v3/odds/?sport=basketball_nba&region=us&apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", false);
  xhttp.send();
  setTimeout(conditionalTableGen, 300);
};
const soccerAjax = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      sportData = JSON.parse(this.responseText).data;
      console.log(sportData);
    }
  };
  // xhttp.open("GET", "https://api.the-odds-api.com/v3/sports/?apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", true);
  xhttp.open("GET", "https://api.the-odds-api.com/v3/odds/?sport=soccer_epl&region=uk&apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", false);
  xhttp.send();
  setTimeout(conditionalTableGen, 300);
};
const hockeyAjax = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      sportData = JSON.parse(this.responseText).data;
      console.log(sportData);
    }
  };
  // xhttp.open("GET", "https://api.the-odds-api.com/v3/sports/?apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", true);
  xhttp.open("GET", "https://api.the-odds-api.com/v3/odds/?sport=icehockey_nhl&region=us&apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", false);
  xhttp.send();
  setTimeout(conditionalTableGen, 300);
};


// this function will generate data tables depending on which sport the user has selected once we import the ajax logic
let liveOddsContent = document.querySelector(".left-two-thirds-container");
const conditionalTableGen = () => {
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.innerHTML = '';
  refreshBtn();
  let newHeader = document.createElement("h1");
  newHeader.setAttribute("class", "live-odds-header");
  newHeader.innerHTML = "Live Odds";
  liveOddsContent.appendChild(newHeader);
  liveOddsContent.appendChild(document.createElement("br"));
  let sportHeader = document.createElement("h2");
  sportHeader.setAttribute("id", "sport-header");
  if (footballClicked) {
    sportHeader.innerHTML = "Football";
  } else if (baseballClicked) {
    sportHeader.innerHTML = "Baseball";
  } else if (basketballClicked) {
    sportHeader.innerHTML = "Basketball";
  } else if (soccerClicked) {
    sportHeader.innerHTML = "Soccer";
  } else if (hockeyClicked) {
    sportHeader.innerHTML = "Hockey";
  }
  liveOddsContent.appendChild(sportHeader);
  liveOddsContent.appendChild(document.createElement("hr"));
 
  for (let i = 0; i < sportData.length; i++) {
    
    // start of table
    let newTable = document.createElement("table");
    newTable.setAttribute("class", "live-odds-table");
    
    // table head row
    let newTableRow = document.createElement("tr");
    let newColumn = document.createElement("th");
    newColumn.innerHTML = moment.unix(sportData[i].commence_time).format('MMMM Do YYYY, h:mm:ss a');
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("th");
    newColumn.innerHTML = "Head-to-Head";
    newTableRow.appendChild(newColumn);
    newTable.appendChild(newTableRow);
    
    // table body row 1
    newTableRow = document.createElement("tr");
    newColumn = document.createElement("td");
    newColumn.innerHTML = sportData[i].teams[0];
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.setAttribute("class", "available-bet");
    newColumn.innerHTML = sportData[i].sites[0].odds.h2h[0];
    newTableRow.appendChild(newColumn);
    newTable.appendChild(newTableRow);
    
    // table body row 2
    newTableRow = document.createElement("tr");
    newColumn = document.createElement("td");
    newColumn.innerHTML = sportData[i].teams[1];
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.setAttribute("class", "available-bet");
    newColumn.innerHTML = sportData[i].sites[0].odds.h2h[1];
    newTableRow.appendChild(newColumn);
    newTable.appendChild(newTableRow);
    liveOddsContent.appendChild(newTable);
  };

  // logic that determines what text goes in the bet content container
  let availableBets = document.getElementsByClassName("available-bet");
  console.log(availableBets.length);
  for (let i = 0; i < availableBets.length; i++) {
    document.getElementsByClassName("available-bet")[i].onclick = () => {
      console.log(document.getElementsByClassName("available-bet")[i].innerHTML);
      // console.log(Math.floor(i / 2));
      let newBet = document.createElement("p");
      if (Math.floor(i / 2) % 2 === 0 || Math.floor(i / 2) === 0) {
        newBet.innerHTML = sportData[Math.floor(i / 2)].teams[0];
      } else if (Math.floor(i / 2) % 2 !== 0) {
        newBet.innerHTML = sportData[Math.floor(i / 2)].teams[0];
      }
      if (document.getElementsByClassName("available-bet")[i].click()) {
        textAlready = true;
      } else if (document.getElementsByClassName("available-bet")[i].click() === false) {
        textAlready = false;
      }
      document.getElementById("bet-slip-header").click();
      let betsContainer = document.getElementById("bets-content-container");
      betsContainer.innerHTML = '';
      betsContainer.appendChild(newBet);
    };
  };
};

// opacity function
const opacity = () => {
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.style.opacity = 1;
}

// refresh button will update the live odds to the current data every time it is clicked
const refreshBtn = () => {
  let refreshButton = document.createElement("div");
  refreshButton.setAttribute("class", "refresh-button");
  let refreshIcon = document.createElement("i");
  refreshIcon.setAttribute("class", "fas fa-redo");
  refreshButton.appendChild(refreshIcon);
  liveOddsContent.appendChild(refreshButton);
}

// functions for join modal pop-up
// open join modal
document.getElementById("join-link").onclick = () => {
  document.getElementById("joinModal").style.display = "flex";
};
// close join modal
document.getElementsByClassName("close")[0].onclick = () => {
  document.getElementById("joinModal").style.display = "none";
};


// functions for login modal pop-up
// open login modal
document.getElementById("login-link").onclick = () => {
  document.getElementById("loginModal").style.display = "flex";
};
// close login modal
document.getElementsByClassName("close")[1].onclick = () => {
  document.getElementById("loginModal").style.display = "none";
};

// function for capturing data from join modal
document.getElementById("create-acct-button").onclick = () => {
  console.log(document.getElementById("join-username").value.trim());
  console.log(document.getElementById("join-password").value.trim());
  document.getElementById("join-username").value = '';
  document.getElementById("join-password").value = '';
  document.getElementById("joinModal").style.display = "none";
};

// function for capturing data from login modal
document.getElementById("login-button").onclick = () => {
  console.log(document.getElementById("login-username").value);
  console.log(document.getElementById("login-password").value);
  document.getElementById("login-username").value = '';
  document.getElementById("login-password").value = '';
  document.getElementById("loginModal").style.display = "none";
};

// football table generator
const footballTables = () => {
  footballClicked = true;
  baseballClicked = false;
  basketballClicked = false;
  soccerClicked = false;
  hockeyClicked = false;
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.style.opacity = 0;
  footballAjax();
  // setTimeout(conditionalTableGen, 300);
  setTimeout(opacity, 300);
};

// soccer table generator
const soccerTables = () => {
  footballClicked = false;
  baseballClicked = false;
  basketballClicked = false;
  soccerClicked = true;
  hockeyClicked = false;
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.style.opacity = 0;
  soccerAjax();
  // setTimeout(conditionalTableGen, 300);
  setTimeout(opacity, 300);
};

// baseball table generator
const baseballTables = () => {
  footballClicked = false;
  baseballClicked = true;
  basketballClicked = false;
  soccerClicked = false;
  hockeyClicked = false;
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.style.opacity = 0;
  baseballAjax();
  // setTimeout(conditionalTableGen, 300);
  setTimeout(opacity, 300);
};

// basketball table generator
const basketballTables = () => {
  footballClicked = false;
  baseballClicked = false;
  basketballClicked = true;
  soccerClicked = false;
  hockeyClicked = false;
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.style.opacity = 0;
  basketballAjax();
  // setTimeout(conditionalTableGen, 300);
  setTimeout(opacity, 300);
};

// basketball table generator
const hockeyTables = () => {
  footballClicked = false;
  baseballClicked = false;
  basketballClicked = false;
  soccerClicked = false;
  hockeyClicked = true;
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.style.opacity = 0;
  hockeyAjax();
  // setTimeout(conditionalTableGen, 300);
  setTimeout(opacity, 300);
};

// load live football odds as default on home page
window.onload = () => {
  liveOddsContent = document.querySelector(".left-two-thirds-container");
  liveOddsContent.innerHTML = '';
  let welcomeText = document.createElement("h1");
  welcomeText.setAttribute("class", "welcome-text");
  welcomeText.innerHTML = "Welcome!";
  liveOddsContent.appendChild(welcomeText);
  liveOddsContent.appendChild(document.createElement("hr"));
  welcomeText = document.createElement("h1");
  welcomeText.setAttribute("class", "welcome-text");
  welcomeText.innerHTML = "Select a sport above to view live odds!";
  liveOddsContent.appendChild(welcomeText);
  liveOddsContent.style.opacity = 1;
};

// load live football odds when football button is clicked
document.getElementById("football-button").onclick = () => {
  // footballAjax();
  footballTables();
};

// load live soccer odds when soccer button is clicked
document.getElementById("soccer-button").onclick = () => {
  // soccerAjax();
  soccerTables();
};

// load live baseball odds when baseball button is clicked
document.getElementById("baseball-button").onclick = () => {
  // baseballAjax();
  baseballTables();
};

// load live basketball odds when basketball button is clicked
document.getElementById("basketball-button").onclick = () => {
  // basketballAjax();
  basketballTables();
};

// load live hockey odds when hockey button is clicked
document.getElementById("hockey-button").onclick = () => {
  // hockeyAjax();
  hockeyTables();
};

// function to make text white again in bet content container
const fadeBetContent = () => {
  document.getElementById("bets-content-container").style.opacity = 1;
};

// function to make text fade in
const textAppear = (string) => {
  if (textAlready === false) {
    document.getElementById("select-option").innerHTML = string;
  }
};

// these two function will toggle between the bet slip and the open bets tab on the right side of the homepage
// toggle to bet slip
document.getElementById("bet-slip-header").onclick = () => {
  slipClick = true;
  openClick = false;
  document.getElementById("bet-slip-header").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
  document.getElementById("open-bets-header").setAttribute("style", "background-color: none");
  document.getElementById("bets-content-container").style.opacity = 0;
  setTimeout(fadeBetContent, 300);
  setTimeout(function() { textAppear("No Bets Selected") }, 300);
};
// toggle to open bets
document.getElementById("open-bets-header").onclick = () => {
  openClick = true;
  slipClick = false;
  document.getElementById("open-bets-header").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
  document.getElementById("bet-slip-header").setAttribute("style", "background-color: none");
  document.getElementById("bets-content-container").style.opacity = 0;
  setTimeout(fadeBetContent, 300);
  setTimeout(function() { textAppear("No Open Bets") }, 300);
};
