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
  coverArtId:ObjectId;

  @Column()
  authorName:string;

  @Column()
  authorUserId:number;

  @Column()
  learningSeriesId:number;

  @Column()
  orderId:number;
}