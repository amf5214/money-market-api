import { Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class LearnPage {
  @ObjectIdColumn()
  id: number;
}