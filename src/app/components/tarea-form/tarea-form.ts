import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { TareaCreate } from '../../models/tarea-create.model';


@Component({
  selector: 'app-tarea-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea-form.html',
  styleUrl: './tarea-form.css',
})
export class TareaForm {

  nuevaTarea: TareaCreate ={
    titulo: '',
    descripcion: '',
    completada: false
  };

  constructor(private tareaService: TareaService) {}

  crearTarea(){
    if (!this.nuevaTarea.titulo.trim()){
      alert('El titulo es obligatorio')
        return;
    }

    this.tareaService.crear(this.nuevaTarea).subscribe({
      next: (tarea) => {
        console.log('Tarea creada:', tarea);
        alert('Tarea creada exitosamente');


        this.nuevaTarea = {
        titulo: '',
        descripcion: '',
        completada: false
      };

      window.location.reload();
      },
       error: (err) => {
        console.error('Error al crear la tarea' , err);
         alert('Error al crear tarea')
       }
    });
  }

}
