import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Stores } from './Stores';

export interface IProduct {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  token?: string;
  weight?: string;
  classification?: string;
  description?: string;
  store?: Stores;
  store_id?: number;
  url?: string;
  catergory?: string;
  price?:string;
}

@Entity()
class Products implements IProduct {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;
  
  @Column()
  material?: string;

  @Column()
  weight?: string;

  @Column()
  classification?: string;

  @Column()
  description?: string;

  @Column()
  url?: string;

  // possivel problema snackcase
  @Column()
  storeId?: number;
  
  @Column()
  category?: string;

  @Column()
  price?:string;

  @ManyToOne(() => Stores, store => store.products)
  store?: Stores;
}

export { Products };

