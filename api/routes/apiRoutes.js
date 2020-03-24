'use strict';
module.exports = function(app) {
  var chat = require('../controllers/apiController');

  // chat Routes
  app.route('/chatroom')
    .get(chat.list_all_chat)
    .post(chat.send_message);


  app.route('/chatroom/:chatroomId')
    .get(chat.read_a_message)
    .put(chat.update_a_message)
    .delete(chat.delete_a_message);
};

