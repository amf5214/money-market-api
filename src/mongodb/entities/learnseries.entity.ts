import { Entity, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb LearnSeries objects
@Entity()
export class LearnSeries {
  @ObjectIdColumn()
  id: number; 
}