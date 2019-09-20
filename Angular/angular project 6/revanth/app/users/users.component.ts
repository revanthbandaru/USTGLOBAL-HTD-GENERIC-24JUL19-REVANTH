import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../firebase.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private fireBase: FirebaseService, private router: Router) { }
  ngOnInit() {
    this.fireBase.getData();
    console.log(this.fireBase.users);
    }

  updateUser(user) {
    this.fireBase.selectedUser = user;
    this.router.navigateByUrl('/firebase');
  }
  deleteUser(user) {
     this.fireBase.deleteData(user).subscribe((data)=>{
    console.log(data);
     this.fireBase.getData();
     })
  }
}
