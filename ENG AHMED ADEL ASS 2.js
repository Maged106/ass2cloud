//ASS
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully', receivedData: req.body });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
