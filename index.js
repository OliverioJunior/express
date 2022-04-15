const express = require('express');
const app = express();
const saudacaoMid = require('./saudacaoMid');
const bodyParser = require('body-parser');

 app.use(bodyParser.text());
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true})); //submissao de formulario
 app.use(saudacaoMid('Rafael')); 
/* app.use('/',(req, res, next) => {
    res.send('<h1>Hello World</h1>');
}); */
app.get('/clientes/relatorio',(req,res) =>{
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)	
})
app.post('/corpo', (req,res) =>{
    /* let corpo = '';
    req.on('data', function(parte){
        corpo += parte;
    });
    req.on('end', function(){
        res.send(corpo);
    }); */
    res.send(req.body);
})
app.get('/clientes/:id', (req,res) =>{
    res.send(`Cliente relatório: ${req.params.id}`)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/lista',(req, res, next) => {
     res.json({
         data: [
             {id: 7, name:'Ana', position:1},
             {id: 8, name:'Pedro', position:2},
             {id: 9, name:'Maria', position:3},
         ],
         count:30,
         skip:0,
         limit:3,
         status:200
     })
})


app.listen(3000)