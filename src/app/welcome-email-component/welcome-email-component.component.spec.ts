import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEmailComponentComponent } from './welcome-email-component.component';

describe('WelcomeEmailComponentComponent', () => {
  let component: WelcomeEmailComponentComponent;
  let fixture: ComponentFixture<WelcomeEmailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeEmailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeEmailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
