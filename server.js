const express = require('express');
const app = express();
const cors = require('cors');
const users = require('./users');

  
   
  const emailDb="r@gmail.com";
const passwordDb='123456789';

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('frntend'));
app.use(cors());



app.post("/login",(req,res)=>{
const {email, password} = req.body;
if(email === emailDb && password === passwordDb){
    res.send("login success");
}else{
    res.json("login failed");
}
});

app.get("/getusersdata",(req,res)=>{
    res.json(users);

});


app.get('/getusersdata/:id', (req, res) => {

    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
  
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
    console.log(userId);
  });
  
 
 



const PORT = process.env.PORT || 7000;
app.listen(PORT);