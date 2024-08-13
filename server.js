const express = require('express'); 
const mongoose = require('mongoose');

const app = express();              
const port = 5000;                 
const userRoutes = require("./src/components/User/user.routes")
const quizRoutes = require("./src/components/Quiz/quiz.routes")
const questionRoutes = require("./src/components/Question/question.routes")
const sessionRoutes = require("./src/components/Session/session.routes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes)
app.use(quizRoutes)
app.use(questionRoutes)
app.use(sessionRoutes)


const MONGO_URI = 'mongodb://127.0.0.1:27017/KahootDB';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  }) 
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.get('/', (req, res) => {        
    res.sendFile('index.html', {root: __dirname}); 
});

app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});

