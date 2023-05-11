import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string = "";
  firstName: string = "";
  age: number = 0;
  quote: string = "blabla";
  photo: string = "";
  visible: string ="hidden"

  constructor() { }

  ngOnInit(): void {
  }

  setVisible(): void {
    if (this.visible === "hidden") {
      this.visible = "visible";
    } else {
      this.visible = "hidden"
    }
  }

  user = {
    name: "Doe",
    firstName: "John",
    age: 25,
    quote: "",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  }
}
