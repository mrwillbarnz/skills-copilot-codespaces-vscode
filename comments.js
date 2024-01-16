// Create web server
// 1. Use express to create web server
// 2. Create router object
// 3. Register router object
// 4. Start web server

// 1. Use express to create web server
const express = require('express');
const app = express();

// 2. Create router object
const commentsRouter = require('./routes/commentsRouter.js');
const indexRouter = require('./routes/indexRouter.js');

// 3. Register router object
app.use('/', indexRouter);
app.use('/comments', commentsRouter);

// 4. Start web server
app.listen(3000, () => {
    console.log('Web server running on port 3000');
});