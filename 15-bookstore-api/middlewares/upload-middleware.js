
const multer = require('multer');
 const path = require('path');

 // set multer storage

    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, path.join(__dirname, '../uploads'))
        },
        filename: function(req, file, cb){
            cb(null, Date.now() + '-' + file.originalname)
        }

    });

    // file filter

    const fileFilter = (req, file, cb)=>{

        if(file.mimetype.startsWith('image')){
            cb(null, true)
        }else{
            cb(new Error('file is not an image'), false)
        }
    };

    // upload middleware

    module.exports = multer({
        storage: storage,
         fileFilter: fileFilter,
        limits: { fileSize: 5 *1024 *1024} // 5MB file size
    })