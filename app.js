const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRouter);

app.listen(3002, () => {
    console.log('the project run onto port 3002 has started');
})