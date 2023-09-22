var express = require('express');
var router = express.Router();
var clients = require('./../inc/clients')
var schedule = require('./../inc/schedule')




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/haircuts.html', function(req, res, next) {
  res.render('haircuts', { title: 'Express' });
});

router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/agendamento/haircutType.html', function(req, res, next) {
  res.render('agendamento/haircutType', { title: 'Express' });
});

router.get('/agendamento/time.html', function(req, res, next) {

  schedule.getSchedule().then(data =>{

    res.render('agendamento/time', { 
      title: 'Express',
      data
    
    });


  })

 
});

router.get('/agendamento/clientData.html', function(req, res, next) {
  res.render('agendamento/clientData', { title: 'Express' });
  
});

router.post('/agendamento/clientData.html', function(req, res, next) {
  clients.save(req.body).then(result =>{

    req.body = {}

    clients.render(req, res, null)

  }).catch(err =>{
    clients.render(req, res, err.message)
  })
  
});


router.get('/agendamento/confirmed.html', function(req, res, next) {
  res.render('agendamento/confirmed', { title: 'Express' });
});




module.exports = router;
