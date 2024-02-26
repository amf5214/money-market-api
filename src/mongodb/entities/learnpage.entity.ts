import { Entity, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb LearnPage objects
@Entity()
export class LearnPage {
  @ObjectIdColumn()
  id: number;
}