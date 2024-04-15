// utils/pdfUtils.js
import html2pdf from 'html2pdf.js';

export async function generatePdf(htmlContent, filename) {
    return new Promise((resolve) => {
        html2pdf().from(htmlContent).save(filename, () => {
            
            resolve();
        });
    });
}
