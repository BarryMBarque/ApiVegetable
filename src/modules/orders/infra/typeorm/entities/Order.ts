import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';


@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  discount_coupon: number;

  @Column()
  status: number;

  @Column()
  user_id: string;
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
  @Column()
  state: string;
  @Column()
  city: string;

  @Column()
  CEP: number;

  @Column()
  district: string;

  @Column()
  road: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  
}
export default Order;
