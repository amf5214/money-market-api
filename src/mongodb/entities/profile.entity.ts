import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn, Unique } from 'typeorm';

@Entity()
export class Profile {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  bio: string;

  @Column()
  experience: string;

  @Column()
  citystate: string;

  @Column()
  education: string;

  @Column()
  email: string;

  @Column()
  authAccountId: number;
}