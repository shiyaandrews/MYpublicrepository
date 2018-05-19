import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserStoriesComponent } from './show-user-stories.component';

describe('ShowUserStoriesComponent', () => {
  let component: ShowUserStoriesComponent;
  let fixture: ComponentFixture<ShowUserStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
