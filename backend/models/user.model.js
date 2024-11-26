import mongoose from 'mongoose';

const userApplicationSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required: true
  },
  lastName: {
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  phoneNumber: {
    type:String,
    required: true
  },
  gender: {
    type:String,
    required: true
  },
  dob: {
    type:String,
    required: true
  },
  address: {
    type:String,
    required: true
  },
  city: {
    type:String,
    required: true
  },
  zipCode: {
    type:Number,
    required: true
  },
  selectedProgram: {
    type:String,
    required: true
  },
  student: {
    type:Boolean,
    required: true
  },
},{
  timestamps: true
});

const userApplication = mongoose.model('UserApplication',userApplicationSchema);
export default userApplication;
