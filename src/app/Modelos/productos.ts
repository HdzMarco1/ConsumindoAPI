export class Productos {
    id:number;
    code:string;
    nombre:string;
    fechaEmbarque:string;
    fechaLlegada:string;
    cantidad:number;
    paisOrigenId:{
        nombre:string;
        id:number;
    };
    paisDestinoId:{
        nombre:string;
        id:number;
    }
}
