import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { HeaderSubComponent } from '../header-sub/header-sub.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-account-activation',
  standalone: true,
  imports: [HeaderSubComponent,FooterComponent],
  templateUrl: './account-activation.component.html',
  styleUrl: './account-activation.component.css'
})
export class AccountActivationComponent {

  constructor(
    private _router:Router,
    private comService:CommonService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let key = this.route.snapshot.queryParamMap.get('key');
    this.comService.activateAccount(key).subscribe(res=>{
      ;
    },
    error=>{
      
    });
  }
  navigate(){
    this._router.navigate(['/']);
  }
}
