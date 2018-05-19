import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserStoriesComponent } from './delete-user-stories.component';

describe('DeleteUserStoriesComponent', () => {
  let component: DeleteUserStoriesComponent;
  let fixture: ComponentFixture<DeleteUserStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
