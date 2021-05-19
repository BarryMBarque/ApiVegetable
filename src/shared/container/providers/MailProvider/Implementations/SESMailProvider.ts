import aws from 'aws-sdk';
import nodemailer, { Transporter } from 'nodemailer';
import { inject, injectable } from 'tsyringe';
import mailConfig from '../../../../../config/mail';
import IsendMailDTO from '../dtos/ISendMailDTO';
import IMailTemplateProvider from '../../MailTemplateProvider/models/IMailTemplateProvider';
import IMailProvider from '../models/IMailProvider';

@injectable()
export default class SESMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01',
        accessKeyId: 'AKIAYC2AS4NE4MRLUQVW',
        secretAccessKey: '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',
        region: 'us-east-1',
        //  accessKeyId:
        // accessSecretKey:
      }),
    });
  }

  public async sendMail({
    to,
    subject,
    from,
    templateData,
  }: IsendMailDTO): Promise<void> {
    const { name, email } = mailConfig.defaults.from;

    await this.client.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email || email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
  }
}
