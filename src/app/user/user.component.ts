import { Component, OnInit } from "@angular/core";
import { users } from "../model/user";
import { UserService } from "./user.service";

@Component({
  selector: "spa-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: users;

  users: users[] = [];
  show: boolean = false;
  lastId: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retriveAll();
  }
  retriveAll(): void {
    this.userService.retriveAll().subscribe({
      next: (users) => (this.users = users),
      error: (err) => console.log(err),
    });
  }
  showEdit(id: any) {
    this.show = !this.show;
    if (this.lastId != id) {
      this.retriveById(id);
      this.show = true;
    }
    this.lastId = id;
  }

  deleteUser(id: number) {
    this.userService.deleteById(id).subscribe({
      next: () => {
        alert("Usuario removido com sucesso");
        window.location.reload();
      },
      error: (err) => console.log(err),
    });
  }

  retriveById(id: number) {
    this.userService.retrieveById(id).subscribe({
      next: (user) => (this.user = user),
      error: (err) => console.error(err),
    });
  }
}
