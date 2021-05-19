import handlebars from 'handlebars';
import fs from 'fs';
import IParseMailtemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailProvider implements IMailTemplateProvider {
  public async parse({
    file,
    varaibles,
  }: IParseMailtemplateDTO): Promise<string> {
    const templateFileCOntent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileCOntent);
    return parseTemplate(varaibles);
  }
}
export default HandlebarsMailProvider;
