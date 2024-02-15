export class Person {
  id!: number;
  fullName!: string;
  mail!: string;
  score!: number;
  constructor() {
    if (!this.id) this.id = 1;
    else this.id += 1;
  }
}
