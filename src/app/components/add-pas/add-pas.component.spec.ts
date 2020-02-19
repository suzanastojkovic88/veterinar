import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasComponent } from './add-pas.component';

describe('AddPasComponent', () => {
  let component: AddPasComponent;
  let fixture: ComponentFixture<AddPasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
