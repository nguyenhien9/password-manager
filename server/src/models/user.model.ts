import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from './role.model';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    allowNull: false,
  })
  uuid: string;
  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  username: string;
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password_hash: string;
  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    unique: true,
  })
  email: string;
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  first_name: string;
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  last_name: string;
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  phone: string;
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id: number;
  @Column({
    type: DataType.STRING(255),
    unique: true,
  })
  refresh_token: string;
  @BelongsTo(() => Role)
  role: Role;
}
