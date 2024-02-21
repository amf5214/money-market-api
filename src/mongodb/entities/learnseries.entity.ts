import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn } from 'typeorm';

@Entity()
export class LearnSeries {
  @ObjectIdColumn()
  id: number; 
}