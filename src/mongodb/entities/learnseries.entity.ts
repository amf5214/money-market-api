import { Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class LearnSeries {
  @ObjectIdColumn()
  id: number; 
}