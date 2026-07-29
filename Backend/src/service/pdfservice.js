const pdfParse = require("pdf-parse");

const fs = require("fs"); //to interact with files and folder in the system

async function pdfService(file) {
    console.log("pdfparse includes")
    console.log(pdfParse)
    try {
        const buffer = fs.readFileSync(file.path);
        //reads data on this particular path

        const data = await pdfParse(buffer); 
        //pdf -parse cannot read a path directly, needs buffer(file.data)
        return data.text;
    } catch (err) {
        throw err;
    }
 }

module.exports = pdfService;