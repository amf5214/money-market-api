import { Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class LearnSection {
  @ObjectIdColumn()
  id: number;
}