const express = require('express')
const app = express()
const port = 3482

const regex= /(?<sub>.+)\.(?<domain>.+\..+)/;
const replace = `https://$<domain>/$<sub>`;

app.get('/', (req, res) => {
    const host = req.get('host');

    res.redirect(host.replace(regex, replace));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
