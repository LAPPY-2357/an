const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/go', (req, res) => {
    // Renderのようなプロキシ環境では 'x-forwarded-for' からIPを取得します
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    console.log(`【アクセス通知】IPアドレス: ${ip} がリンクを踏みました`);

    // 転送先のURL（例：YouTubeの動画など）
    res.redirect('https://www.youtube.com'); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
