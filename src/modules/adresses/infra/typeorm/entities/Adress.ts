import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';


@Entity('adresses')
class Adress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column('uuid')
  user_id: string;



  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  
}
export default Adress;
