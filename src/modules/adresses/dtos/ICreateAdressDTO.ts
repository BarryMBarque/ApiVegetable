export default interface ICreateAdressDTO {
  state: string;
  city: string;
  cep: number;
  district: string;
  road: string;
  number: number;
  complement?: string;
  user_id?: string;
  order_id?: string;
}
