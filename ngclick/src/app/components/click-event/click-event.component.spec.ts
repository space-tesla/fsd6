import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEventComponent } from './click-event.component';

describe('ClickEventComponent', () => {
  let component: ClickEventComponent;
  let fixture: ComponentFixture<ClickEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickEventComponent]
    });
    fixture = TestBed.createComponent(ClickEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
