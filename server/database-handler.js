var mysql = require('mysql');

var connection;

var GET_CUSTOMER = "SELECT customer FROM Tags WHERE rfid = ?";
var GET_TAGS = "SELECT rfid FROM Tags WHERE customer = ?";
var GET_DISPOSALS = "SELECT * FROM Disposals WHERE customerId = ?";
var GET_WEIGHT_INLETS = "select distinct inletAddress from Disposals where weight != -1 order by inletAddress";

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
  connection.query(GET_CUSTOMER, [rfid], function(err, rows, fields) {
    if (!err) {
      callback(rows[0].customer);
    } else {
      console.log('Error while performing Query.');
    }
  });
};

function getTags(customer, callback) {
  connection.query(GET_TAGS, [customer], function(err, rows, fields) {
    if (!err) {
      callback(rows);
    } else {
      console.log('Error while performing Query.');
    }
  });
};

function getDisposals(customer, callback) {
  connection.query(GET_DISPOSALS, [customer], function(err, rows, fields) {
    if (!err) {
      callback(rows);
    } else {
      console.log('Error while performing Query.');
    }
  });
};

module.exports = {
  open,
  close,
  getCustomer,
  getTags,
  getDisposals
}