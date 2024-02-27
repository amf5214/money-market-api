import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb LearnSection objects
@Entity()
export class LearnSection {
  @ObjectIdColumn()
  id:ObjectId;

  @Column()
  sectionName:string;

  @Column()
  idName:string;

  @Column()
  className:string;

  @Column()
  innerHtml:string;

  @Column()
  styleString:string;

  @Column()
  orderId:number;
}