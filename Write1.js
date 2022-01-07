function writeToExcel() {
// Requiring module
const reader = require('xlsx')

// Reading our test file
const file = reader.readFile('./customers.xlsx')

// Sample data set
let student_data = [{
	Empid:123476,
    name:"roshan",
    Doj:'13th may'

    
},
{
	Empid:123476,
    name:"radhika",
    Doj:'21th may'
}]

const ws = reader.utils.json_to_sheet(student_data)

reader.utils.book_append_sheet(file,ws,"sheet2")

// Writing to our file
reader.writeFile(file,'./customers.xlsx')

}

export default writeToExcel;