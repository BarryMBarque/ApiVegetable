export default interface ICreateProductDTO {
  name: string;
  picture: string;
  quantity: number;
  description: string;
  price: number;
  discount_coupon?: number;
  final_price: number;
  categoryProduct_id: string;


}
