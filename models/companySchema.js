const  mongoose = require('mongoose')
const userName = new mongoose.Schema({

   companynName :{
      type:String,
      require:true
    },

 location:{
    type:String,
    require:true,
    default:false
   },

city:{
  type:String,
  require:true
},

founded:{
  type:String,
  require:true
},

isActive:{
  type:Boolean,
  default:true
},

userID:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:'users'
  },
company_logo:{
    type:String,
  }
})

companySchema.set('timestamps',true)
module.exports = mongoose.model('company',companySchema)