const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  },

  { 
    campus: [{ type: String, enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon",] }], 
  },

  {
  course: [{ type: String, enum: ["Web Dev", "UX/UI", "Data Analytics"] }],
  },

  {
    image: {
      type: String,
    }
  }

);

const User = model("User", userSchema);

module.exports = User;
