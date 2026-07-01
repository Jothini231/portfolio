const fs = require('fs');
const content = fs.readFileSync('C:/Users/USER/.gemini/antigravity/brain/f54e70b4-f2e8-4a71-abdf-bda148fde1e9/.system_generated/steps/35/content.md', 'utf8');
const items = content.split('<item>');
items.shift();
items.forEach(item => {
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const imgMatch = item.match(/<img[^>]+src="([^"]+)"/);
    if(titleMatch) {
        console.log(titleMatch[1] + ' | ' + (imgMatch ? imgMatch[1] : 'No image'));
    }
});
