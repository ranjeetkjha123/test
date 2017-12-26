import { Component, OnInit } from '@angular/core';
import {UserComponent} from "../user/user.component";
import { Router } from '@angular/router';
import {Loginservice} from '../loginservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [Loginservice]

})
  export class LoginComponent {
    private LOGO = require("./assets/ferret_background.png");
    public title:string="EnterpriseApplication";
    public user = new UserComponent('','');
    public errorMsg = '';

   constructor(private _service:Loginservice) { }

   login() {

     if(!this._service.login(this.user)) {
       this.errorMsg = 'Failed to login! try again ...';
     }
   }

}
