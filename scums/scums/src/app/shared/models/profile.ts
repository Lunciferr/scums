export class Profile {
    id : number;
    name: string;
    age: number;
    income: number;
    saving: number;
    relationship: string;
    sex: string;
    cor: string;
    dob: string;
    nationality: string;
    point: number;

    constructor(id : number,name: string,age: number,income: number,saving: number,relationship: string,sex: string,cor: string,dob: string,nationality: string,point: number,) {
        this.id = id;
        this.name= name;
        this.age= age;
        this.income= income;
        this.saving= saving;
        this.relationship= relationship;
        this.sex= sex;
        this.cor= cor;
        this.dob= dob;
        this.nationality= nationality;
        this.point= point;
    }
    }