import { compare, hash } from 'bcryptjs';
import IHasProvider from '../models/IHashProvider';


export default class BCryptHashProvider implements IHasProvider{
  public async gerenerateHash(payload: string): Promise<string>{
    return hash(payload, 8);

  }
  public async compareHash(payload: string, hashed: string): Promise<boolean>{
    return compare(payload, hashed);

  }

}
