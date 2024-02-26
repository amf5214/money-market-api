import { Entity, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb LearnSection objects
@Entity()
export class LearnSection {
  @ObjectIdColumn()
  id: number;
}