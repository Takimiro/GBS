import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item";
import { Storage } from "./Storage";


@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name?: string;


  @OneToMany(() => Storage, storage => storage.user)
  storages?: Storage[];

  @OneToMany(() => Item, item => item.user)
  items?: Item[];
}

export { User };