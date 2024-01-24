import {  Injectable  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ApiSharedService } from './api-shared.service';
import { AuthService } from './auth.service';
import { EventManagementService } from './event-management.service';

import { StorageService } from './storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



export interface ICountryAndCode {
  code: string;
  name: string;
}

enum LOGIN_METHOD {
  WHATSAPP = "WHATSAPP",
  SMS = "SMS",
  FACEBOOK = "FACEBOOK",
  GMAIL = "GMAIL",
  EMAIL = "EMAIL",
  FORGOT_PASSWORD = "FORGOT_PASSWORD"
}
  
  @Injectable({
    providedIn: 'root',
  })
 
  export class PostRequirementServiceService {
  
   
  countries: ICountryAndCode[] = [];
  productSellerForm: FormGroup | any;
  prodDetailFrom: FormGroup | any;

  spannerval=false;
  searchText: any;
  dialogInputData: any;
  dialogRef: any;

  units: any;
  isFormvalid = true;
  isVerification = false;
  loginMethod = LOGIN_METHOD.WHATSAPP;
  public loginSubscriptionInit?: Subscription;
  public loginSubscriptionEnd?: Subscription;

  constructor(private authService: AuthService,
    //public dialog: MatDialog,
    //private loginDialogService: LoginDialogService,
    private formBuilder: FormBuilder,
    private _apiSharedService: ApiSharedService,
    private messageService: MessageService,
    private storageService: StorageService,
    private modalService: NgbModal,
    private eventService: EventManagementService) { }

  openRequirementDialog(product?: any) {
    this.initializeRequirementForm(product);
    // const dialogRef = this.dialog.open(componetaname,
    //   {
    //     width: 'auto', //1050px
    //     height: 'auto' //675px
    //   });

    // dialogRef.afterClosed().subscribe((result: any) => {
    // });
  }

  initializeRequirementForm(product?: any) {
    this.isVerification = false;
    this.isFormvalid = true;
    if (!this.units) {
      this._apiSharedService.getUnits().subscribe(res => {
        this.units = res;
      },
        error => {
        })
    }

    if (this.countries.length == 0) {
      this._apiSharedService.getCountryCodes().subscribe(res => {
        this.countries = res;
        this.initialize(product);
      },
        error => {
        })
    } else {
      this.initialize(product);
    }
  }

  initialize(product?: any) {
    this.dialogInputData = product;
    let productName = this.getProductName(product);
    this.productSellerForm = this.formBuilder.group({
      'productName': [productName, [Validators.required]],
      'requirement': ["I am interested in " + (productName ? productName : '')],
      'quantity': [null],
      'quantityUnit': ['Piece'],
      'contactNumber': [this.getMobileNumber(), Validators.required],
      'countryCode': [this.getCountryCode()],
      'frequencytype': ['onetime', Validators.required]
    });
    this.loginSubscriptionInit = this.eventService.loginEventListener().subscribe(isLoggedInFlag => {
      if (isLoggedInFlag) {
        this.productSellerForm.controls['contactNumber'].setValue(this.getMobileNumber());
        this.productSellerForm.controls['countryCode'].setValue(this.getCountryCode());
        if (this.loginSubscriptionInit) this.loginSubscriptionInit.unsubscribe();
      }
    })
    this.prodDetailFrom = this.formBuilder.group({
      'description': [],
      'enquirerEmail': ['',Validators.required],
      'mobileNo': ["",Validators.required],
      'checkbox': [""],
      'noCode': ["+91"],
      'frequencytype': ['onetime']
    })
  }

  getMobileNumber() {
    let mobile = null;
    if (this.authService.loggedInUserDetails && this.authService.loggedInUserDetails.phone && !this.authService.loggedInUserDetails.phone.startsWith('+')) {
      mobile = '+' + this.authService.loggedInUserDetails.phone;
    } else if (this.authService.loggedInUserDetails && this.authService.loggedInUserDetails.phone && this.authService.loggedInUserDetails.phone.startsWith('+')) {
      let countryCode = this.getCountryCode();
      mobile = this.authService.loggedInUserDetails.phone.slice(countryCode.length);
    }
    return mobile;
  }

  getCountryCode() {
    let countryCode = null;
    if (this.authService.loggedInUserDetails && this.authService.loggedInUserDetails.phone && this.authService.loggedInUserDetails.phone.startsWith('+')) {
      for (let country of this.countries) {
        if (this.authService.loggedInUserDetails.phone.startsWith(country.code)) {
          countryCode = country.code;
          break;
        }
      }
    }
    countryCode = countryCode ? countryCode : '+971';
    return countryCode;
  }

  getProductName(product: String) {
    let productName = null;
    //if (this.dialogInputData && this.dialogInputData.productName) {
    //productName = this.dialogInputData.productName;
    //} else
    if (!product) {
      productName = this.searchText ? this.searchText.split('-').join(' ') : '';
    } else { productName = product; }
    return productName;
  }

  onClickSubmitRequirement() {
   
    console.log('click-----');
    console.log(this.productSellerForm.value.frequencytype);

    if (this.productSellerForm.invalid && this.prodDetailFrom.invalid) {
      this.isFormvalid = false;
      return;
    }
    console.log("-----1----")
    console.log(this.authService.loggedInUserDetails)
    if (this.authService.loggedInUserDetails) {
      this.spannerval=true;

      if (this.dialogInputData) {
        this.spannerval=true;
        let payload = {
          requirementDetails: this.productSellerForm.value.requirement,
          buyer: { id: this.authService.loggedInUserDetails.id },
          product: { id: this.dialogInputData.id },
          quantity: this.productSellerForm.value.quantity,
          unit: this.productSellerForm.value.quantityUnit,
          sellers: this.dialogInputData.seller && this.dialogInputData.seller.id ? [{ id: this.dialogInputData.seller.id }] : null,
          usage: this.productSellerForm.value.requirement,
          status: "Pending for Approval",
          frequencytype: this.productSellerForm.value.frequencytype
        };
        console.log(payload.frequencytype);
        this._apiSharedService.postRequirements(payload)
          .subscribe(res => {
            this.messageService.add({ severity: 'success', summary: 'Enquiry Posted Successfully. Thank You!' });
            this.initializeRequirementForm();
            alert("Post Requirement Success");
            this.spannerval=false;
            if (this.dialogRef) this.dialogRef.close();
          },
            error => {
              this.messageService.add({ severity: 'error', summary: 'Unable to post the enquiry. Kindly contact the admin' });
              if (this.dialogRef) this.dialogRef.close();
              alert("Something Error");
              this.spannerval=false;
            });
      } else if (this.prodDetailFrom.valid) {
        {
          this.spannerval=true;
          console.log("-----2----")
          let payload = {

            enquirerName: (this.authService.loggedInUserDetails.firstName ? this.authService.loggedInUserDetails.firstName : '') +
              '' + (this.authService.loggedInUserDetails.lastName ? this.authService.loggedInUserDetails.lastName : ''),
            enquirerContactNumber: this.prodDetailFrom.value.noCode + this.prodDetailFrom.value.mobileNo,
            enquirerEmail: this.prodDetailFrom.value.enquirerEmail,
            enquiryMessage: this.prodDetailFrom.value.description,
            productName: "",
            quantity: "",
            unit: "",
            buyer: { id: this.authService.loggedInUserDetails.id },
            status: 'New',
            frequencytype: "one Time"
          }
          this._apiSharedService.postEnquiries(payload).subscribe(r => {
            this.messageService.add({ severity: 'success', summary: 'Enquiry Posted Successfully. Thank You!' });
            this.initializeRequirementForm();
            // alert("Post Requirement Success");
            this.spannerval=false;
            if (this.dialogRef) this.dialogRef.close();
          },
            error => {
              // alert("Something Error");
              this.messageService.add({ severity: 'warning', summary: 'Unable to post your Query. Please contact admin.' });
              if (this.dialogRef) this.dialogRef.close();
            });
        }
      }
      else {
        this.spannerval=true;
        console.log("-----3----")
        let payload = {
          enquirerName: (this.authService.loggedInUserDetails.firstName ? this.authService.loggedInUserDetails.firstName : '') +
            '' + (this.authService.loggedInUserDetails.lastName ? this.authService.loggedInUserDetails.lastName : ''),
          enquirerContactNumber: this.productSellerForm.value.contactNumber ? this.productSellerForm.value.countryCode + this.productSellerForm.value.contactNumber : null,
          enquirerEmail: this.authService.loggedInUserDetails.email && this.authService.loggedInUserDetails.email.trim() != '' ? this.authService.loggedInUserDetails.email : null,
          enquiryMessage: this.productSellerForm.value.requirement,
          productName: this.productSellerForm.value.productName,
          quantity: this.productSellerForm.value.quantity,
          unit: this.productSellerForm.value.quantityUnit,
          buyer: { id: this.authService.loggedInUserDetails.id },
          status: 'New',
          frequencytype: this.productSellerForm.value.frequencytype
        }
        this._apiSharedService.postEnquiries(payload).subscribe(r => {
          this.messageService.add({ severity: 'success', summary: 'Enquiry Posted Successfully. Thank You!' });
          this.initializeRequirementForm();
          this.spannerval=false;
          // alert("Post Requirement Success");
          if (this.dialogRef) this.dialogRef.close();
        },
          error => {
            // alert("Something Error");
            this.messageService.add({ severity: 'warning', summary: 'Unable to post your Query. Please contact admin.' });
            if (this.dialogRef) this.dialogRef.close();
          });
      }
    } else {
      this.spannerval=true;
     
      if (this.dialogRef) this.dialogRef.close();
      //  this.loginDialogService.openLoginDialog('Buyer', this.productSellerForm.value.countryCode + this.productSellerForm.value.contactNumber);

      if (this.prodDetailFrom.value.mobileNo) {
        this.spannerval=true;
        console.log("first OTP calling .. " );
        this._apiSharedService
          .sendOtp(this.prodDetailFrom.value.noCode + this.prodDetailFrom.value.mobileNo, this.loginMethod)
          .subscribe(
            (res) => {
              // let that = this;
              // setTimeout(function(){
              //   if(resend) {
              //     that.countdown.restart();
              //   }
              //   that.countdown.begin();
              // },1000)
             
              this.isVerification = true;
              //this.spannerval=false;
              console.log("OTP Success first if");
              //alert("OTP Success");
              this.messageService.add({
                severity: "success",
                summary:
                  'Otp Sent successfully.',
              });
            },
            (error) => {
              //this.spannerval=false;

              if (error && error.error && error.error.errorKey == 'otpexists') {
                this.isVerification=true;
                this.messageService.add({
                  severity: "warn",
                  summary:
                    "OTP Already generated for the phone",
                    
                });
                this.isVerification = true;
              } else if (this.loginMethod == LOGIN_METHOD.WHATSAPP && error && error.error && (error.error.title == 'ContactNo not Valid.' || error.error.title == 'Could Not Send Whatsapp OTP')) {
                this.showConfirm();
              } else if (error && error.error && error.error.title) {
                this.messageService.add({
                  severity: "error",
                  summary: "Failed to send OTP",
                  detail: error.error.title,
                });
              } else {
                this.messageService.add({
                  severity: "error",
                  summary: "Failed to send OTP",
                  detail: "Please enter a valid mobile number.",
                });
              }



            });
console.log("hello");
        this.loginSubscriptionEnd = this.eventService.loginEventListener().subscribe(isLoggedInFlag => {
          console.log(this.loginSubscriptionEnd)
          if (isLoggedInFlag) {
            this.onClickSubmitRequirement();
            if (this.loginSubscriptionEnd) this.loginSubscriptionEnd.unsubscribe();
          }
        })
        console.log("welcome")
      } else {
        console.log("else send otp " + this.loginMethod);
        this._apiSharedService
          .sendOtp(this.productSellerForm.value.countryCode + this.productSellerForm.value.contactNumber, this.loginMethod )
          .subscribe(
            (res) => {
              // let that = this;
              // setTimeout(function(){
              //   if(resend) {
              //     that.countdown.restart();
              //   }
              //   that.countdown.begin();
              // },1000)
              this.isVerification = true;
              console.log("OTP Success else");
              //alert("OTP Success");
              this.messageService.add({
                severity: "success",
                summary:
                  'Otp Sent successfully.',
              });
            },
            (error) => {


              if (error && error.error && error.error.errorKey == 'otpexists') {

                this.messageService.add({
                  severity: "warn",
                  summary:
                    "OTP already generated for this number!",
                });
              } else if (this.loginMethod == LOGIN_METHOD.WHATSAPP && error && error.error && (error.error.title == 'ContactNo not Valid.' || error.error.title == 'Could Not Send Whatsapp OTP')) {
                this.showConfirm();
              } else if (error && error.error && error.error.title) {
                this.messageService.add({
                  severity: "error",
                  summary: "Failed to send OTP",
                  detail: error.error.title,
                });
              } else {
                this.messageService.add({
                  severity: "error",
                  summary: "Failed to send OTP",
                  detail: "Please enter a valid mobile number.",
                });
              }



            });


            console.log("else")
        this.loginSubscriptionEnd = this.eventService.loginEventListener().subscribe(isLoggedInFlag => {
          console.log(this.loginSubscriptionEnd)
          console.log(isLoggedInFlag);
          if (isLoggedInFlag) {
            this.onClickSubmitRequirement();
            if (this.loginSubscriptionEnd) this.loginSubscriptionEnd.unsubscribe();
          }
        })
      }
    }
  }


  showConfirm() {
    // const dialogRef = this.dialog.open(QuestionDialogV2Component, {
    //   width: "500px",
    //   height: "auto",
    //   data: { text: "Please click on OK and send a message (Register Me) on our whatsapp number (+97143440014) to register." },
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //if (result == "submit") {
    if (confirm("Please click on OK and send a message (Register Me) on our whatsapp number (+971569773623) to register.")) {
      // if (isPlatformBrowser(this.platformId)) {
      window.open(
        "https://api.whatsapp.com/send?phone=971569773623&text=Register Me",
        "_blank"
      );
      // }
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Login failed",
        detail: "You are not registered with us over whatsapp..!",
      });
    }
    // });
  }

}
