# Project Title

GAB (Gift of Asynchronous Babble) Client

## Getting Started

Everything that is needed to run the server (aside from the dependencies)

## Installing and Use

`npm install`
`node .`
`npm install inquirer` -- terminal tookit

To use specific host/port number
`node . \[port\] \[host\]`

Example of a server running on port 4931 and address 10.226.9.220
`node . 4931 10.226.9.220`

## Built With

- [ws](https://github.com/websockets/ws) - Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js
- [Express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node.
-[Inquirer](https://github.com/SBoudrias/Inquirer.js/)) - A collection of common interactive command line user interfaces.

##How to run the code CLIENT SIDE 
1.Run the server on terminal first by `node index`

2. Run the client on another terminal window `node client`
3. The client will ask for a user name
4. Then,ask you what who you want to send message to (the To field)
   5: Then, ask for the "kind" of service
5. Lastly for a message
6. After all this is complete press ctrl-z (mac) to the programm if you wish so
