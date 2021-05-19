import IParseMailtemplateDTO from '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}
export default interface IsendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailtemplateDTO;
}
