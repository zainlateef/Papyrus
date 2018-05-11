import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPicComponent } from './prof-pic.component';

describe('ProfPicComponent', () => {
  let component: ProfPicComponent;
  let fixture: ComponentFixture<ProfPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
