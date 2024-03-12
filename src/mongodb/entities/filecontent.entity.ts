import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

// Object type declaration for handling mongodb FileContent objects
@Entity()
export class FileContent {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  renderedData: string;

  @Column()
  text: string;
  
  @Column()
  location: string;

  @Column()
  picDate: Date;

}