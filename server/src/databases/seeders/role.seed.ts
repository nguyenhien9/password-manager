import { Injectable } from '@nestjs/common';
import { RoleEnum } from 'src/enums/RoleEnum';
import { Role } from 'src/models/role.model';

@Injectable()
export class RoleSeeder {
  async run() {
    for (const [name, id] of Object.entries(RoleEnum)) {
      if (!(await Role.findByPk(id))) {
        await Role.create({ id, name });
      }
    }
  }
}
