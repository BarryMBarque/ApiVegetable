import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated, BaseEntity}  from 'typeorm';
import User from './User';

@Entity('user_tokens')
class UserToken  {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  @Generated('uuid')
  token: string;
  @CreateDateColumn()
  created_at: Date;
  @Column()
  user_id: string;
  @UpdateDateColumn()
  updated_at: Date;
  }
export default UserToken;

