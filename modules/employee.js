const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false });
var conn=mongoose.connection;
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
    total:Number,
});
employeeSchema.plugin(mongoosePaginate);
var employeeModel = mongoose.model('Employee',employeeSchema);
module.exports=employeeModel;