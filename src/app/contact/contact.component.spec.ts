/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  it(`should create 'ContactComponent'`, () => {
    expect(component).toBeTruthy();
  });

  it(`should have a text 'Contact page'`, async(() => {
    expect(component.text).toEqual('Contact page');
  }));

  it(`Should set submited to true, after onSubmit`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`Should call onSubmit method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`Form should be invalid`, async(() => {
    component.contactForm.controls.name.setValue('');
    component.contactForm.controls.email.setValue('');
    component.contactForm.controls.text.setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`Form should be Valid`, async(() => {
    component.contactForm.controls.name.setValue('Abhilash');
    component.contactForm.controls.email.setValue('abhilashasokan@icloud.com');
    component.contactForm.controls.text.setValue('Hello World');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
