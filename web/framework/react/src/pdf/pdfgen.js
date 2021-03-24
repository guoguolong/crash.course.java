const pdf = require('pdfjs');
const fs = require('fs');

(async () => {
  const doc = new pdf.Document({
    font: require('pdfjs/font/Helvetica'),
    padding: 10
  })
    doc.info.producer = 'pdfjs tests (github.com/rkusa/pdfjs)'
  doc.pipe(fs.createWriteStream('output.pdf'))
  await doc.end()
})();
