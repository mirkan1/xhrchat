'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Chatrooms');

exports.list_all_chat = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task)
  });
};


exports.send_message = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_message = function(req, res) {
  Task.findById(req.params.chatroomId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task
      // "<div style='margin: 150px'>" + 
      //   task.user1 + "<br>" +
      //   task.user2 + "<br>" +
      //   '<input type="text" id="send-box" value="">' +
      //   '<div id="send">' +
      //     '<button id="send-btn" style="margin-left: 150px">join</button>' +
      //   '</div>' +
      //   '<script> document.getElementById("send-btn").addEventListener("click", function(){' +
      //     'console.log("user1=" + document.getElementById("send-box").value + "&undefined=");' +
      //     'var data = "user1=" + document.getElementById("send-box").value + "&undefined=";' +
      //     'var xhr = new XMLHttpRequest();' +
      //     'xhr.withCredentials = true;' +
      //     'xhr.addEventListener("readystatechange", function () { if (this.readyState === 4) { console.log(this.responseText); } });' +
      //     'xhr.open("POST", "http://localhost:3000/chatroom");' +
      //     'xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");' +
      //     'xhr.setRequestHeader("cache-control", "no-cache");' +
      //     'xhr.setRequestHeader("Postman-Token", "c2d4de53-1543-4198-85d7-f0994480b143");' +
      //     'xhr.send(data);' +      
      //   '}) </script>' +
      // "</div>"
      );
  });
};


exports.update_a_message = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.chatroomId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_message = function(req, res) {
  Task.remove({
    _id: req.params.chatroomId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};