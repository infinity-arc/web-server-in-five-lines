/* THE APP FILE THAT WILL RUN THE SERVER SIDE WEB HOST */
const express = require('express');
express()
    .use('/',express.static('./public')) // this line tells express where to find the files to host
    .listen(3000,()=>console.log('Site is running on port 3000')); // this line starts the server on port 3000 and then logs a line to th console as feedback that the host is running.