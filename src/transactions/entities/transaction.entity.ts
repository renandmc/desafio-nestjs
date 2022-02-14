import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'int' })
  account_id: number;

  @Column({ type: 'float' })
  amount: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: string;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at: string;
}
