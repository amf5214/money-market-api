import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb LearnPage objects
@Entity()
export class LearnPage {
  @ObjectIdColumn()
  id:ObjectId;

  @Column()
  title:string;

  @Column()
  description:string;

  @Column()
  coverArtId:number;

  @ObjectIdColumn()
  learningSeriesId:ObjectId;

  @Column()
  orderId:number;

  @Column()
  videoSource:string;
}