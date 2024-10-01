const pool = require('../config/database')

const createUser = async (email, handlepassword) =>{
    const result = await pool.query("insert into users (email,password) values ($1,$2) returning *",
        [email, handlepassword]
    );
    return result.rows[0];
};


const findUserEmail = async (email)=>{
    const result = await pool.query("select * from users where email =$1",[email]);
    return result.rows[0];
}

module.exports = {createUser, findUserEmail}