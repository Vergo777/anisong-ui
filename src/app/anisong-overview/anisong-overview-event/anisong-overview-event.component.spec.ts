import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnisongOverviewEventComponent } from './anisong-overview-event.component';

describe('AnisongOverviewEventComponent', () => {
  let component: AnisongOverviewEventComponent;
  let fixture: ComponentFixture<AnisongOverviewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnisongOverviewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnisongOverviewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
