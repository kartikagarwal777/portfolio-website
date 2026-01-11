const fs = require('fs');
const path = require('path');
// pdf-parse may export from the package root or the lib file depending on install
let pdf;
try {
  pdf = require('pdf-parse');
} catch (e) {
  pdf = require('pdf-parse/lib/pdf-parse');
}

async function extractText(pdfPath) {
  // pdfjs-dist provides ESM modules (pdf.mjs). Use dynamic import to load it in CommonJS.
  const pdfjsLib = (await import('pdfjs-dist/build/pdf.mjs'));
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const doc = await loadingTask.promise;
  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((item) => item.str);
    fullText += strings.join(' ') + '\n\n';
  }
  return fullText;
}

(async () => {
  try {
    const pdfPath = path.join(__dirname, '..', 'public', 'Agarwal_Kartik.pdf');
    const text = await extractText(pdfPath);
    const outPath = path.join(__dirname, '..', 'tmp', 'resume_text.txt');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, text, 'utf8');
    console.log('EXTRACTION_OK');
    console.log(text);
  } catch (e) {
    console.error('Extraction failed', e);
    process.exit(1);
  }
})();
