import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateOrderService from '../../../services/CreateOrderService';
import FindAlllCartService from '../../../../carts/services/FindAllCartService';
import DeleteCartService from '../../../../carts/services/DeleteCartService';
import UpdateProductService from '../../../../products/services/UpdateProductService';
import Cart from '../../../../carts/infra/typeorm/entities/Cart';





export default class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const {
      state,
      city,
      cep,
      district,
      road,
      number,
      complement,} = request.body;
     
    const createOrder = container.resolve(CreateOrderService);
    const findCart = container.resolve(FindAlllCartService);
    const deleteCart = container.resolve(DeleteCartService)
    const updateProduct = container.resolve(UpdateProductService);
   

    const carts = await findCart.execute({user_id});
    
    
    let total = 0;
    
    if(carts){
      carts.forEach(async(element: Cart) => {
        console.log(element.name)
          await createOrder.execute({
          discount_coupon:1,
          total_price: element.total_price,
          status:1,
          user_id: user_id,
          name: element.name,
          description: element.description,
          picture_url: element.picture_url,
          quantity: element.quantity,
          val_unit: element.val_unit,
          state,
          city,
          CEP: cep,
          district,
          road,
          number,
          complement,
      
          
        });
       
       
        });


        
    }
    if(carts){
      carts.forEach(async(element: Cart)=>{
        await updateProduct.execute(element.product_id, -element.quantity)
      })
    }
    if(carts){
      carts.forEach(async(element: Cart) => {
        const id = element.id
        
        await deleteCart.execute(id)
      });

    }
     
 
   
    return response.json({Sucess: 'Orders have been cretaed'});

   

    
  }
}
