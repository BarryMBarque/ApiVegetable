export default interface ICreateOrderDTO {
  discount_coupon?: number;
  total_price: number;
  status: number;
  user_id: string;
  name: string;
  description: string;
  picture_url?: string;
  quantity:number;
  val_unit:number;
  state: string;
  city: string;
  CEP: number;
  district: string;
  road: string;
  number: number;
  complement?: string;


}
