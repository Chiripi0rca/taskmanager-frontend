import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tarea } from "../models/tarea.model";
import { TareaCreate } from "../models/tarea-create.model";
import { TareaUpdate } from "../models/tarea-update.model";
import { environment } from "../../enviroments/environment.prod";


@Injectable({
    providedIn: 'root'
})
export class TareaService{
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    listarTodas(): Observable<Tarea[]>{
        return this.http.get<Tarea[]>(this.apiUrl);
    }

    obtenerPorId(id: number): Observable<Tarea>{
        return this.http.get<Tarea>(`${this.apiUrl}/${id}`);
    }

    crear(tarea: TareaCreate): Observable<Tarea>{
        return this.http.post<Tarea>(this.apiUrl, tarea);
    }

    actualizar(id: number, tarea: TareaUpdate): Observable<Tarea>{
        return this.http.put<Tarea>(`${this.apiUrl}/${id}`, tarea);
    }

    eliminar(id: number) : Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
