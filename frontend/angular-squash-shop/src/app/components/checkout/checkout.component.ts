import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  constructor(private build: FormBuilder) {
  }

  ngOnInit() {
    this.checkoutFormGroup = this.build.group({
        customer: this.build.group({
          firstName: [''],
          lastName: [''],
          email: ['']
        })
      }
    )
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.controls['customer'].value);
    console.log(this.checkoutFormGroup.controls['customer'].value.firstName)
  }
}
