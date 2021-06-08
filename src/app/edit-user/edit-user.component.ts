import { Component, Input, OnInit } from "@angular/core";
import { users } from "../model/user";

@Component({
  selector: "spa-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"],
})
export class EditUserComponent implements OnInit {
  @Input() user: users;

  constructor() {}

  ngOnInit() {}
}
