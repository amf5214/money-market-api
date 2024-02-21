import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn } from 'typeorm';

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