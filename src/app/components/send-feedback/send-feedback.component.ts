import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FeedbackService } from '../../services/feedback.service';
import { CommonModule } from '@angular/common';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { state, style } from '@angular/animations';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-send-feedback',
  standalone: true,
  imports: [CommonModule,HeaderSubComponent,FormsModule,
    ReactiveFormsModule,RouterLink,RouterOutlet],
  providers:[MessageService],
  templateUrl: './send-feedback.component.html',
  styleUrl: './send-feedback.component.css'
})
export class SendFeedbackComponent {
  feedbackform:FormGroup;

  maxnum = 3000;
  realVal: string = "";
  
  areas = [
    "UAE",
    "Dubai",
    "Sharjah",
    "Ras Al Khaimah",
    "Abu Dhabi",
    "Ajman",
    "Fujairah",
    "Umm Al Quwain",
  ];

  constructor(private fb: FormBuilder,private serve:FeedbackService, private messageService: MessageService,) {
    this.feedbackform = this.fb.group({
      feedbackType: ['-----Select Feedback Type-----', Validators.required],
      feedbackContent: ['', [Validators.required,Validators.minLength(50), Validators.maxLength(3000)]],
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', Validators.required],
      companyName: '',
      area: ['-----Select Area-----',Validators.required],
      phoneNumber: ['',Validators.required],
    });
  }


  getRemainingCharacters(): number {
    return this.maxnum - this.realVal.length;
  }

  onInput(event: Event) {
    this.realVal = (event.target as HTMLInputElement).value;
  }
  onSubmit(){
    if(this.feedbackform.valid){
      
    console.log(this.feedbackform.value);
    const data=this.feedbackform.value
     this.serve.savefeedback(data).subscribe(res=>{
    
      this.messageService.add({
        severity: "success",
        summary:
        res.body.feedbackType+' successfully sended Thank you.',
      });
     },
     error => {
       this.messageService.add({
         severity: "error",
         summary:
           'Some thing want wrong. Please Try Again ..!!',
       });
       // this.verifyRequestProcessing = false;
     });
  
    }
  }
}
