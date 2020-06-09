import { ObjectId } from 'mongodb';
import { Entity, ManyToOne, OneToOne, PrimaryKey, PrimaryKeyProp, Property, SerializedPrimaryKey } from '@mikro-orm/core';
import FooBar from './FooBar';
import { Book } from './Book';

@Entity()
export class FooBaz {

  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  name!: string;

  @OneToOne(() => FooBar, bar => bar.baz, { eager: true })
  bar!: FooBar;

  @ManyToOne(() => Book, { eager: true })
  book!: Book;

  [PrimaryKeyProp]: '_id' | 'id';

}
