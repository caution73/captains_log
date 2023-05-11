require('dotenv').config();
const express = require('express');
const db = require('./config/database')
const app = express();
const PORT = process.env.PORT || 8000;
const { connect, connection } = require('mongoose');
const Log = require('./models/logs');
// const methodOverride = require('method-override')


const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// The line below tells the server to look for static assets in the public folder, like css, imgs, or fonts
app.use(express.static('public'))

// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

// I.N.D.U.C.E.S
// ==============

// Index


app.get('/logs', async (req, res) => {
    console.log('Index Controller Func. running...')
    try{
        const foundLogs = await Log.find({})
        res.render('Index', {logs: foundLogs})
    }catch(err){
        res.status(400).send(err)
    }
})







// app.get('/', async (req, res) => {
//     console.log('Index Controller Func. running...');
//     try {
//       const foundVegetable = await Vegetable.find({})
//       res.render('vegetables/Index', { vegetables: foundVegetable});
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });
  
//   // New // renders a form to create a new fruit
  
  
app.get('/logs/new', async (req, res) => {
        res.render('New')
})




  
//   // DELETE/DESTROY
//   // This receives info the id of the fruit document and deletes it, then redirects back to index.
  
  
//   router.delete('/:id', async (req, res) => {
//     try{
//       await Vegetable.findByIdAndDelete(req.params.id)
//       res.redirect('/vegetables')
//     }catch(err) {
//       res.status(400).send(err)
//     }
//   });
  
  
//   // Update / (PUT)
  
  
  
//   router.put('/:id', async (req,res) => {
//     try{
//       req.body.readyToEat = req.body.readyToEat === 'on';
//       const updatedVegetable = await Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       console.log(updatedVegetable);
//       //console.log(fruits);
//       // redirect is making a GET request to whatever path you specify
//       res.redirect(`/vegetables/${req.params.id}`);
//     }catch (err) {
//       res.status(400).send(err)
//     }
//   })
  
  
//   // Create // recieves info from new route to then create a new fruit w/ it
  
  


app.post('/logs', async (req, res) => {
    try{
        req.body.shipIsBroken = req.body.shipIsBroken === "on"; 
        const newLog = await Log.create(req.body);
        console.log(newLog)
        res.redirect('/logs')
    }catch(err){
        res.status(400).send(err)
    }
})




//   router.post('/', async (req, res) => {
//     try {
//       req.body.readyToEat = req.body.readyToEat === 'on';
//       const newVegetable = await Vegetable.create(req.body);
//       console.log(newVegetable);
//       //console.log(fruits);
//       // redirect is making a GET request to whatever path you specify
//       res.redirect('/vegetables');
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });
  
  
//   // Edit
  
  
//   router.get("/:id/edit", async (req, res) => {
//     try{
//       // Finding the document that we are about to edit, then giving the Edit.jsx the found document via props.
//       const foundVegetable = await Vegetable.findById(req.params.id)
//       res.render("vegetables/Edit", {
//         vegetable: foundVegetable
//       })
//     }catch (err) {
//       res.status(400).send(err)
//     }
//   })
  
  
//   // Show

app.get('/logs/:id', async (req, res) => {
    try{
        const foundLog = await Log.findById(req.params.id)
        res.render('Show', { log: foundLog})
    }catch(err){
        res.status(400).send(err)
    }
})


//   router.get('/:id', async (req, res) => {
//     try {
//       // We are using the id given to us in the URL params to 
//       // query our database.
//       const foundVegetable = await Vegetable.findById(req.params.id)
//       res.render('vegetables/Show', {
//         //second param must be an object
//         vegetable: foundVegetable
//         //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//       });
//     }catch(err) {
//       res.status(400).send(err);
//     }
//   });



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });