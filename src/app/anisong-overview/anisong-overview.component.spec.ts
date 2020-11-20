import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnisongOverviewComponent } from './anisong-overview.component';

describe('AnisongOverviewComponent', () => {
  let component: AnisongOverviewComponent;
  let fixture: ComponentFixture<AnisongOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnisongOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnisongOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
