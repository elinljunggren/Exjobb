var mysql = require('mysql');

var connection;

var GET_CUSTOMER = "SELECT customer FROM Tags WHERE rfid = ?";
var GET_TAGS = "SELECT rfid FROM Tags WHERE customer = ?";
var GET_DISPOSALS = "SELECT * FROM Disposals WHERE customerId = ?";

function open() {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'envac_app'
  });
  connection.connect();
}

function close() {
  connection.end();
}

function getCustomer(rfid, callback) {
  connection.query(GET_CUSTOMER, rfid, function(err, rows, fields) {
    if (!err) {
      console.log('The solution is: ', JSON.parse(rows[0].customer));
      //var binary = JSON.parse(rows[0].customer);
      //callback(binary);
    } else {
      console.log('Error while performing Query.');
      //callback();
    }
  });
};

function getTags(customer, callback) {
  connection.query(GET_TAGS, customer, function(err, rows, fields) {
    if (!err) {
      console.log('The solution is: ', rows);
      //var binary = JSON.parse(rows[0].customer);
      //callback(binary);
    } else {
      console.log('Error while performing Query.');
      //callback();
    }
  });
};

function getDisposals(customer, callback) {
  connection.query(GET_DISPOSALS, customer, function(err, rows, fields) {
    if (!err) {
      console.log('Disposals for 2082: ', rows);
      //var binary = JSON.parse(rows[0].customer);
      //callback(binary);
    } else {
      console.log('Error while performing Query.');
      //callback();
    }
  });
};
