import path from 'path';
import multer, {StorageEngine} from 'multer';
import crypto from 'crypto';
import { request } from 'express';

const tmpFolder = path.resolve(__dirname,'..','..', 'tmp');
interface IUploadConfig{
  driver: 's3'| 'disk';
  tmpFolder: string;
  uploadfolder: string;
  multer: {
    storage:StorageEngine;
  }
  config:{
    disk:{

    };
    aws:{
      bucket: string,
    }
  }
}
export default {
  driver: `${process.env.STORAGE_DRIVER}`,
  tmpFolder: tmpFolder,

  uploadfolder: path.resolve(tmpFolder, 'upload'),
  multer:{
    
    storage: multer.diskStorage({
      destination: tmpFolder,
       filename(request, file, callback){
        const fileHash= crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;
        
        return  callback(null, fileName);
      }
    })
  },
config:{
disk:{},
aws:{
  bucket: 'appvegetable',
}
}
} as IUploadConfig;
