
export class TripModel {
  constructor(
    public id:number,
    public title:string, 
    public imgUrl:string, 
    public cost:number, 
    public details:string[]){}
}
