import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn } from 'typeorm';

@Entity()
export class LearnSection {
  @ObjectIdColumn()
  id: number;
}