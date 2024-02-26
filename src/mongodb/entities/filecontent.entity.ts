import { Entity, Column, ObjectIdColumn } from 'typeorm';

// Object type declaration for handling mongodb FileContent objects
@Entity()
export class FileContent {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  renderedData: string;

  @Column()
  text: string;
  
  @Column()
  location: string;

  @Column()
  picDate: string;

}