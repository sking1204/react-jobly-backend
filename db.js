//new

// "use strict";
// /** Database setup for jobly. */
// const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");

// let db;

// if (process.env.NODE_ENV === "production") {
//   db = new Client({
//     // host: "/var/run/postgresql/",
//     // database: getDatabaseUri(),
//     connectionString: getDatabaseUri(),
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// } else {
//   db = new Client({
//     // host: "/var/run/postgresql/",
//     // database: getDatabaseUri()
//     connectionString: getDatabaseUri()
//   });
// }

// db.connect();

// module.exports = db;



// //Another workaround - works locally
"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let DB_URI = "postgresql:///react_jobly_solution";

// if (process.env.NODE_ENV === "test") {
//   DB_URI = "postgresql:///react_jobly_solution_test";
// } else {
//   DB_URI = "postgresql:///react_jobly_solution";
// }

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;



// const { Client } = require("pg");

// let DB_URI;

// if (process.env.NODE_ENV === "test"){
//   DB_URI = "postgresql:///react_jobly_solution_test";
// }else{
//   DB_URI = "postgresql:///react_jobly_solution"
// }

// let db = new Client({
//   connectionString: DB_URI
// });



// "use strict";
// /** Database setup for jobly. */
// const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");



// let db;

// if (process.env.NODE_ENV === "production") {
//   db = new Client({
//     connectionString: getDatabaseUri(),
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });
// } else {
//   db = new Client({
//     connectionString: getDatabaseUri()
//   });
// }

// db.connect();

// module.exports = db;

//workaround

// let DB_URI;

// if (process.env.NODE_ENV === "test"){
//   DB_URI = "postgresql:///react_jobly_solution_test";
// }else{
//   DB_URI = "postgresql:///react_jobly_solution";

//   let db = new Client({
//     connectionString: DB_URI
//   });


// }

// module.exports = DB_URI;