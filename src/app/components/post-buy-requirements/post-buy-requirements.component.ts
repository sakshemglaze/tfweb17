import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { PostRequirementServiceService } from '../../services/post-requirement-service.service';
import { ValidatorService } from '../../services/validator.service';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { LoadpComponent } from '../shared/loadp/loadp.component';
import { OtpComponent } from '../dialog/otp/otp.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../modules/primeng/primeng.module';
import { state, style } from '@angular/animations';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-post-buy-requirements',
  standalone: true,
  imports: [CommonModule,HeaderSubComponent,
    LoadpComponent,
    FormsModule,ToastModule,
    ReactiveFormsModule,
    PrimengModule,
    OtpComponent,RouterOutlet,RouterLink],
    providers:[PostRequirementServiceService,MessageService],
  templateUrl: './post-buy-requirements.component.html',
  styleUrl: './post-buy-requirements.component.css'
})
export class PostBuyRequirementsComponent {
  @Input() product: any;
  mobileno: any
  constructor(
    public validatorService: ValidatorService,
    public requirementService: PostRequirementServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {

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

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}
