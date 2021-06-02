const mongoose=require('mongoose')
const config=require('config')
const connectDB=()=>{

    mongoose.connect(config.get('uri'),{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('connect'))
    .catch(err=>console.log(err))

}

module.exports=connectDB