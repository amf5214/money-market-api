import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb LearnSeries objects
@Entity()
export class LearnSeries {
  @ObjectIdColumn()
  id: ObjectId; 

  @Column()
  title:string;

  @Column()
  description:string;

  @Column()
  coverArtId:number;

  @Column()
  authorName:string;

  @Column()
  authorUserId:number;
  
}