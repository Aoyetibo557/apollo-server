// const db = require("./models");
// const Links = db.Links;

// exports.create = (req, res) => {
//   if (!req.body.originalUrl) {
//     res.status(400).send({
//       message: "Original URL needed to complete operation!"
//     });
//     return;
//   }
// };

// //Get all the links in the database
// exports.findAll = (req, res) => {
//   Links.findAll({})
//     .then((data) => {
//       if (data.length > 0) {
//         res.status(200).json({
//           message: "All the Links in the Database!",
//           result: data
//         });
//       } else {
//         res.status(400).json({
//           message: "No Links found in the Database!",
//           result: data
//         });
//       }
//     })
//     .catch((error) => {
//       res.status(500).send({
//         message: "An error occured while perfomring task!"
//       });
//     });
// };
