// module.exports = config;
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const dboperations = require('./dboperations');
// var Order  = require('./order');
// const { request } = require('express');

// var config = require('./dbconfig');

// const  sql = require('mysql');

// var order = require('./order')


// Mysql Connections
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'products'
// });
// red flag for mysql connection
// try {
//     connection.connect();
// } catch (e) {
//     console.log('Oops. Connection to MySQL failed.');
//     console.log(e);
// }


// let productsdb = {};
//  productsdb.all = () => {
//      return new Promise((resolve, reject) => {
// pool.query('SELECT * FROM productsdb', (err, results) =>{
//     if(err){
//         return reject(err);
//     }
//     return resolve(results);
// })
//      })
     
//  }

// module.exports = productsdb;



// const api = express();
// api.use(express.static(__dirname + '/src/Components/order.js'));
// api.use(bodyParser.json());


// api.listen(3000, () => {
//     console.log('API up and running!');
// });

// router.use((request, response, next) => {
//     console.log('middleware');
//     next();
//     })
    
//     router.route('/orders').get((request, response) => {
//         dboperations.getOrders().then(result => {
//             console.log(result);
//             response.json(result[0])
//         })
//     })




// // get method
// app.get('title', (req, res) => {
//     config.query('SELECT * FROM Title', (err, result) => {
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result);
//         }
//     })
//     })

//     app.get('price', (req, res) => {
//         config.query('SELECT * FROM Price', (err, result) => {
//             if(err){
//                 console.log(err)
//             }else{
//                 res.send(result);
//             }
//         })
//     })
//     app.get('about', (req, res) => {
//         config.query('SELECT * FROM About', (err, result) => {
//             if(err){
//                 console.log(err)
//             }else{
//                 res.send(result);
//             }
//         });

//     })