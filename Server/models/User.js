const { Schema, model } = require("mongoose")
const dateFormat = require('../utils/dateFormat')
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "You need to have a username",
      minlength: 1,
      maxlength: 20,
      trim: true,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      unique: true,
    },
    email: {
      type: String,
      required: "You need to have an email",
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },

    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comments"
    //   },
    // ],

    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //   }
    // ]
  },
  {
    toJson: {
      virtuals: true,
    }
  }
)

userSchema
  .virtual('friendCount')
  //getter
  .get(function () {
    return this.friends.length
  })


userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('user', userSchema)



module.exports = User