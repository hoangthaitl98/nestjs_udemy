import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('inserted user with user id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('udpate user with id ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('delete user with id ', this.id);
  }
}
