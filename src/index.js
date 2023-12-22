import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Issue = require('./database/dataSchema');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://biswadeep_recipe_app48:recipe_app1234@cluster0.wemoad7.mongodb.net/issue-tracker?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/insert', async (req, res) => {
  const description = req.body.description
  const developer = req.body.developer
  const priority = req.body.priority

  const formData = new Issue({
    description: description,
    developer: developer,
    priority: priority
  })

  try {
    await formData.save();
    res.send("inserted data successfully");
  }
  catch (err) {
    console.log(err)
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

