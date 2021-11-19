const express = require('express');
const app = express();
const port = 3000;
const User = require('./models/user.js');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = 'mongodb+srv://Admin:admin123@cluster0.vzs9g.mongodb.net/myDB?retryWrites=true&w=majority';
app.use(express.urlencoded());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
(async () => {
  await mongoose.connect(uri);
  console.log('connected to mongoose through async function');
})();
// ======================= index page (read) ==================================
app.get('/', async (req, res) => {
  console.log('inside read')
    const userData = await User.find();
    res.send(JSON.stringify(userData));
});

// =========================== create =========================================
app.post('/add', async (req, res) => {
  console.log('inside add');
    await User.create(req.body, (err, result) => {
      if (err) throw err;
      res.redirect('/');
    });
});

// ============================== delete ======================================
app.get('/delete/:userId', async (req, res) => {
  console.log('inside delete');
  await User.findByIdAndDelete(req.params.userId);
  res.redirect('/');
});

// ============================== update ======================================
app.post('/edit', (req, res) =>{
  console.log('inside update');
  console.log(req.body);
  
    User.findByIdAndUpdate(req.body._id, {$set: {'name':req.body.name, 'email':req.body.email, 'address':req.body.address, 'phone':req.body.phone}}, (err, result) => {
      if (err) throw err;
      res.redirect('/');
    });
});

app.listen(port);
