// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const dboperations = require('./dboperations');
// var Order  = require('./order');
// const { request } = require('express');
// // const router = express.Router;



// // var config = require('./dbconfig');

// // const  sql = require('mysql');

// // var order = require('./order')

//  async function getOrders(){

//     try{
//         let pool =  await sql.connect(config);
//         let products =  await pool.request().query("SELECT * from Orders");
//         return products.recordsets;

//     }
//     catch(error){
// console.log(error);
//     }
// }

// const router = express.Router();
// router.get('/', async (req, res, next)=>{
//     try{
//         let results = await config.all();
//         res.json(results);

//     }catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     }
// })

// module.exports = {
//     getOrders : getOrders
// }

const mysql = require('mysql');

 const pool = mysql.createPool({
    connectionLimit : 20,
    password : 'password',
    user : 'root',
    database : 'products',
    host : 'localhost',
    port : '3306'


});

let productsdb = {};
 productsdb.all = () => {
     return new Promise((resolve, reject) => {
pool.query('SELECT * FROM products', (err, results) =>{
    if(err){
        return reject(err);
    }
    return resolve(results);
})
     })
     
 }

 productsdb.one  = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products WHERE id = ?', [id,title,price,about], (err, results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
             })
 }
 module.exports = productsdb;