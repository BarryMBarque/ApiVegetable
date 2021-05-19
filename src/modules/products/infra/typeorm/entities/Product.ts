import { Expose } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import uploadConfig from '../../../../../config/upload'


@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  @Column()
  picture: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  discount_coupon: number;

  @Column()
  final_price: number;

  @Column('uuid')
  categoryProduct_id: string;



  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Expose({name:'picture_url'})
  getPicture_url(): string | null{
    if(!this.picture){
      return null;
    }
    switch(uploadConfig.driver){
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.picture}`;
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.picture}`;
      default:
        return null;
    }
  }

  
}
export default Product;
