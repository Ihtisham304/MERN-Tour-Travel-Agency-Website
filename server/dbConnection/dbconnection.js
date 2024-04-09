const mongoose = require('mongoose');

const Connection = async()=>{
            try {
               await mongoose.connect(process.env.db_url);
                console.log('database connected succesfully');
            } catch (error) {
                console.log('error while connecting to database');
            }
}

module.exports = Connection;