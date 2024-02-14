const express = require ("express");
const app= express();
const  mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  user            : 'root',
  host            : 'localhost',
  password        : '',
  database        : 'employee'
});

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.post('/sign',(req,res)=>{
  const sql="INSERT INTO facebook (`firstname`,`surname`,`mobile`,`password`,`date`,`month`,`year`,`gender`) Values(?)";

  const values = [req.body.firstname, req.body.surname, req.body.mobile,req.body.password, req.body.date, req.body.month, req.body.year, req.body.gender]

  db.query(sql,[ values],(err,data)=>{
      if(err)
      return res.json(data);
  })
})

app.post("/log",(req,res)=>{
    const sql="SELECT * FROM facebook WHERE `mobile`= ? AND `password`= ?";

    // const values =[req.body.mobile,req.body.password]

    db.query(sql,[req.body.mobile,req.body.password],(err,result)=>{
        if(err){
            return res.json("Error");
        }
        if(result.length > 0){
            return res.json("Login Success")
        }else{
            return res.json("No Record")
        }
    })
})

app.get("/login",(req,res)=>{
    db.query("SELECT * FROM facebook  ",(err,result)=>{
        if(err){
            console.log(err);
            return result.json(err);
        } else {
            res.send(result);
          }
    })
})
app.get("/logindetails/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM facebook WHERE id = ?",id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
   

  app.put("/login/:id", (req, res) => {
    const userId = req.params.id;

    const sql ="UPDATE facebook SET firstname = ?,surname = ?,mobile = ?,password = ?,date = ?,month = ?,year = ?,gender = ? WHERE id = ?";

    db.query(sql, [req.body.firstname, req.body.surname, req.body.mobile,req.body.password, req.body.date, req.body.month, req.body.year, req.body.gender,userId], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.delete("/login/:id", (req, res) => {
    const userid = req.params.id;

    const sql ="DELETE FROM facebook WHERE id = ?";

    db.query(sql, [userid], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.listen(8081,()=>{
    console.log("Listening on port number 8081");
})
