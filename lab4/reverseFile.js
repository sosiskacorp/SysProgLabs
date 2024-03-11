const fs = require('fs');

const filePath = 'text.txt'; // Укажите путь к вашему файлу

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const reversedData = data.split('').reverse().join('');
    fs.writeFile(filePath, reversedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Файл успешно переписан в обратном порядке.');
    });
});
