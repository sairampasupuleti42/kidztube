import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoCategoriesComponent } from './admin-video-categories.component';

describe('AdminVideoCategoriesComponent', () => {
  let component: AdminVideoCategoriesComponent;
  let fixture: ComponentFixture<AdminVideoCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideoCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideoCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
