const { ObjectId } = require('mongodb');
const client = require('../module/mongodb');
const dbname = 'test'
const db = client.db(dbname)

const AddOneData = () => {
    db.collection('test').insertOne(
        {
            nama : 'Fahmi',
            email : 'fahm3411@gmail.com'
        },

        (err, result) => {
            if (err) {
                return console.log('data gagal', err);
            }

            console.log(result);
        }
    )
}

const AddManyData = () => {
    db.collection('test').insertMany([
        {
            nama : 'Fahmi',
            email : 'fahm3411@gmail.com'
        },
        {
            nama : 'Ahmad',
            email : 'fahmie.ie11@gmail.com'
        }
    ],

        (err, result) => {
            if (err) {
                return console.log('data gagal', err);
            }

            console.log(result);
        }
    )

}

const ReadAllData = () =>{
    console.log(db
        .collection('test')
        .find()
        .toArray((err , result) => {
        console.log(result);
    })); 
}

const ReadOneData = () =>{
    console.log(db
        .collection('test')
        .find({nama: 'Ahmad'})
        .toArray((err , result) => {
        console.log(result);
    }));
}

const UpdateOneData = () =>{
    const update = db.collection('test').updateOne(
        {
            _id : ObjectId('')
        },
        {
            $set:{
                nama : 'ahmad nur fahmi'
            }
        }
    )

    update.then((result)=> {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

const UpdateManyData = () => {
    db.collection('test').updateMany(
        {
            nama : 'ahmad'
        },
        {
            $set:{
                nama : 'ahmad nur fahmi'
            }
        }
    )
}

const DeleteData = () => {
    db.collection('test').deleteOne( //deleteMany
        {
            _id : ObjectId('')
        }
    ).then((result)=> {
        console.log(result);
    })
}


module.exports = {
    AddOneData,
    AddManyData,
    ReadAllData,
    ReadOneData,

}