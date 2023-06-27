const express = require('express');
const mongooose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/crud-op-project';

const app = express();


// mongooose.connect(url, { useNewUrlParser: true});

// const  con = mongooose.connection;

// con.once('open', () => {
//     console.log('hello');
//     console.log('Connected to MongoDB');
// });


mongooose.connect('mongodb://127.0.0.1:27017/crud-op-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

const studentRouter = require('./routers/student');

app.use('/students', studentRouter);

app.listen(9000, function () {
    console.log('Server Started on port 9000!')
})
