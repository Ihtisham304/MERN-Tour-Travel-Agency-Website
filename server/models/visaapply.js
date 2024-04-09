const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
      applytype :{
        type: String,
        enum: ['umrah','dubai','ticket'],
        required: true
      },
      from: {
         type: String,
         required: true,
      },
      arrivalto: {
        type: String
      },
      departuredate:{
        type: Date
      },
      noadult: {
            type: Number
      },
      nochild:{
        type: Number
      },
      noinfant:{
            type: Number
      }
      ,
      name:{
        type: String,
        required: true
      },
      contactno:{
        type: String,
        required: true,
      },
      nodays:{
        type: Number,
      },
      distance: {
        type: Number,
      },
      createdAt:{
        type: Date,
        default: Date.now
      }

})

const apply = mongoose.model('apply',applySchema);

module.exports = apply;