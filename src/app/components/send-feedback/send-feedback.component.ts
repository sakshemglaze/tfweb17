import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FeedbackService } from '../../services/feedback.service';
import { CommonModule } from '@angular/common';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { state, style } from '@angular/animations';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-send-feedback',
  standalone: true,
  imports: [FooterComponent,CommonModule,HeaderSubComponent,FormsModule,
    ReactiveFormsModule,RouterLink,RouterOutlet],
  providers:[MessageService],
  templateUrl: './send-feedback.component.html',
  styleUrl: './send-feedback.component.css'
})
export class SendFeedbackComponent implements OnInit{
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

  constructor(private fb: FormBuilder,private serve:FeedbackService,private meta:Meta,private titleService:Title, private messageService: MessageService,) {
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
  ngOnInit(): void {
   this.titleService.setTitle("TradersFind Feedback Form: Improve Trading Journey ");
   this.setTitle("TradersFind Feedback Form: Improve Trading Journey ");
   this.setDescription("Share your valuable feedback through our TradersFind feedback form to enhance the trading experience. Your input makes a difference!")
  }
setDescription(description:string){
this.meta.addTag({
  name:'description',
  content:description
})
}
setTitle(title:string){
  this.meta.addTag({
    name:'title',
    content:title
  })
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
