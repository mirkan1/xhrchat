'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatRoom = new Schema({
  // chatroom_name: {
  //   type: String,
  //   default: Math.random() * 10000000000000000
  // },
  userName: {
    type: String,
    required: 'Whats your username'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  message: {
    type: String,
    required: "what is your message?"
  }
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // }
});

module.exports = mongoose.model('Chatrooms', ChatRoom);
