export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public image:File, public completeDate:Date, public  clickCounter:number, public  clickCounter1:number){
      this.showDescription=false;
    }
  }