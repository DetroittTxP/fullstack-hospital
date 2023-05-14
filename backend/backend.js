const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cors = require('cors');
const salt = 10;
const secret  = "HEHE_SECRET_KEY_HEHE"
const swaggerUI = require('swagger-ui-express');
const swaggerData = require('./swaggerDOCS.json')
require('dotenv').config();




const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerData));
app.use(cors());
app.use(bodyparser.json());


const db = mysql.createConnection({
      host:process.env.HOST,
      user:process.env.USER,
      database:process.env.DB
})

db.connect((err) => {
    if(err) console.log(err);
    console.log(`Connected tot ${process.env.DB} database`);
})

app.get('/', (req,res) => {
    res.send({status:'pupe'});
})

app.post('/InsertPatientData',(req,res) => {
    const { id,name,age,gender,tel,address,id_card } = req.body
    db.query(
        'INSERT INTO patient (id,name,age,gender,tel,address,id_card) VALUES (?,?,?,?,?,?,?)',
        [id,name,age,gender,tel,address,id_card],
        (err,results,field) => {
            if(err){
                console.log(err);
            }
            res.send({status:'INSERT PATIENT DATA SUCCESSFULLY',data:results})
        }
    )
})



app.post('/register',(req,res) => {
    const { username,password,email,tel } = req.body;

    bcrypt.hash(password,salt,(err,hash) => {
        db.query(
            'INSERT INTO member (username,password,email,tel) VALUES (?,?,?,?)',
            [username,hash,email,tel],
            (err,results,fields) => {
                if(err){
                    console.log(err);
                }
                res.send({status:'INSERT MEMBER DATA SUCCESSFULLY',data:results})
            }
        )
    })
   
})

const CheckEmail= (username) =>{
    const EmailRex = /\S+@\S+\.\S+/
    return EmailRex.test(username) 
}

app.post('/login',(req,res) => {
    const { username,password } = req.body.users

    let isEmail = CheckEmail(username);

    if(isEmail){
        db.query('SELECT * FROM member WHERE email = ?',[username],(err,results,fields) => {
                if(err){
                    console.log(err);return;
                }

                if(results.length === 0 ){
                    res.send({status:"incorrect username or password"});return;
                }

                bcrypt.compare(password,results[0].password,(err,isLogin) => {
                      if(isLogin){

                        let token = jwt.sign({username:results[0].username},secret , {expiresIn:'1h'})
                        res.send({status:"logged in",user:username,token:token})

                      }else{
                         res.send({status:"incorrect username or password"});return;
                      }
                })
        })
    }
    else{
        db.query('SELECT * FROM member WHERE username = ?',[username],(err,results,fields) => {
            if(err){
                console.log(err);return;
            }

            if(results.length === 0 ){
                res.send({status:"incorrect username or password !"});return;
            }

            bcrypt.compare(password,results[0].password,(err,isLogin) => {
                  if(isLogin){

                    let token = jwt.sign({username:results[0].username},secret , {expiresIn:'1h'})
                    res.send({status:"logged in",user:username,token:token})

                  }else{
                     res.send({status:"incorrect username or password"});return;
                  }
            })
        })
    }
})

app.post('/verify',(req,res) => {
    try{
        let token = req.headers.authorization.split(' ')[1]
        
     
        let verifed = jwt.verify(token,secret)
        res.send({status:"verified",token:verifed})

    }catch(err){
        res.send({status:"not verfied",err:err})
    }
})

app.post('/insertqueuedata',(req,res) => {
    const {name,age,gender,date,address,id_card} = req.body

    db.query(
        'INSERT INTO queue (name,age,gender,address,date,id_card) VALUES (?,?,?,?,?,?)',
        [name,age,gender,address,date,id_card],
        (err,results,fields) =>{
            if(err){
                console.log(err);
            }

            res.send({
                status:'เพิ่มข้อมูลการจองคิวเรียบร้อยเเล้ว',
                result:results
            })

        }
    )

})

app.get('/getqueuedata',(req,res) => {
    db.query(
        'SELECT * FROM queue',
        (err,results,fields)=>{
            if(err)console.log(results);

            res.json(results)
        }
    )
})



app.listen('5555',() => {
    console.log('SERVER RUN ON PORT 5555');
})