import { Entity, PrimaryKey, PrimaryKeyProp, Property, SerializedPrimaryKey } from '@mikro-orm/core';

@Entity()
export class BadNameTest {

  @PrimaryKey({ type: 'ObjectId' })
  _id: any;

  @SerializedPrimaryKey()
  id!: string;

  @Property({ type: 'string' })
  name: any;

  [PrimaryKeyProp]: 'id' | '_id';

}
