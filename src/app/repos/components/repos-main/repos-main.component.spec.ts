import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposMainComponent } from './repos-main.component';

describe('ReposMainComponent', () => {
  let component: ReposMainComponent;
  let fixture: ComponentFixture<ReposMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReposMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
