export class Productos {
    id:number;
    code:string;
    nombre:string;
    fechaEmbarque:string;
    fechaLlegada:string;
    cantidad:number;
    paisOrigenId:{
        id:number;
    };
    paisDestinoId:{
        id:number;
    }
}
