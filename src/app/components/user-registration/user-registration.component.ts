import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { ApiSharedService } from '../../services/api-shared.service';
import { ValidatorService } from '../../services/validator.service';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { HeaderSubModule } from '../header-sub/header-sub.module';
import { SellYourProductsModule } from '../sell-your-products/sell-your-products.module';
import { UserRegistrationModule } from './user-registration.module';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { SellYourProductsComponent } from '../sell-your-products/sell-your-products.component';
import { FooterComponent } from '../footer/footer.component';
export interface ICountryAndCode {
  code: string;
  name: string;
}

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    CommonModule,
    HeaderSubComponent,
    SellYourProductsComponent,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
  ],providers:[MessageService],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {
  countries: ICountryAndCode[] = [];
  memberInformationFormGroup: FormGroup | any;
  userType: any;
  isFormvalid = true;
  isRegistrationSuccessful: any = false;
  constructor(private router: Router, private messageService: MessageService, 
    private _apiSharedService: ApiSharedService, private formBuilder: FormBuilder, 
    private validatorService: ValidatorService,
    modalS:NgbModal) { }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.userType = 'Seller';
    this._apiSharedService.getCountryCodes().subscribe(res => {
      this.countries = res;

    },
      error => {
      })


    this.memberInformationFormGroup = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null],
      userType: [this.userType, Validators.required],
      countryCode: ['+971', Validators.required],
      emailid: [null, [Validators.required, Validators.pattern(this.validatorService.emailregex)]],
      companyname: [null],
      address: [null],
      mobileno: [null, [Validators.required]],
      country: [null],
      state: [null],
      city: [null, Validators.required],
      proprietername: [null],
      zipcode: [null],
    });

  }


  checkUserExists(login: any, loginType: any, formcontrol: any) {

    if (this.memberInformationFormGroup.invalid) {
      this.isFormvalid = false;
      return
    }

    this._apiSharedService.checkUserExists(formcontrol == 'mobileno' ? login.substring(1) : login).subscribe(res => {

      if (res != 'NotFound') {

        this.messageService.add({ severity: 'warn', summary: 'User already exists with this ' + (formcontrol == 'emailid' ? 'email id' : 'mobile number') });
        return;
      }
      if (formcontrol == 'mobileno') {
        this.onSubmit();
      }
    })
  }



  onSubmit() {
    let payload = Object()
    payload.firstName = this.memberInformationFormGroup.get('firstname').value
    payload.lastName = this.memberInformationFormGroup.get('lastname').value
    payload.userType = this.memberInformationFormGroup.get('userType').value
    payload.email = this.memberInformationFormGroup.get('emailid').value
    payload.password = 'Yp@12345'
    payload.login = this.memberInformationFormGroup.get('emailid').value
    payload.phone = this.memberInformationFormGroup.get('mobileno').value

    if (this.memberInformationFormGroup.get('userType').value == 'Seller') {
      payload.sellerCompanyType = "Business Manu"
      payload.sellerPropName = this.memberInformationFormGroup.get('companyname').value
      payload.sellerZipCode = this.memberInformationFormGroup.get('zipcode').value
      payload.sellerCompanyAddress = this.memberInformationFormGroup.get('address').value
      payload.sellerCountry = this.memberInformationFormGroup.get('country').value
      payload.sellerState = this.memberInformationFormGroup.get('state').value
      payload.sellerCity = null
      payload.sellerCompanyName = this.memberInformationFormGroup.get('companyname').value
    } else {
      payload.address = this.memberInformationFormGroup.get('address').value
      payload.country = this.memberInformationFormGroup.get('country').value
      payload.state = this.memberInformationFormGroup.get('state').value
      payload.city = null
    }
    payload.langKey = 'en'
    payload.isSocialLogin = false

    payload.status = "Pending for Approval"
    this._apiSharedService.registration(payload).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Registered Successfully. An activation link has been sent to your Email ID.' });
      this.isRegistrationSuccessful = true;
      this.isFormvalid = true;
      this.router.navigate(['/']);
    }, error => {
      if(error.error && error.error.message) {
      const errorMessage = error.error.message;
      this.messageService.add({ severity: 'error', life: 5000, summary: error.error.message , styleClass: 'zbaseindex' });
      } else {
        this.messageService.add({ severity: 'error', life: 5000, summary: 'Something went wrong, Either email Id or Mobile No already exist!' , styleClass: 'zbaseindex' });
      }
      this.isFormvalid = true;
      return;
    })
  }
}
