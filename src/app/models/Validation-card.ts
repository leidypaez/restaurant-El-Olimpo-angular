export class creditTarget {
  id?: string;
  titular: string;
  numberTarget: string;
  dateExpedition: string;
  cvv: number;
  createDate: Date;
  updateDate: Date;


  constructor(titular:string, numberTarget: string, dateExpedition: string, cvv:number, ) {
    this.titular = titular;
    this.numberTarget = numberTarget;
    this.dateExpedition = dateExpedition;
    this.cvv = cvv;
    this.createDate = new Date();
    this.updateDate = new Date();
  }

}
