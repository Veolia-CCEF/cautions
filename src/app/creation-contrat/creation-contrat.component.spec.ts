import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationContratComponent } from './creation-contrat.component';

describe('CreationContratComponent', () => {
  let component: CreationContratComponent;
  let fixture: ComponentFixture<CreationContratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationContratComponent]
    });
    fixture = TestBed.createComponent(CreationContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
