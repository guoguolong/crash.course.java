import React, {useState, useEffect} from 'react';
const pdf = require('pdfjs')
const fs = require('fs')

export default function() {
  const doc = new pdf.Document({
  font:    require('pdfjs/font/Helvetica'),
  padding: 10
})
doc.pipe(fs.createWriteStream('output.pdf'))  
  return (
    <div>
    Hello PDF
    </div>
  );
}