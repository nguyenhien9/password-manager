import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'roles',
  timestamps: true,
})
export class Role extends Model<Role> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  // define association with user
  @HasMany(() => User)
  users: User[];
}
