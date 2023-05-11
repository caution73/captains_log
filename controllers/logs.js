const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

// I.N.D.U.C.E.S
// ==============

// Index


router.get('/', async (req, res) => {
    console.log('Index Controller Func. running...')
    try{
        const foundLogs = await Log.find({})
        res.render('logs/Index', {logs: foundLogs})
    }catch(err){
        res.status(400).send(err)
    }
})
  
//   // New // renders a form to create a new fruit
  
  
router.get('/new', async (req, res) => {
        res.render('logs/New')
})


//   // DELETE/DESTROY
//   // This receives info the id of the fruit document and deletes it, then redirects back to index.
  

router.delete('/:id', async (req, res) => {
    try{
        await Log.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    }catch(err){
        res.status(400).send(err)
    }
})

  
  
//   // Update / (PUT)
  
router.put('/:id', async (req, res) => {
    try{
        req.body.shipIsBroken = req.body.shipIsBroken === "on";
        const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.redirect(`/logs/${req.params.id}`)
    }catch(err){
        res.status(400).send(err)
    }
})  


//   // Create // recieves info from new route to then create a new fruit w/ it
  

router.post('/', async (req, res) => {
    try{
        req.body.shipIsBroken = req.body.shipIsBroken === "on"; 
        const newLog = await Log.create(req.body);
        console.log(newLog)
        res.redirect('/logs')
    }catch(err){
        res.status(400).send(err)
    }
})
  
  
// Edit
  
router.get('/:id/edit', async (req, res) => {
    try{
        const foundLog = await Log.findById(req.params.id)
        res.render('logs/Edit', {log: foundLog})
    }catch(err){
        res.status(400).send(err)
    }
})
  
  
//   // Show

router.get('/:id', async (req, res) => {
    try{
        const foundLog = await Log.findById(req.params.id)
        res.render('logs/Show', { log: foundLog})
    }catch(err){
        res.status(400).send(err)
    }
})


module.exports = router