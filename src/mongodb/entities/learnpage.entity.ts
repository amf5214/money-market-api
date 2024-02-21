import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn } from 'typeorm';

@Entity()
export class LearnPage {
  @ObjectIdColumn()
  id: number;
}