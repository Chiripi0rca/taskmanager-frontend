import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaLista } from './tarea-lista';

describe('TareaLista', () => {
  let component: TareaLista;
  let fixture: ComponentFixture<TareaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
