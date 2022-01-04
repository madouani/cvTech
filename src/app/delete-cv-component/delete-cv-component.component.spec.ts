import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCvComponentComponent } from './delete-cv-component.component';

describe('DeleteCvComponentComponent', () => {
  let component: DeleteCvComponentComponent;
  let fixture: ComponentFixture<DeleteCvComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCvComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
