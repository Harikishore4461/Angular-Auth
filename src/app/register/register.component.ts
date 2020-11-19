import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private _auth : AuthService,private _router : Router ) { }

  ngOnInit(): void {
  }
  userdata = {
    username:"",
    email:"",
    password:""
  }
  pass1=''
  errormsg={
    error:{
      error:""
    }
  }
  onCheck():boolean{
    if(this.pass1===this.userdata.password){
      return true
    }
    else{
      return false
    }
  }
  onclick(){
    this._auth.registereduser(this.userdata).subscribe(
      res => {
        console.log(res)
        // localStorage.setItem('token', res.token)
        this._router.navigate(['/sigin'])
      },
      err => {console.log(err)
            this.errormsg=err
            setTimeout(()=>{
              this.errormsg.error.error=''
            },5000)
      }
    )}
}