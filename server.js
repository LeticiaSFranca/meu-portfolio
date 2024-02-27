const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

let initialPath = path.join(__dirname, 'public');
let app = express();
app.use(express.static(initialPath));

app.get('/medicina-veterinaria', (req, res) => {
    res.sendFile(path.join(initialPath, '/veterinaria/index.html'))
});

app.get('/design', (req, res) => {
    res.sendFile(path.join(initialPath, '/designer/index.html'))
});

app.get('/desenvolvimento-web', (req, res) => {
    res.sendFile(path.join(initialPath, '/front-end/index.html'))
});

app.listen(port, () => {
    console.log(`Server start up on port ${port}!`)
});