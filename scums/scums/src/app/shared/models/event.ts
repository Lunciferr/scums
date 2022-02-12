

export class Event {
    
    eId : number;
    eName: string;
    eEDate: string;
    eSDate: string;
    eSTime: string;
    eETime: string;
    eStatus: string;
    eDescription: string;
    eCategory: string;

    constructor(eId:number,eName:string,eEDate:string,eSDate:string,eSTime:string,eETime:string,eStatus:string,eDescription:string,eCategory:string) {
        this.eId=eId;
        this.eName=eName;
        this.eEDate=eEDate;
        this.eSDate=eSDate;
        this.eSTime=eSTime;
        this.eETime=eETime;
        this.eStatus=eStatus;
        this.eDescription=eDescription;
        this.eCategory=eCategory;
    }
}