import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TareaLista } from "./components/tarea-lista/tarea-lista";
import { TareaForm } from "./components/tarea-form/tarea-form";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, TareaLista, TareaForm],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Task Manager';
}