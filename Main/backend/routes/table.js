var Express= require("express");
const { default: Integer } = require("read-excel-file/commonjs/types/Integer");
const readXlsxFile = require('read-excel-file/node')
var router2 =Express.Router();


router2.get("/", function(req,res2,next){
    const schema2={
        'IP':{prop:'IP',type: String } ,
        'Hostname':{prop:'Hostname',  type: String},
        'OS':{prop:'OS',  type: String},
        'Environment':{prop:'Environment',  type: String},
        'Issues':{prop:'Issues',  type: String},
        'Status':{prop:'Status',  type: String}


        }
    readXlsxFile('./files/NotInSplunk.xlsx', { sheet: 1, schema:schema2 } ).then(rows2=>{res2.send(rows2)})

})

module.exports=router2;