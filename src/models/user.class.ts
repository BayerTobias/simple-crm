export class User {
  firstName: string;
  lastName: string;
  birthDate: any;
  adress: string;
  zipCode: string;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : new Date();
    this.adress = obj ? obj.firstadressName : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      adress: this.adress,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
