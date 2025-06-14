const { User, Event } = require("../models/models");
const shortid = require("shortid");

async function login(req, res) {
  const users = await User.findOne({ email: req.body.email });
  if (!users) return res.redirect("/login");
  const eventdata = await data(req.body.email);
  
  return res.render("myevents",{datas:eventdata,user:users});

}

async function data(emails) {
 const users = await User.findOne({email:emails});
    const events = users.events;
    const eventData = [];
    for (i=0;i<events.length;i++){
    const info = await Event.findOne({name:events[i]});
    if (info) {
      eventData.push(info);
    }
    } 

    return eventData;
}

async function signup(req,res){
const referalstring = shortid();

const newuser = await User.create({
  name:req.body.username,
  email:req.body.email,
  password:req.body.password,
  referalID:referalstring,
})

if (req.body['referral-code']) {
  const user = await User.findOneAndUpdate(
    { referalID: req.body['referral-code'] },
    { $inc: { referalcount: 1 } },
    { new: true } 
  );
}

return res.redirect("/login")
}

module.exports = { login,signup };
 