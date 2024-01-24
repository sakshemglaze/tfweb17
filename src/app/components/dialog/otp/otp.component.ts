import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiSharedService } from '../../../services/api-shared.service';
import { MessageService } from 'primeng/api';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderSubComponent } from '../../header-sub/header-sub.component';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [FormsModule,HeaderSubComponent,
    CommonModule,
    ReactiveFormsModule,
    ],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  @ViewChild("otpModal", { static: true }) otpModal?: ElementRef;
  @Input() countryCode: any;
  @Input() mobileNo: any;
  otpcode: any;
  constructor(private modalService: NgbModal, private _apiSharedService: ApiSharedService,
    private messageService: MessageService,
    private storageService: StorageService, private authService: AuthService,
    private _router:Router
    ) { }


  ngOnInit(): void {
    this.modalService.open(this.otpModal, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => { }, (reason) => { })
  }

  verifyOtp(event: any) {
    if (event == '') {
      alert("Enter OTP");
      return;
    }

    console.log("otp " + event);
    let mobileNumber = '' //this.loginFormGroup.controls['mobileNumber'].value;
    if(typeof this.countryCode !== 'undefined') {
      mobileNumber = this.countryCode + this.mobileNo;
    } else {
      mobileNumber =  this.mobileNo;
    }
    console.log(this.countryCode);
    //console.log("-----------")
    console.log(mobileNumber);
    // this.verifyRequestProcessing = true;
    let otpRegisterData = {
      phone: mobileNumber,
      otpValue: event,
      login: mobileNumber,
      isMobileLogin: true,
      langKey: "en"
    };

    let otpAuthData = {
      phone: mobileNumber,
      otpValue: event,
      login: mobileNumber,
      isMobileLogin: true,
      langKey: "en"
    };
console.log(mobileNumber);
    this._apiSharedService.checkUserExists(mobileNumber).subscribe(
      result => {
       // console.log(result);
        if (result != "NotFound") {
          //console.log(otpAuthData,mobileNumber)
          this.otpLogin(otpAuthData, mobileNumber);
          console.log("1");
        }
        else {
          this.otpRegister(otpRegisterData, mobileNumber);
          console.log("2");
        }
      },
      error => {
        if (error.error.text != "NotFound") {
          this.otpLogin(otpAuthData, mobileNumber);
          console.log("3");
        }
        else {
          this.otpRegister(otpRegisterData, mobileNumber);
          console.log("4");
        }
      });
  }

  otpLogin(otpAuthData: any, mobileNumber: any) {
    this._apiSharedService.otpLogin(otpAuthData).subscribe(otpreturn => {
      //this.verifyRequestProcessing = false;
      this.storageService.setItem('userAccessToken', otpreturn['id_token']);
      this.storageService.setItem('isLoggedIn', '1');
      this.storageService.setItem('loggedVia', 'mobile');
      this.storageService.setItem('userData', mobileNumber);
      this.storageService.setItem('userMobile', mobileNumber);
      this.storageService.setItem('login', mobileNumber);
      this.storageService.setItem('userFname', "User");
      var that = this;
      setTimeout(function () { that.authService.authenticateUser(); }, 3000);
      this.messageService.add({
        severity: "success",
        summary:
          'Otp verified successfully.',
      });
      // this.dialogRef.close();
      this.modalService.dismissAll();
      this._router.navigate(['/']);
    },
      error => {
        this.messageService.add({
          severity: "error",
          summary:
            'OTP entered is wrong. Please enter the correct OTP..!!',
        });
        // this.verifyRequestProcessing = false;
      });
  }

  otpRegister(otpRegisterData: any, mobileNumber: any) {
    this._apiSharedService.otpRegister(otpRegisterData).subscribe(otpregdata => {
      //this.verifyRequestProcessing = false;
      this.storageService.setItem('userAccessToken', otpregdata['id_token']);
      this.storageService.setItem('isLoggedIn', '1');
      this.storageService.setItem('loggedVia', 'mobile');
      this.storageService.setItem('login', mobileNumber);
      this.storageService.setItem('userData', mobileNumber);
      this.storageService.setItem('userMobile', mobileNumber);
      this.storageService.setItem('userFname', otpregdata.firstName?otpregdata:"User");
      var that = this;
      setTimeout(function () { that.authService.authenticateUser(); }, 1000);
      this.messageService.add({
        severity: "success",
        summary:
          'Otp verified successfully!',
      });
      //this.dialogRef.close();
      this.modalService.dismissAll();
      this._router.navigate(['/']);
    },
      error => {

        this.messageService.add({
          severity: "error",
          summary:
            'OTP entered is wrong. Please enter the correct OTP..!!!',
        });
        // this.verifyRequestProcessing = false;
      });
  }
}
