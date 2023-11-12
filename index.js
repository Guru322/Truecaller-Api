//Guru ka maal Hai
//https://github.com/Guru322


const truesearch = require('truesearch');
const express = require('express');
const app = express();
const port = 3000;

let totalrequest = 0;

app.get('/', (req, res) => {
    res.json({ Creater: 'Guru', Github: 'https://github.com/Guru322', TotalRequest: totalrequest });
    totalrequest ++;
});

app.get('/search', async (req, res) => {
    const query = req.query.phone;
    const mq = `+${query}`;
    const id = req.query.id;

    const result = await truesearch(mq, id);
    res.json(result);
    totalrequest ++;
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
