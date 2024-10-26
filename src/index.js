const express = require('express');
const apiRouter = require('../src/api/index');
const morgan = require('morgan');
const cors = require('cors');
const celebrateErrorHandler = require('./utils/celebrateErorr'); 


const app = express();
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', apiRouter);

app.use(celebrateErrorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
