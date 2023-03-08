const railingsPaint = '../public/static/images/railingsPaint';
const railingsSteel = '../public/static/images/railingsSteel';
const gastronomy = '../public/static/images/gastronomy';
const stairs = '../public/static/images/stairs';

const fs = require('fs');
const os = require('os');

const objects = ['railingsPaint', 'railingsSteel', 'gastronomy', 'stairs'];
const dirArray = [railingsPaint, railingsSteel, gastronomy, stairs];
const fileOpening = 'export const IMAGES = {' + os.EOL;
const fileEnd = '};'
const fileName = './images.js';

fs.unlinkSync(fileName);

fs.appendFileSync(fileName, fileOpening, {flags: 'a+'});

dirArray.forEach((dir, index) => {
    const objOpening = `${objects[index]}: `;
    const objEnd = ',';
    const images = JSON.stringify(fs.readdirSync(dir));
    const text = objOpening + images + objEnd + os.EOL;
    fs.appendFileSync(fileName, text, {flags: 'a+'});
});

fs.appendFileSync(fileName, fileEnd, {flags: 'a+'});

