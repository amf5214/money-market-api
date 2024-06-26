import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb LearnSeries objects
@Entity()
export class LearnSeries {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  title:string;

  @Column()
  description:string;

  @Column()
  coverArtId:string;

  @Column()
  authorName:string;

  @Column()
  authorUserId:number;
  
}