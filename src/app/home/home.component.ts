import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "spa-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() edit: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showCreate() {
    this.edit = !this.edit;
  }
}
