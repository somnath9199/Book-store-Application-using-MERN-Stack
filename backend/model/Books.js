const mongoose = require('mongoose')

const Bookschema = new mongoose.Schema({

    Title:{
        type:String,
        required:true,
        unique:true
    },
    Author:{
        type:String,
        require:true,
    },
    PublishedYear:{
       type:Number,
       require:true,
    },
},
{
    timestamps:true
}
)

const Booksdata = mongoose.model('Booksdata',Bookschema);
module.exports = Booksdata;

