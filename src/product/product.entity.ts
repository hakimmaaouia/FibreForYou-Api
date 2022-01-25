import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Produit extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  product_id: number;

  @CreateDateColumn()
  created: Date;

  @Column()
  product_code: string;

  @Column()
  product_name: string;

  @Column()
  warranty_period: string;

  @Column()
  product_brand: string;
}
