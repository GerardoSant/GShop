import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShopFormsService } from 'src/app/services/shop-forms.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup : FormGroup;
  

  creditCardYears : number[] = [];
  creditCardMonths : number[] = [];

  constructor(private formBuilder : FormBuilder, private shopFormService:  ShopFormsService ) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer : this.formBuilder.group({
        firstName : [''],
        lastName : [''],
        email : [''],
      }),
      shippingAddress : this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress : this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard : this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    })

    this.shopFormService.getCreditCardMonths().subscribe(
      data => {
        this.creditCardMonths= data;
      }
    );
    this.shopFormService.getCreditCardYears().subscribe(
      data => {
        this.creditCardYears= data;
      }
    );
  }

  onSubmit(){
    console.log(this.checkoutFormGroup.get('customer').value);
  }

  copyShippingToBillingAddress(event){
    if (event.target.checked){
      this.checkoutFormGroup.controls.billingAddress
            .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    } else{
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
  }

}
