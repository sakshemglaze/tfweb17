import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostRequirementServiceService } from '../../../services/post-requirement-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loadp',
  standalone: true,
  imports: [CommonModule],
  providers:[PostRequirementServiceService],
  templateUrl: './loadp.component.html',
  styleUrl: './loadp.component.css'
})
export class LoadpComponent implements OnInit {
  @Input() frm:any
  constructor(private modalServicec:NgbModal,
    public requirementService: PostRequirementServiceService,
  ){}
  
  ngOnInit() {
  //console.log("================ " + this.frm);
  }
  closeModal() {
    this.requirementService.spannerval = false;
    this.modalServicec.dismissAll();
  }
}
