import IparseMailtemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IparseMailtemplateDTO): Promise<string>;
}
