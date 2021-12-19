// require dependencies

const express = require('express');

// create a router object 
const bikesRouter = express.Router();

const Bike = require('../models/bike');

// index route 
bikesRouter.get('/bikes', (req, res) =>{
  Bike.find({}, (error, bikes) => {
    res.render('index.ejs', { bikes });
  });
});

// new route
bikesRouter.get('/bikes/new', (req, res) => {
  res.render('new.ejs');
});

// delete route
bikesRouter.delete('/bikes/:id', (req, res) => {
  Bike.findByIdAndDelete(req.params.id, (err, deletedBike) => {
    res.redirect('/bikes');
  });
});

// update route
bikesRouter.put('/bikes/:id', (req, res) => {
  Bikes.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBike) => {
    console.log(req.params.id);
    res.redirect(`/bikes/${req.params.id}`);
  });
});

// create route
bikesRouter.post('/bikes', (req, res) => {
  Bike.create(req.body, (err, bike) => {
    res.redirect('/bikes');
  })
})

// edit route
bikesRouter.get('/bikes/:id/edit', (req, res) => {
  Bike.findById(req.params.id, (error, bike) => {
    res.render("edit.ejs", { bike }
    )
  });
});

// show route
bikesRouter.get('/bikes/:id', (req, res) => {
  Bike.findById(req.params.id, (err, bike) => {
    res.render("show.ejs", { bike })
  });
});

module.exports = bikesRouter;
