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


// const conntact1 = new Contact({
//     nama : 'Ahmad',
//     nohp : '081212313123',
//     email : 'fahm3411@gmail.com'
//     })
    
//     conntact1.save().then((Contact) => console.log(Contact));
    