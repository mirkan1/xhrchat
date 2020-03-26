Simple chat based on ajax XMLHttpRequest (XHR)
==========
# http://xhrchat.herokuapp.com/

## About

I was thinking about chats in the browser, how can it work effectively withou websockets? One time I got a great idea. If I use simple ajax and set timeout to big number (for example 20 seconds), I can respond on the server side in the moment when I have new message for client. Great idea, so I started work and after +-2 hours I had first working prototype. So I invest few more hours to programming this thing and created this!

## Usage

Tested with node.js
#### Server:
 * ``npm start```
#### Client:
 * Open your browser, write your IP:3000 and start chatting!

PIC1
![alt text](https://github.com/mirkan1/xhrchat/blob/master/frontend/assets/xhr2.PNG?raw=true)

PIC2
![alt text](https://github.com/mirkan1/xhrchat/blob/master/frontend/assets/xhr3.PNG?raw=true)
