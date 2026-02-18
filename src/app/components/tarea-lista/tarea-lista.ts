import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { TareaUpdate } from '../../models/tarea-update.model';
import { Tarea } from '../../models/tarea.model';


@Component({
  selector: 'app-tarea-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea-lista.html',
  styleUrl: './tarea-lista.css',
})
export class TareaLista implements OnInit {
     tareas: Tarea[] = [];
     cargando: boolean = true;

     constructor(private tareaService: TareaService) {}

     ngOnInit() {
       this.cargarTareas();
     }

     cargarTareas(){ 
      this.cargando =true;
      this.tareaService.listarTodas().subscribe({
        next: (tareas) => {
          this.tareas = tareas;
          this.cargando =false;
        },

        error: (err) => {
          console.error('Error al cargar las tareas:', err);
          alert('Error al cargar las tareas')
          this.cargando =false;
        }
      });
     }
      toggleCompletada(tarea: Tarea){
        this.tareaService.actualizar(tarea.id, {
          completada: !tarea.completada
        } as TareaUpdate).subscribe({
          next: (tareaActualizada) =>{
             const index =  this.tareas.findIndex( t=> t.id === tarea.id);
             if (index !== -1){
              this.tareas[index] = tareaActualizada;
             }
          },
          error: (err) => {
            console.error('Error al actualizar la tarea:', err);
            alert('Error al actualizar la tarea');
          }
        });
      }

    eliminarTarea(id: number) {
      if(!confirm('Estas seguro de eliminar esta tarea?')){
        return;
      }
      this.tareaService.eliminar(id).subscribe({
        next:() => {
          this.tareas = this.tareas.filter(t=>t.id !== id);
          alert('Tarea eliminada')
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Error al eliminar la tarea');
        }
      });
    }
}
