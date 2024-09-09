import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamedicoComponent } from './paramedico.component';

describe('ParamedicoComponent', () => {
  let component: ParamedicoComponent;
  let fixture: ComponentFixture<ParamedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParamedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParamedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
