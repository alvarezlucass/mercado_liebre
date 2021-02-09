const express = require('express');
const app = express();
app.use(express.static('public'));
// prueba
const publicPath= path.resolved(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});