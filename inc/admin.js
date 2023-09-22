var path = require('path')
var conn = require('./db')


module.exports = {

    dashBoard(){
        //get the dashboard informations in real time from mysql
        return new Promise((s, f) =>{
            conn.query(`
            SELECT
            (SELECT COUNT(*) FROM tb_contacts) AS nrcontacts,
            (SELECT COUNT(*) FROM tb_schedule) AS nrschedule,
            (SELECT COUNT(*) FROM tb_clients) AS nrclients,
            (SELECT COUNT(*) FROM tb_users) AS nrusers;`, (err, results)=>{
                if(err){
                    f(err)
                } else{
                    s(results[0])
                }
            })

        })

    },


    getParams(req, params){

        return Object.assign({}, {
            menus: req.menus,
            user: req.session.user
        }, params)

    },


   /* getMenus(req){
        //function that append the object with the list of config menus and verificating wich is active:true, receveing only the request for acess req.url (url from the route in use)
        let menus = [
            {
                text: 'Tela inicial',
                href: '/admin/',
                icon:'home',
                active:false
            },
          
        ]

        menus.map(menu =>{

            if(menu.href === `admin/${req.url}`){
                menu.active = true
            }


        })
        
        return menus
    }
*/
    
}