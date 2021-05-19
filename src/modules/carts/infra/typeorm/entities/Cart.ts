import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';


@Entity('carts')
class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;
  @Column('uuid')
  product_id: string;
  @Column('uuid')
  order_id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  picture_url: string;
  @Column()
  quantity: number;
  @Column()
  val_unit: number;
  @Column()
  total_price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  
}
export default Cart;
