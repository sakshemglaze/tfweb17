import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ApiSharedService } from '../../services/api-shared.service';
import { AuthService } from '../../services/auth.service';
import { LoginDialogService } from '../../services/login-dialog.service';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { StorageService } from '../../services/storage.service';
import { ValidatorService } from '../../services/validator.service';
import { CommonModule } from '@angular/common';
import { OtpModule } from '../dialog/otp/otp.module';
import { LoadpModule } from '../shared/loadp/loadp.module';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { OtpComponent } from '../dialog/otp/otp.component';
import { LoadpComponent } from '../shared/loadp/loadp.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

export function countdownConfigFactory() {
  return { 
    format: `mm:ss`,
    demand: true,
    leftTime: 120
  };
}

declare const gapi:any;
enum LOGIN_METHOD {
  WHATSAPP = "WHATSAPP",
  SMS = "SMS",
  FACEBOOK = "FACEBOOK",
  GMAIL = "GMAIL",
  EMAIL = "EMAIL",
  FORGOT_PASSWORD = "FORGOT_PASSWORD"
}
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,
   HeaderSubComponent,
    ReactiveFormsModule,
   // SocialLoginModule,
    OtpComponent,
    LoadpComponent,
    FormsModule,
  RouterOutlet,MessagesModule,ToastModule],
    providers:[PostRequirementServiceService,MessageService,LoginDialogService],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  sendingSMS:boolean = false;
  loginFormGroup: FormGroup | any;
  loginEmailFormGroup: FormGroup | any;
  forgotPasswordFormGroup: FormGroup | any;
  otpVerifyFormGroup: FormGroup | any;
  countryCodes: any;
  whatsappCountryCodes: any;
  verifyMobile = false;
  loginMethod = LOGIN_METHOD.WHATSAPP;
  socialReg: any;
  error: any;
  otpRequestProcessing = false;
  verifyRequestProcessing = false;
  isVerification:boolean=false;
  //const gapi:any;
  constructor(private messageService: MessageService, 
    private _router: Router, 
    private _formBuilder: FormBuilder, 
    private _apiSharedService: ApiSharedService, 
    private storageService: StorageService,
    public ypAuthService:AuthService,
   // private authService:SocialAuthService,
    public requirementService:LoginDialogService,
    private modalS:NgbModal,
    public requirementService1: PostRequirementServiceService,
    public validatorService: ValidatorService,
    ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.requirementService1.initializeRequirementForm();
    /*this.otpVerifyFormGroup = this._formBuilder.group({
      otp: [null, [Validators.required, Validators.maxLength(6)]],
    });*/
    this.loginMethod = this.loginMethods.EMAIL;
    console.log(this.isVerification);
    this.loginEmailFormGroup = this._formBuilder.group({
      loginmode:['password'],
      email: ['', [Validators.required]],
      password: [null],
      countryCode:['+971',[Validators.required]]
    });
    
    gapi.load('auth2', () => {
      gapi.auth2.init({ client_id:'227820764854-0h1n442j6v4lm07nj7i5kimp8t7vv22m.apps.googleusercontent.com',});
    });
  
  
  }
  public get loginMethods(): typeof LOGIN_METHOD {
    return LOGIN_METHOD;
  }

  loginWithEmail(event: any) {
    //console.log("login --- " + event.countryCode);

    if(event.loginmode === "password" ) {
      if (event.email == "") {
      this.messageService.add({ severity: 'error', summary: 'Please enter valid email Id !' }); 
      return;
      }
    } else if (event.email == "" || event.countryCode == "" || event.email.length < 9) {
      this.messageService.add({ severity: 'error', summary: 'Please enter country code & valid mobile no !' }); 
      return;
    }
     //else { 
     if (1==1) {
      this.sendOtp(event);
     } else {
      if(event.loginmode === 'password') {
      let payload = {
        username: event.email,
        password: event.password,
        isSocialLogin: false
      }
      this._apiSharedService.userLogin(payload)
        .subscribe(res => {
          this.storageService.setItem('userAccessToken', res['id_token']);
          this.storageService.setItem('login', res['login']);
          this._apiSharedService.getUserByLogin(false, event.email)
            .subscribe(res => {
              this.storageService.setItem('login', res['login']);
              console.log(res['userType']);
              if (res['userType'] == 'Seller') {
                let that = this;
                setTimeout(() => {
                  if (res && res.activePackageSubscription && res.activePackageSubscription.subscriptionEndDate) {
                    let curr_date = new Date();
                    let expdate = new Date(res.activePackageSubscription.subscriptionEndDate);
                    let diff = expdate.getTime() - curr_date.getTime();
                    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));

                    if (diffDays > 0) {
                      that._router.navigate(['/seller/dashboard']);
                    } else {
                      that._router.navigate(['/seller/package']);
                    }
                  } else {
                    that._router.navigate(['/seller/package']);
                  }
                }, 2000)

              }
              else {
                this.messageService.add({ severity: 'success', summary: 'You have loggedin successfully' });
                this._router.navigate(['/']);
              }

            },
              error => {
                  console.log(error.detail);
              });
        },
          error => {
            if (error && error.error && error.error.detail && error.error.detail.indexOf('Locked') >= 0) {

            } else {
              this.messageService.add({ severity: 'error', summary: 'Credentials do not match our records. Please retry.' });
            }
            this.messageService.add({ severity: 'error', summary: 'Credentials do not match our records. Please retry.' });
          });
    }  else {
    console.log(event.email);
    //this.requirementService.onClickSubmitRequirement(event.email);
    }
  }
    //else {this.messageService.add({ severity: 'error', summary: 'Please enter email Id/mobile no and password' }); }
}

  sendOtp(event:any) {
    /*if (event.email == "" || event.email.length < 10 ) {
      this.messageService.add({ severity: 'error', summary: 'Please enter valid mobile no with country code!' }); 
    } else {*/
      this.sendingSMS = true;
    console.log(event.countryCode + event.email);
     if(this.loginMethod != "EMAIL") {
      this.requirementService.onClickSubmitRequirement(event.countryCode + event.email,this.loginMethod); 
     } else {
      event.countryCode = "";
      this.loginEmailFormGroup.countryCode = ""; 
      this.requirementService.onClickSubmitRequirement(event.email,this.loginMethod);
     }
      setTimeout(() => {
        this.sendingSMS = false; }, 3000);
   // }
  }
   onClickWhatsappLogin(){
    this.loginMethod = LOGIN_METHOD.WHATSAPP;
    this.verifyMobile = false;
    //this.loginEmailFormGroup.countryCode.selectedOption ='';
  }

  onClickSmsLogin(){
    this.loginMethod = LOGIN_METHOD.SMS;
    this.verifyMobile = false;
  }

  onClickForgotPassword(){
    this.loginMethod = LOGIN_METHOD.FORGOT_PASSWORD;
    this.verifyMobile = false;
    this.verifyRequestProcessing = false;
  }
  onClickEmailLogin(){
    this.loginMethod = LOGIN_METHOD.EMAIL;
    this.verifyMobile = false;
    this.loginEmailFormGroup.countryCode = null;
    console.log(this.loginMethod);
  }

  // onClickFacebookLogin(){
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(userData => {
      
  //     //this.storageService.setItem('isLoggedIn',true);
  //     this.storageService.setItem('loggedVia','facebook');
  //     this.storageService.setItem('userEmail',userData['email']);
  //     this.storageService.setItem('userFname',userData['firstName']);
  //     this.storageService.setItem('userLname',userData['lastName']);
  //     this.storageService.setItem('login', userData['email']);
  //     let socialReg = {
  //       accessToken : userData['authToken'],
  //       email : userData['email'],
  //       firstName : userData['firstName'],
  //       lastName : userData['lastName'],
  //       socialMethod : 'fb',
  //       status : 'Approved'
  //     };
  //     this.socialLoginOrRegister(socialReg);
  //  })
  // }

  onClickGmailLogin(){
    
    console.log("#######");
  try {
  const auth2 = gapi.auth2.getAuthInstance();
  console.log("after auth");
  //console.log(auth2.getBasicProfile.getEmail());
  auth2.signIn().then((user:any) => {
  const basicProfile = user.getBasicProfile();
  const email = basicProfile.getEmail();
  const firstName = basicProfile.getGivenName();
  const lastName = basicProfile.getFamilyName();
  
  this.storageService.setItem('loggedVia', 'Gmail');
  this.storageService.setItem('userEmail', email);
  this.storageService.setItem('userFname', firstName);
  this.storageService.setItem('userLname', lastName);
  this.storageService.setItem('login', email);
  console.log("token");

  let socialReg = {
    accessToken: user.getAuthResponse().id_token,
    email: email,
    firstName: firstName,
    lastName: lastName,
    socialMethod: 'google',
    status: 'Approved'
  };
      console.log("google Authentication");
      //this.socialLoginOrRegister(socialReg);
    } )    
     
    }catch(error:any) {
         console.error('Google Sign-In Error:', error);
      // Handle sign-in error here (e.g., show an error message to the user)
    }
  }

  socialLoginOrRegister(userData:any){
    this._apiSharedService.checkUserExists(userData.email).subscribe(result=>{ 
      if(result!="NotFound"){
        console.log("Not Fount");
        this._apiSharedService.socialLogin(userData).subscribe(res=>{
          this.storageService.setItem('userAccessToken', res['id_token']);
          this.ypAuthService.authenticateUser();
          this.messageService.add({
            severity: "success",
            summary:
              "Login Successful",
          });
          this._router.navigate(['/']);
         },
         error=>{           
          console.log(error.detail);
        }
         );
      }
      else{
        console.log("Registration");
        this._apiSharedService.socialReg(userData).subscribe(res=>{
          this.storageService.setItem('userAccessToken', res['id_token']);
          this.ypAuthService.authenticateUser();
          this.messageService.add({
            severity: "success",
            summary:
              "Login Successful",
          });
          this._router.navigate(['/']);
         },
         error=>{ 
          console.log(error.detail);
         }
         );
      }
     },
     error=>{
      if(error.error.text!="NotFound"){
        console.log("found error and social login");
        this._apiSharedService.socialLogin(userData).subscribe(res=>{
          this.storageService.setItem('userAccessToken', res['id_token']);
          this.ypAuthService.authenticateUser();
          this.messageService.add({
            severity: "success",
            summary:
              "Login Successful",
          });
           this._router.navigate(['/']);
         },
         error=>{
          console.log(error.detail);
         }
         );
      }
      else{
        console.log("Not found error and registraion");
        this._apiSharedService.socialReg(userData).subscribe(res=>{
          this.storageService.setItem('userAccessToken', res['id_token']);
          this.ypAuthService.authenticateUser();
          this.messageService.add({
            severity: "success",
            summary:
              "Login Successful",
          });
          this._router.navigate(['/']);
         },
         error=>{
          console.log(error.detail);
         }
         );
      }
     });
    }
}
