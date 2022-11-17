export class Wiki {
    id?: number;
    titulo:string;
    imagen: string;
    categoria: string;
    indice: string;
    preambulo: string;
    contenido: string;
    info_general: string;

    constructor(titulo: string, imagen:string,categoria: string, indice: string, preambulo: string, contenido: string, info_general: string){
        this.titulo= titulo;
        this.imagen = imagen;
        this.categoria= categoria;
        this.indice = indice;
        this.preambulo = preambulo;
        this.contenido = contenido;
        this.info_general = info_general;
    }
}
