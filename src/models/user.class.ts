export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: any;
  address: string;
  zipCode: string;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? this.getFormatedDate(obj.birthDate) : '';
    this.address = obj ? obj.address : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      address: this.address,
      zipCode: this.zipCode,
      city: this.city,
    };
  }

  getFormatedDate(birthDate: number) {
    return new Date(birthDate).toLocaleDateString(undefined, {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }
}
