import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWheatherComponent } from './card-wheather.component';

describe('CardWheatherComponent', () => {
  let component: CardWheatherComponent;
  let fixture: ComponentFixture<CardWheatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWheatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWheatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
