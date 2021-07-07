var Express= require("express");
const { default: Integer } = require("read-excel-file/commonjs/types/Integer");
const readXlsxFile = require('read-excel-file/node')
var router =Express.Router();


router.get("/", function(req,res,next){
    const schema={
        'Remarks':{prop:'Rem',type: String } ,
        'Count':{
            prop:'Count',
            type: Integer
        }

        }
    readXlsxFile('./files/NotInSplunk.xlsx', { sheet: 2, schema:schema } ).then(rows=>{res.send(rows)})

})




module.exports=router;


