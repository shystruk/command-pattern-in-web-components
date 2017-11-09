const Express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = Express();

const JOBS_BASE_URL = 'https://jobs.github.com/positions.json?';

app.use(cors());

app.get('/jobs/:queryExpression', function (req, res) {
    fetch(`${JOBS_BASE_URL}${req.params.queryExpression}`)
        .then(response => response.json())
        .then(json => {
            res.send(json);
        });
});

app.use(Express.static('./'));
app.listen(80);
