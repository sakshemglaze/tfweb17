import { Injectable } from '@angular/core';

import { ApiSharedService } from './api-shared.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

  enum LOGIN_METHOD {
    WHATSAPP = "WHATSAPP",
    SMS = "SMS",
    FACEBOOK = "FACEBOOK",
    GMAIL = "GMAIL",
    EMAIL = "EMAIL",
    FORGOT_PASSWORD = "FORGOT_PASSWORD"
  }
  
 
@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {
    //@Input() countryCode:any;
    //@Input() contactNumber:any;
    loginMethod = LOGIN_METHOD.WHATSAPP;
    isVerification = false;
    constructor(
      //private dialog: MatDialog,
      private router: Router,
      private _apiSharedService:ApiSharedService,
      private messageService:MessageService
      ) { }
  
      onClickSubmitRequirement(contactNumber:any,loginMethod:any = LOGIN_METHOD.WHATSAPP) {
       this.isVerification = false;
        console.log('click '+ loginMethod,contactNumber);
        alert("Temporarily not available !");
        //console.log(contactNumber);
        /*
        this._apiSharedService
          .sendOtp(contactNumber, loginMethod)
          .subscribe(
            (res) => {
              this.isVerification = true;
              console.log("OTP Success");
              this.messageService.add({
                severity: "success",
                summary:
                  'Otp Sent successfully.',
              });
            },
            (error) => {
              console.log(error.error);
              if (error && error.error && error.error.errorKey == 'otpexists') {
                this.isVerification=true;
                this.messageService.add({
                  severity: "warn",
                  summary:
                    "OTP Already generated for this !",
                });
              } else if (loginMethod == LOGIN_METHOD.WHATSAPP && error && error.error && (error.error.title == 'ContactNo not Valid.' || error.error.title == 'Could Not Send Whatsapp OTP')) {
                console.log("opt in " + this.loginMethod);
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
            }); */
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
    }
  
}
