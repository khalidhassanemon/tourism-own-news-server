const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

const hotel = require('./data/hotel.json');


app.get('/', (req, res) => {
    res.send('News API Running');
});


app.get('/hotel-categories', (req, res) => {
    res.send(categories)
});

app.get('/hotel', (req, res) =>{
    res.send(hotel);
});

app.get('/category/:id',(req,res)=>{
    const id=req.params.id;
    if(id==='08'){
        res.send(hotel);
    }
    else{
        const category_hotel=hotel.filter( n=> n.category_id === id);
        res.send(category_hotel);
    }
   
})
app.get('/hotel/:id',(req,res)=>{
    const id=req.params.id;
    const selectedHotel=hotel.find( n=> n._id === id);
    res.send(selectedHotel);
})



app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})