import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "Good Morning" and "sun-fill" icon in the morning', () => {
    spyOn(globalThis as any, 'Date').and.returnValue({
      getHours: () => 8,
    });
    const result = component.getGreeting();
    expect(result).toEqual({ icon: 'sun-fill', message: 'Good Morning' });
  });

  it('should return "Good Night" and "moon-foggy-fill" icon in the night', () => {
    spyOn(globalThis as any, 'Date').and.returnValue({
      getHours: () => 2,
    });
    const result = component.getGreeting();
    expect(result).toEqual({ icon: 'moon-foggy-fill', message: 'Good Night' });
  });
});
