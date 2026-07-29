const pdfParse = require("pdf-parse");

const fs = require("fs");

async function pdfService(file) {
    console.log("pdfparse includes")
    console.log(pdfParse)
    try {
        const buffer = fs.readFileSync(file.path);

        const data = await pdfParse(buffer); 
        //pdf -parse cannot read a path directly, needs buffer

        return data.text;
    } catch (err) {
        throw err;
    }
 }

module.exports = pdfService;