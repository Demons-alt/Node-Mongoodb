const mongoose = require('../module/mongoos');

const Contact = mongoose.model('contact',{
    nama : {
        type : String,
        require : true,
    },
    nohp : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true
    }
})

module.exports = Contact

    