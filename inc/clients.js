var conn = require('./db')

module.exports = {

    getClients(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_clients`,(err, results) =>{
    
                if(err){
                    f(err)
                }
                else{
                    s(results)
                }
            });
        });

    },

    render(req, res, err){

        res.render('agendamento/confirmed', { title: 'Express' });

    },

    save(fields){

        return new Promise((s, f) =>{

            let query, params = [ fields.name,
                fields.email,
                fields.telephone,
                fields.date,
                fields.time,
            fields.service
        ];

         

                query = `
                INSERT INTO tb_clients (name, email, telephone, date, time, service)
                VALUES(?, ?, ?, ?, ?, ?)
                `
            

            conn.query(query, params, 
            (err, results) =>{
                if(err){
                    f(err)
                }
                else{
                    s(results)
                }


            }) 


        })

    }








}
