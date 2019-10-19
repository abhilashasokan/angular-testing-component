import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-header',
  template: ''
})
export class HeaderStubComponent {}

@Component({
  selector: 'app-footer',
  template: ''
})
export class FooterStubComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderStubComponent, FooterStubComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
