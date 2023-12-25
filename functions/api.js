const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/home', (req, res) => {
    res.json({
        'path': 'Home',
        'firstName': 'kim',
        'lastName': 'DongHwi'
    });
});

router.get('/json', (req, res) => {
    res.json({
        'path': 'Json',
        'description': 'this is Json api.'
    });
});

app.use('/api', router);

module.exports.handler = serverless(app);