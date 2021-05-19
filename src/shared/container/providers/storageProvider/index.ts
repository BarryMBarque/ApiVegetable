import DiskStorageProvider from './implementations/diskStorageProvider';
import S3StorageProvider from './implementations/S3StorageProvider';

export const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};


