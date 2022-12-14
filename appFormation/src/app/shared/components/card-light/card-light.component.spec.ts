import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLightComponent } from './card-light.component';

describe('CardLightComponent', () => {
  let component: CardLightComponent;
  let fixture: ComponentFixture<CardLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
