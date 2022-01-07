const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./customers.xlsx').then((rows) => {
 console.log(rows);
 console.table(rows);
 
})