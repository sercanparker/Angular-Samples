import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCallsListComponent } from './video-calls-list.component';

describe('VideoCallsListComponent', () => {
  let component: VideoCallsListComponent;
  let fixture: ComponentFixture<VideoCallsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCallsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCallsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
