export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: any;
  adress: string;
  zipCode: string;
  city: string;
  id: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.adress = obj ? obj.firstadressName : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.id = '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      adress: this.adress,
      zipCode: this.zipCode,
      city: this.city,
      id: this.id,
    };
  }
}
