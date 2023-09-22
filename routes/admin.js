var express = require('express');
var router = express.Router();
var schedule = require('../inc/schedule')
var clients = require('../inc/clients')
var contacts = require('../inc/contacts')
var users = require('../inc/users')
var admin = require('../inc/admin')

router.use(function(req, res , next){

    if(["/login"].indexOf(req.url) === -1 && !req.session.user) {
        res.redirect('/admin/login')
    } else{
        next()
    }


})

router.get('/', function(req, res, next){

admin.dashBoard().then( data =>{
    res.render('admin/index', {
        title: 'AdminPage',
        data
    })
   

})

})

router.post('/login', function(req, res, next){


    if(!req.body.email){
        users.render(res, req,"Preencha o campo email!")
    }   
    else if(!req.body.password){
        users.render(res, req,"Preencha o campo senha!")
    } 
    
    else{

        users.login(req.body.email, req.body.password).then(user =>{
            console.log(user)
            req.session.user = user
            res.redirect('/admin')

        }).catch(err =>{

            console.log(err)
            console.log('error')
            users.render(res, req, err.message || err)

        })
    
    
    } 
    })

router.get('/login', function(req, res, next){

    users.render(res, req , null)
})

router.get('/logout', function(req, res, next){

    delete req.session.user;

    res.redirect('/admin/login')

    })


router.get('/index', function(req, res, next){
    res.render('admin/index', {title: 'AdminPage'})
    })

router.get('/clients', function(req, res, next){

    clients.getClients().then(results =>{
        res.render('admin/clients', {
            date:'',
            data:results
        })

    })


    })

router.get('/schedule', function(req, res, next){

    schedule.getSchedule().then(results =>{
      
        res.render('admin/schedule', {
            title: 'AdminPage',
            data:results
        })
        })

    })



router.get('/contacts', function(req, res, next){

    contacts.getContacts().then(results=>{
      
        res.render('admin/contacts', {
            title: 'AdminPage',
            data: results
        })
        })

    })


router.get('/users', function(req, res, next){

    users.getUsers().then(results =>{
      
        res.render('admin/users', {
            title: 'AdminPage',
            data:results
        })
        })

    })




module.exports = router