export default interface ICreateCartDTO {
  user_id: string;
  product_id: string;
  order_id?:string;
  name: string;
  description: string;
  picture_url?: string;
  quantity:number;
  val_unit:number;
  total_price:number;
}
