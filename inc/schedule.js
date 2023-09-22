var conn = require('./db')

module.exports = {


    getSchedule(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_schedule`,(err, results) =>{
    
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