// booleans for button click conditional
let footballClicked = true;
let baseballClicked = false;
let basketballClicked = false;
let soccerClicked = false;

// this function will generate data tables depending on which sport the user has selected once we import the ajax logic
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
  }
  liveOddsContent.appendChild(sportHeader);
  liveOddsContent.appendChild(document.createElement("hr"));
  for (let i = 0; i < 8; i++) {
    let newTable = document.createElement("table");
    newTable.setAttribute("class", "live-odds-table");
    let newTableRow = document.createElement("tr");
    let newColumn = document.createElement("th");
    newColumn.setAttribute("colspan", "2");
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("th");
    newColumn.innerHTML = "Spread";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("th");
    newColumn.innerHTML = "Win";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("th");
    newColumn.innerHTML = "Total";
    newTableRow.appendChild(newColumn);
    newTable.appendChild(newTableRow);
    newTableRow = document.createElement("tr");
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Team";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Score";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Spread";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Win";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Total";
    newTableRow.appendChild(newColumn);
    newTable.appendChild(newTableRow);
    newTableRow = document.createElement("tr");
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Team";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Score";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Spread";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Win";
    newTableRow.appendChild(newColumn);
    newColumn = document.createElement("td");
    newColumn.innerHTML = "Total";
    newTableRow.appendChild(newColumn);
    newTable.appendChild(newTableRow);
    liveOddsContent.appendChild(newTable);
  };
}

// refresh button will update the live odds to the current data every time it is clicked
let liveOddsContent = document.querySelector(".left-two-thirds-container");
const refreshBtn = () => {
  let refreshButton = document.createElement("div");
  refreshButton.setAttribute("class", "refresh-button");
  let refreshIcon = document.createElement("i");
  refreshIcon.setAttribute("class", "fas fa-redo");
  refreshButton.appendChild(refreshIcon);
  liveOddsContent.appendChild(refreshButton);
}

// two functions for join modal pop-up
// open join modal
document.getElementById("join-link").onclick = () => {
  document.getElementById("joinModal").style.display = "flex";
};
// close join modal
document.getElementsByClassName("close")[0].onclick = () => {
  document.getElementById("joinModal").style.display = "none";
};

// two functions for login modal pop-up
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
  console.log(document.getElementById("join-first-name").value.trim());
  console.log(document.getElementById("join-last-name").value.trim());
  console.log(document.getElementById("join-date-of-birth").value.trim());
  console.log(document.getElementById("join-phone-number").value.trim());
  console.log(document.getElementById("join-email").value.trim());
  console.log(document.getElementById("join-password").value.trim());
  console.log(document.getElementById("join-confirm-password").value.trim());
  document.getElementById("join-first-name").value = '';
  document.getElementById("join-last-name").value = '';
  document.getElementById("join-date-of-birth").value = '';
  document.getElementById("join-phone-number").value = '';
  document.getElementById("join-email").value = '';
  document.getElementById("join-password").value = '';
  document.getElementById("join-confirm-password").value = '';
  document.getElementById("joinModal").style.display = "none";
};

// function for capturing data from login modal
document.getElementById("login-button").onclick = () => {
  console.log(document.getElementById("login-email").value);
  console.log(document.getElementById("login-password").value);
  document.getElementById("login-email").value = '';
  document.getElementById("login-password").value = '';
  document.getElementById("loginModal").style.display = "none";
};

// THIS IS A TEMPORARY FINCTION WE NEED TO FIGURE OUT THE AJAX LOGIC
const tableData = () => {
  // THIS IS WHERE THE API LOGIC WILL GO
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.response));
    }
  };
  // this is the starting endpoint where we need to figure out the correct url paths for the data we want to obtain
  // xhttp.open("GET", "https://api.the-odds-api.com/v3/sports/?apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", true);

  // this is a starting nfl football endpoint where we need to figure out the correct url paths for nffl football data
  xhttp.open("GET", "https://api.the-odds-api.com/v3/odds/?sport=americanfootball_nfl&region=us&apiKey=dd6fdb1dbb22d4b22baa88050bcd18f2", true);
  xhttp.send();
};
tableData();

// football table generator
const footballTables = () => {
  footballClicked = true;
  baseballClicked = false;
  basketballClicked = false;
  soccerClicked = false;
  conditionalTableGen();
};

// soccer table generator
const soccerTables = () => {
  footballClicked = false;
  baseballClicked = false;
  basketballClicked = false;
  soccerClicked = true;
  conditionalTableGen();
};

// baseball table generator
const baseballTables = () => {
  footballClicked = false;
  baseballClicked = true;
  basketballClicked = false;
  soccerClicked = false;
  conditionalTableGen();
};

// basketball table generator
const basketballTables = () => {
  footballClicked = false;
  baseballClicked = false;
  basketballClicked = true;
  soccerClicked = false;
  conditionalTableGen();
};

// load live football odds as default on home page
window.onload = () => {
  footballTables();
};

// load live football odds when football button is clicked
document.getElementById("football-button").onclick = () => {
  footballTables();
};

// load live soccer odds when soccer button is clicked
document.getElementById("soccer-button").onclick = () => {
  soccerTables();
};

// load live baseball odds when baseball button is clicked
document.getElementById("baseball-button").onclick = () => {
  baseballTables();
};

// load live basketball odds when basketball button is clicked
document.getElementById("basketball-button").onclick = () => {
  basketballTables();
};

// these two function will toggle between the bet slip and the open bets tab on the right side of the homepage
// toggle to bet slip
document.getElementById("bet-slip-header").onclick = () => {
  document.getElementById("bet-slip-header").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
  document.getElementById("open-bets-header").setAttribute("style", "background-color: none");
};
// toggle to open bets
document.getElementById("open-bets-header").onclick = () => {
  document.getElementById("open-bets-header").setAttribute("style", "background-color: rgba(255, 255, 255, 0.4)");
  document.getElementById("bet-slip-header").setAttribute("style", "background-color: none");
};
