
const { uploadToCloudinary } = require('../helpers/cloudinery.helper.js');
const Image = require('../models/image.model.js')
const fs = require('fs');
const cloudinery= require('../config/cloudinary.js')

const uploadImageController = async (req, res) => {
    try {
        // check if image is not uploaded
        if(!req.file){
            return res.status(400).json({
                success : false,
                message : 'image is required'
            })
        }
        // upload image to cloudinary
            
        const {url, publicId} = await uploadToCloudinary(req.file.path);
        // save image in database
        const image = new Image({
            url,
            publicId,
            uploadedBy : req.user.userId
        });
        await image.save();
        // delete image from local storage
        fs.unlinkSync(req.file.path);
        // send response
            res.status(201).json({
                success : true,
                message : 'image uploaded successfully',
                data : image
            })

    } catch (error) {
        console.error('error while uploading image :', error);
        res.status(500).json({
            success : false,
            message : 'internal server error'
        })
        
    }
};

const getallImagesController = async (req, res) => {
    try {
        // pagination logic
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;
        const sortBy = req.query.sortBy || 'createdAt';
        const orderBy = req.query.orderBy || 'desc';
        const totalImages = await Image.countDocuments();
        const totalPages = Math.ceil(totalImages / limit);
        const sortObj = {};
        sortObj[sortBy] = orderBy === 'desc' ? -1 : 1;
        // pagination end
        const images = await Image.find().sort(sortObj).skip(skip).limit(limit); // get all images with pagination
        if(!images){
            return res.status(404).json({
                success : false,
                message : 'no images found'
            })
        }else{
            res.status(200).json({
                success : true,
                message : 'all images',
                currentPage : page,
                totalPages : totalPages,
                totalImages : totalImages,
                data : images
            })
        }
        
    } catch (error) {
        console.error('error while getting all images :', error);
        res.status(500).json({
            success : false,
            message : 'internal server error'
        })
    }
}

// delete image controller

const deleteImageController = async (req, res) => {
    try {
        const getImageIdToBeDeleted = req.params.id;
        const userId = req.user.userId;
        const image = await Image.findById(getImageIdToBeDeleted);
        if(!image){
            return res.status(404).json({
                success : false,
                message : 'image not found'
            })
        }
        // check if the image is uploaded by current user
        if(image.uploadedBy.toString() !== userId){
            return res.status(403).json({
                success : false,
                message : 'you are not authorized to delete this image'
            })
        }
        // delete image from cloudinary
        await cloudinery.uploader.destroy(image.publicId);

        // delete image from database
        await Image.findByIdAndDelete(getImageIdToBeDeleted);
        res.status(200).json({
            success : true,
            message : 'image deleted successfully'
        })
        
    } catch (error) {
        console.error('error while getting image :', error);
        res.status(500).json({
            success : false,
            message : 'internal server error'
        })
    }
};

module.exports = {uploadImageController, getallImagesController, deleteImageController};