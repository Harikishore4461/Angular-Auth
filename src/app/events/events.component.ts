import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor( private _auth : AuthService,public dialog:MatDialog ) { }
  list = []
  toggle = false
  spin = true;
  mail = ''
  edited = ''
  ngOnInit(){
    this._auth.events().subscribe(
      res=> {
        this.spin = false
        this.list=res
  
      },
      err=>console.log(err)
    )
  }
  onDelete(id){
    console.log(id);
    let dialogref = this.dialog.open(DialogComponent,{data:{id:id,operation:"Delete"}});
    dialogref.afterClosed().subscribe(result=>{
      if(result === "true"){
        this.spin = true
        let len = this.list.length
        this._auth.deleteuser(id).subscribe(
          res => {
            this.spin = false
            // this.list.splice(0,len,res)
            // window.location.reload();
            this.ngOnInit()

          },
          err => console.log('error occurs')
        )
      }
    });
    
  }
  onEdit(email){
    this.toggle = true
    this.mail = email
    this.edited=email
  }
  onCheck(email):boolean{
    if(email === this.mail){
      return true
    }
    else{
      return false
    }
  }
  onSave(item){
    this.toggle=false
    console.log(this.edited)
    this._auth.updateuser(item,this.edited).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    window.location.reload();
  }

}
