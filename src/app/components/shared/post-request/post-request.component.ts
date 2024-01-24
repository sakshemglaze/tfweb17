import { Component, Input } from '@angular/core';
import { PostRequirementServiceService } from '../../../services/post-requirement-service.service';
import { ActivatedRoute } from '@angular/router';
import { ValidatorService } from '../../../services/validator.service';
import { OtpComponent } from '../../dialog/otp/otp.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../../modules/primeng/primeng.module';

@Component({
  selector: 'app-post-request',
  standalone: true,
  imports: [  CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    PrimengModule,
    OtpComponent,
    ReactiveFormsModule],
  templateUrl: './post-request.component.html',
  styleUrl: './post-request.component.css'
})
export class PostRequestComponent {
  @Input() product: any;
  mobileno:any
  
constructor (
  public requirementService: PostRequirementServiceService,
  public validatorService: ValidatorService,
  public route: ActivatedRoute  ) { }

 ngOnInit(){
  if (this.requirementService.dialogInputData) return;
  if (this.requirementService.productSellerForm && ((this.requirementService.productSellerForm.controls['product'] && this.requirementService.productSellerForm.controls['product'].value) || (this.requirementService.productSellerForm.controls['productName'] && this.requirementService.productSellerForm.controls['productName'].value))) return;
  if (this.product) {
    this.requirementService.initializeRequirementForm(this.product);
  } else if (this.route && this.route.snapshot && this.route.snapshot.paramMap.get('searchText')) {
    let searchText = this.route.snapshot.paramMap.get('searchText');
    if (searchText == 'location') {
      this.requirementService.searchText = this.route.snapshot.paramMap.get('location')?.split('-').join(' ');
      this.requirementService.searchText = decodeURIComponent(this.requirementService.searchText);
    } else {
      this.requirementService.searchText = this.route.snapshot.paramMap.get('searchText');
    }
    this.requirementService.initializeRequirementForm();
  } else if (this.route && this.route.snapshot && this.route.snapshot.paramMap.get('categoryname')) {
    this.requirementService.searchText = this.route.snapshot.paramMap.get('categoryname')
    this.requirementService.initializeRequirementForm();
  } else if (this.route && this.route.snapshot && this.route.snapshot.paramMap.get('scatName')) {
    this.requirementService.searchText = this.route.snapshot.paramMap.get('scatName')
    this.requirementService.initializeRequirementForm();
  } else if (this.route && this.route.snapshot && this.route.snapshot.paramMap.get('catName')) {
    this.requirementService.searchText = this.route.snapshot.paramMap.get('catName')
    this.requirementService.initializeRequirementForm();
  } else {
    this.requirementService.initializeRequirementForm();
  }
 };
}
