// Requires
import 'dotenv/config';
import express from 'express'
import expressLayouts from 'express-ejs-layouts';
import compression from 'compression'


//Variabelen
const app = express();
const port = process.env.PORT || 4000;

// Compress alle responses
app.use(compression())

// Cached alles behalve HTML voor 1 jaar (see https://ashton.codes/set-cache-control-max-age-1-year/).
app.use(function(req, res, next) {
    if (req.method == "GET" && !(req.rawHeaders.toString().includes("text/html"))) {
        res.set("Cache-control", "public, max-age=31536000")
    }
    next()
})

// Aangeven waar onze statische files zich bevinden  
app.use(express.static('static'));

// Templating engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');

//Routing
app.get('/', async (req, res) => {
    res.render('home')
});

app.get('/setup', async (req, res) => {
    res.render('setup')
});

app.get('/costs', async (req, res) => {
    res.render('costs')
});

app.get('/aboutMe', async (req, res) => {
    res.render('aboutMe')
});

app.get('/contact', async (req, res) => {
    res.render('contact')
});

// Set server
app.listen(port, () => {
    console.log(`Gebruikte poort: localhost:${port} !`)
});