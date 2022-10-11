const express = require('express');
const cors = require('cors');


const AuthRoutes = require('./Routes/auth.routes');


const app = express();


//Run the app on port 8000
const PORT = process.env.PORT || 8000;


//Allow the app to use json
app.use(express.json());
//Allow the app to use cors
app.use(cors());
//Allow the app to use urlencoded
app.use(express.urlencoded({extended: true}));

app.use('/', (req, res) => {
    res.send('Welcome to the backend!');
});

//Use the routes:
app.use('/auth', AuthRoutes);





app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});







