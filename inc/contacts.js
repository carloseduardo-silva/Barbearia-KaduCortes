var conn = require('./db')

module.exports = {

    getContacts(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_contacts`,(err, results) =>{
    
                if(err){
                    f(err)
                }
                else{
                    s(results)
                }
            });
        });

    }
}