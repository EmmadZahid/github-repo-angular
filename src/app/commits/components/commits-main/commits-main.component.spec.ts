import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsMainComponent } from './commits-main.component';

describe('CommitsMainComponent', () => {
  let component: CommitsMainComponent;
  let fixture: ComponentFixture<CommitsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommitsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
