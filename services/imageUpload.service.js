import cloudinary from 'cloudinary'

export const ImageUpload = async ( image ) =>{
    // call cloudinary api
    try{
	const result = await cloudinary.uploader.upload(image)
	return result.secure_url
    }catch(err){
	console.log(`cloudinary error: ${err}`)
	return null
    }
}
