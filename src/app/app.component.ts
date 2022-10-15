import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ContactService } from './contact.service';




@Component({
  selector: 'app-contact-form',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactFormComponent implements OnInit {
  title = 'Portfolio';
  submitted = false;
  emailForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 
  onSubmit() {
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.emailForm.invalid) {
      return;
    }
 
    alert('SUCCESS!!');
  }
}
