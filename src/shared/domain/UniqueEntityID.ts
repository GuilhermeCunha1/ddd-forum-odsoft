import { v4 as uuidv4 } from 'uuid'; // Nova forma de importação
import { Identifier } from './Identifier';

export class UniqueEntityID extends Identifier<string | number> {
  constructor(id?: string | number) {
    super(id ? id : uuidv4()); // Usa uuidv4() no lugar de uuid()
  }
}
