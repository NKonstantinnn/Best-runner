BestRunner
==============

An application for athletes “BestRunner” to take into account sports activities

Getting started
---------------

The project was created using the JavaScript library React and its interaction with Redux on the client side and JavaScript runtime environment Node.js on the server side.

### Software

What software do you need to install and how to install them to start a project?

* Install the Node.js source code or a pre-built installer for your platform by [link](https://nodejs.org/en/download/)
* Install docker with [instructions](https://docs.docker.com/install/)
* Install docker compose with [instructions](https://docs.docker.com/compose/install/)

### Configuration

Default database connection uri:
`mongodb://admin:p1230h6t34qd4i7ex@bestrunner_mongodb:27017/aspiritytemplate?authSource=admin`

where
  * username: `admin`
  * password: `p1230h6t34qd4i7ex`
  * host: `bestrunner_mongodb` (it is container name for docker development flow)
  * port: 27017
  * database name: `aspiritytemplate`

You can change containers name in docker-compose file or leave unchanged. If you changed containers name you should update server and client config files

Launch application
------------------

To start the application you need to open a terminal in the project root directory and run the command:

  $ yarn install:all

This command install packages both for server and client
Next to execute command bellow to run docker-compose and dependencies watcher:

  $ yarn start

Finally, you can open a browser on the URL `localhost: 3000`
