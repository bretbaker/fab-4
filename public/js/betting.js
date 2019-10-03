var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "sportsbetting"
});

connection.connect(function(err) {
  if (err) {throw err;}
  console.log("connected as id " + connection.threadId + "\n");
  bettingSlip();
});

//bet is whatever value that is from the betting slip ID
var bet = document.getElementById();

//making bet. subtracting bet from totalmoney on user
function bettingSlip() {
  connection.query(
    "SELECT * FROM users where username = ? AND totalmoney = ?",
    function(err, res) {
      if (err) {throw err;}
      else {
        res.totalmoney - bet;
      }
    }
  );
};
