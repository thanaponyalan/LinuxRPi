var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var MySchema=new Schema({
    userId: {type: String, lowercase: true, unique: true, required: [true,'can\'t be blank'],index: true},
    detail:{
        fname: String,
        lname: String,
        contact:{
            phone: String,
            email: String,
            address: String
        },
        experiences:[{
            year: String,
            position: String,
            org: String
        }],
        educations:[{
            year: String,
            major: String,
            minor: String,
            faculty: String,
            school: String
        }],
        awards:[{
            year: String,
            reward: String,
            name: String
        }],
        skills:[{
            name: String,
            level: Number
        }]
    }
});

const MyModel=mongoose.model('MyModel', MySchema);
module.exports={
    MyModel
}