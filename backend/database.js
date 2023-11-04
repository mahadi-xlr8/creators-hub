const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const getToday = require("./helper/getToday");
mongoose
  .connect("mongodb://localhost/creators-hub")
  .then(() => console.log("connected to the database!"))
  .catch((err) => console.log(err));

const CreatorSchema = new mongoose.Schema({
  password: {
    type: String,
    minlength: 6,
    maxlength: 1024,
  },
  email: {
    type: String,
    unique: true,
    maxlength: 100,
  },
  country: {
    type: String,
    maxlength: 50,
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
  },
  age: Number,
  title: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  profileImg: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  price: Number,
  tags: {
    type: [String],
    maxlength: 255,
  },
  platforms: [
    {
      name: String,
      link: String,
    },
  ],
  accessToken: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  joined: {
    type: String,
    minlength: 5,
    maxlength: 1000,
    default: getToday(),
  },
  contactLink: {
    type: String,
    minlength: 5,
    maxlenght: 500,
  },
  description: {
    type: String,
    minlength: 5,
    maxlenght: 1000,
  },
  profileComplete: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    minlength: 3,
    maxlenght: 10,
  },
});
CreatorSchema.methods.genToken = function () {
  const jwtKey = "sexy";
  return jwt.sign({ id: this._id, role: "creator" }, jwtKey);
};

const Creator = mongoose.model("creators", CreatorSchema);

const brandSchema = new mongoose.Schema({
  password: {
    type: String,
    minlength: 6,
    maxlength: 1024,
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  country: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
  },
  contactLink: {
    type: String,
    maxlength: 1000,
  },
  accessToken: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  joined: {
    type: String,
    minlength: 5,
    maxlength: 1000,
    default: getToday(),
  },
  profileImg: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },
  profileComplete: {
    type: Boolean,
    default: false,
  },
});

brandSchema.methods.genToken = function () {
  const jwtKey = "sexy";
  return jwt.sign({ id: this._id, role: "brand" }, jwtKey);
};

const Brand = mongoose.model("brands", brandSchema);

const JobSchema = new mongoose.Schema(
  {
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "brands",
      maxlength: 300,
    },
    brand: {
      type: String,
      required: true,
      maxlenght: 100,
    },
    title: {
      type: String,
      required: true,
      maxlength: 500,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    followers: {
      type: String,
      maxlength: 100,
    },
    country: {
      type: String,
      required: true,
      maxlength: 100,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      required: true,
      maxlength: 50,
    },
    paid: {
      type: Boolean,
      required: true,
    },
    benefit: {
      type: String,
      require: true,
      maxlength: 500,
    },
    images: {
      type: [String],
      required: true,
      maxlength: 500,
    },
    platform: {
      type: String,
      require: true,
      maxlength: 500,
    },
    content: {
      type: String,
      required: true,
      maxlength: 50,
    },
    added: {
      type: String,
      minlength: 5,
      maxlength: 1000,
      default: getToday(),
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);

const Collaboration = mongoose.model(
  "collaboration",
  new mongoose.Schema({
    creator: {
      name: String,
      id: String,
    },
    brand: {
      name: String,
      id: String,
      comment: String,
    },
    post: {
      platform: String,
      link: String,
      reach: Number,
    },
    paid: {
      amount: Number,
      currency: String,
    },
    platfomrs: [String],
  })
);

const NotificationSchema = new mongoose.Schema(
  {
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "brands",
      maxlength: 100,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "creators",
      maxlength: 100,
    },
    senderName: {
      type: String,
      required: true,
      maxlenght: 100,
    },
    senderProfile: {
      type: String,
      required: true,
      maxlenght: 100,
    },
    clickLink: {
      type: String,
      required: true,
      maxlenght: 100,
    },
    seen: {
      type: Boolean,
      default: false,
      required: true,
    },
    time: {
      type: String,
      required: true,
      maxlength: 100,
    },
    message: {
      type: String,
      required: true,
      maxlenght: 100,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobs",
      maxlength: 100,
    },
    senderImg: {
      type: String,
      required: true,
      maxlength: 500,
    },
  },
  { timestamps: true }
);
const Notification = mongoose.model("notifications", NotificationSchema);

module.exports.Creator = Creator;
module.exports.Brand = Brand;
module.exports.Job = Job;
module.exports.Notification = Notification;
