import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
const material = [ 
  MatProgressSpinnerModule,
  MatDialogModule,
  MatMenuModule
 ]


@NgModule({
 
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
