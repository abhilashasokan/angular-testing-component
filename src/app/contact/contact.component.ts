import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  text = 'Contact page';
  user: any;
  submitted = false;

  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };

  constructor(private contactService: ContactService) {
    this.createForm();
    this.user = contactService.getUser();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      text: new FormControl(this.contact.text, Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    this.submitted = true;
  }
}
