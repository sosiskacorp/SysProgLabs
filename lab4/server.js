const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const filePath = 'text.txt'; // Укажите путь к вашему файлу

app.get('/', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка чтения файла');
            return;
        }
        res.send(data);
    });
});

app.post('/', express.text(), (req, res) => {
    fs.appendFile(filePath, req.body, 'utf8', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Ошибка записи в файл');
            return;
        }
        res.send('Данные успешно добавлены в файл');
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
