var Express= require("express");
const { default: Integer } = require("read-excel-file/commonjs/types/Integer");
const readXlsxFile = require('read-excel-file/node')
var router1 =Express.Router();


router1.get("/", function(req,res1,next){
    const schema1={
        'TotalCount':{prop:'TC',type: Integer } ,
        'Not_in_splunk':{prop:'Nis',type: Integer}

        }
    readXlsxFile('./files/NotInSplunk.xlsx', { sheet: 3, schema:schema1 } ).then(rows1=>{res1.send(rows1)})

})




module.exports=router1;