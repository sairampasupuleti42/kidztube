import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideosListComponent } from './admin-videos-list.component';

describe('AdminVideosListComponent', () => {
  let component: AdminVideosListComponent;
  let fixture: ComponentFixture<AdminVideosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
