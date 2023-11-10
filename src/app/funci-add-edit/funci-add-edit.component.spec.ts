import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunciAddEditComponent } from './funci-add-edit.component';

describe('FunciAddEditComponent', () => {
  let component: FunciAddEditComponent;
  let fixture: ComponentFixture<FunciAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunciAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunciAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
