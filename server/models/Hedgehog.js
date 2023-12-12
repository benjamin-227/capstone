import mongoose from "mongoose";

const hedgehogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9]*$/
  },
  sex: {
    type: String,
    enum: ["m", "f", "u"],
    default: "u"
  },
  color: {
    type: String,
    enum: [
      "black",
      "grey",
      "brown",
      "caramel",
      "albino",
      "cinnacot",
      "cinnamon",
      "platinum",
      "leusistic",
      "piebald"
    ]
  },
  eyeColor: {
    type: String,
    enum: ["black", "black-red", "red-ruby", "red", "ruby"]
  },
  sire: {
    type: String,
    validate: /^[A-Za-z0-9]*$/
  },
  dam: {
    type: String,
    validate: /^[A-Za-z0-9]*$/
  },
  dob: {
    type: Date
  },
  dod: {
    type: Date
  },
  breeder: {
    type: String,
    validate: /^[A-Za-z0-9]*$/
  },
  owner: {
    type: String,
    validate: /^[A-Za-z0-9]*$/
  }
});

const Hedgehog = mongoose.model("Hedgehog", hedgehogSchema);

export default Hedgehog;
