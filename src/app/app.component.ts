import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  url = "../assets/default.jpg";

  title = 'reactive-form';
  constructor(private _auth : AuthService,private _router:Router,public dialog:MatDialog){}
  user:string
  onSigned() : boolean{
     
    if (this._auth.loggedIn()){
      this.user = this._auth.currentuser()
     
      return true
    }
  }
  // signed = this.onSigned()
  // if(signed){
  // let user = this._auth.currentUser()
  // console.log(user)
  // }
  clearData(){
    let dialogref = this.dialog.open(DialogComponent,{data:{email:"",operation:"Logout",name:this.user}})
    dialogref.afterClosed().subscribe(result=>{
      if(result==="true"){
        this._auth.logout()
        this._router.navigate(['/sigin'])
      }
    })

  }
}
