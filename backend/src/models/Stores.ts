import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./Products";

export interface IStore {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  token?: string;
}

@Entity()
class Stores implements IStore {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;
  
  @Column()
  password?: string;

  @Column()
  email?: string;

  @OneToMany(() => Products, product => product.store)
  products?: Stores[];
}

export { Stores };
