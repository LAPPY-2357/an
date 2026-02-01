const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/go', ...) から以下に変更
app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`アクセスIP: ${ip}`);
    res.redirect('https://www.google.com');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
