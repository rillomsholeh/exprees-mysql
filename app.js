const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRouter);

app.listen(3000, () => {
    console.log('Start');
})