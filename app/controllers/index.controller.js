const { MyModel } = require("../models/mymodel.model");
const query=MyModel.where({userId: '60030037'});
exports.render=function(req,res){
    query.findOne((err,data)=>{
        if(!err)res.render('index',data);
    })
    // res.render('index',{
    //     'title': 'Hello World',
    //     'message': 'How are things',
    // });
}