const { User, Event } = require("../models/models");

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

module.exports = { login };
