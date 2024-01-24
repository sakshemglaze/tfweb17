import { NgModule } from '@angular/core';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@NgModule({

  providers: [MessageService],
  exports: [],


})
export class PrimengModule { }
