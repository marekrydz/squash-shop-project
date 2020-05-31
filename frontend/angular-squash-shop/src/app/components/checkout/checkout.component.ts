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
        }),
      billingAddress: this.build.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: [''],
      }),
      shippingAddress: this.build.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: [''],
      }),
      creditCard: this.build.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: [''],
      })
      }
    )
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.controls['customer'].value);
    console.log(this.checkoutFormGroup.controls['customer'].value.firstName)
  }

  copyDataFromBillingToShippingAddress($event: Event) {
    if ($event.currentTarget.checked) {
      this.checkoutFormGroup.controls.shippingAddress.setValue(this.checkoutFormGroup.controls.billingAddress.value);
    } else {
      this.checkoutFormGroup.controls.shippingAddress.reset()
    }
  }
}
