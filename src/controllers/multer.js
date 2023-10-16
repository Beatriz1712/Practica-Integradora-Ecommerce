import multer from 'multer'
import { __dirname } from '../utils.js'

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, __dirname +'/public/files')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const limits = {
    fileSize: 1024 * 1024 * 50 //tamaño de 5MB
}
export const uploader = multer({storage,limits})