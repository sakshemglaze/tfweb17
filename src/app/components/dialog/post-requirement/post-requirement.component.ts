import { Component, Input } from '@angular/core';
import { ValidatorService } from '../../../services/validator.service';
import { PostRequirementServiceService } from '../../../services/post-requirement-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OtpComponent } from '../otp/otp.component';
import { LoadpComponent } from '../../shared/loadp/loadp.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-post-requirement',
  standalone: true,
  imports: [CommonModule,FormsModule, OtpComponent,
    ReactiveFormsModule,
    LoadpComponent],
    providers:[MessageService,PostRequirementServiceService],
  templateUrl: './post-requirement.component.html',
  styleUrl: './post-requirement.component.css'
})
export class PostRequirementComponent {
  @Input() product: any;
  mobileno: any
  constructor(
    public validatorService: ValidatorService,
    public requirementService: PostRequirementServiceService,
    private modalService: NgbModal,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.requirementService.dialogInputData) return;
  //if (this.requirementService.productSellerForm && ((this.requirementService.productSellerForm.controls['product'] && this.requirementService.productSellerForm.controls['product'].value) || (this.requirementService.productSellerForm.controls['productName'] && this.requirementService.productSellerForm.controls['productName'].value))) return;

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

  closeModal() {
    this.modalService.dismissAll();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}
