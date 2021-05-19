import fs from 'fs';
import path from 'path';
import mime from 'mime';
import FileType from 'file-type';
import aws, { S3 } from 'aws-sdk';
import { isWhiteSpaceSingleLine } from 'typescript';
import uploadConfig from '../../../../../config/upload';
import IStorageProvider from '../models/IStorageProvider';

export default class DiskStorageProvider implements IStorageProvider {
  private cliente: S3;

  constructor() {
    this.cliente = new aws.S3({
      region: 'us-east-1',
      accessKeyId: `${process.env.ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.SECRET_ACCESS_KEY}`,
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file);
    const contenType = await FileType.fromFile(originalPath)
    if (!contenType) {
      throw new Error('File not Found');
    }
    const fileContent = await fs.promises.readFile(originalPath);
    await this.cliente
      .putObject({
        Bucket: 'appvegetable',
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType: `${contenType}`,
        ContentDisposition: `inline; Filename=${file}`
      })
      .promise();
    await fs.promises.unlink(originalPath);
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.cliente
      .deleteObject({
        Bucket: 'appvegetable',
        Key: file,
      })
      .promise();
  }
}
