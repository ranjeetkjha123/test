import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserComponent} from "../user/user.component";
import {Loginservice} from '../loginservice';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  providers: [Loginservice]

})
export class StatusComponent {

	 private BACKSTATUS = require("./assets/ferret_background.png");



 value: number = 35;

    randomize() {
        this.value = Math.floor((Math.random() * 100) + 1);
    }
  constructor(private _service:Loginservice) {

      setTimeout(() => {
      this.value = this.value + 65;
        }, 800)
		
        }

  ngOnInit() {
    this._service.checkCredentials();
    
  }

  logout():void {
    this._service.logout();
  }


}
