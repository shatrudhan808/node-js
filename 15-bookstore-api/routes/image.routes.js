const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware.js')
const isAdmin = require('../middlewares/admin-middleware.js');
const uploadMiddleware = require('../middlewares/upload-middleware.js');
const {uploadImageController, getallImagesController, deleteImageController} = require('../controllers/image.controller.js');

// upload image
router.post('/upload',authMiddleware, isAdmin, uploadMiddleware.single('image'), uploadImageController);
router.get('/all-images',authMiddleware, getallImagesController);
router.delete('/delete/:id',authMiddleware,isAdmin, deleteImageController);

// get all images

module.exports = router;