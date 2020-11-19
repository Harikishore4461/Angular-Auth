import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
// import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService,private _router : Router) { }

  ngOnInit(): void {
  }
  loginuserdata = {
    email: "",
    password: ""
  }
  errormsg={
    error:{
      error:""
    }
  }
  onclick() {
 
    this._auth.loginuser(this.loginuserdata).subscribe(
      res=>{console.log(res.token)
        localStorage.setItem('token', res.token)
        this._auth.user=res.user
        this._router.navigate(['/event'])
      },
      err=>{console.log(err)

            this.errormsg=err
            setTimeout(()=>{
              this.errormsg.error.error=''
            },5000)
      }
    )
  }
}
