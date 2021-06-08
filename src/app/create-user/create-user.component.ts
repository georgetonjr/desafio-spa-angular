import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { users } from "../model/user";
import { UserService } from "../user/user.service";

@Component({
  selector: "spa-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.createForm(new users());
  }

  createForm(user: users) {
    this.userForm = new FormGroup({
      id: new FormControl(user.id),
      nome: new FormControl(user.nome),
      email: new FormControl(user.email),
      contatoAlternativo: new FormControl(user.contatoAlternativo),
      imgUrl: new FormControl(user.imgUrl),
      createdAt: new FormControl(user.createdAt),
    });
  }

  save(): void {
    let user: users = this.userForm.value;
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, "0");
    let mes = String(data.getMonth() + 1).padStart(2, "0");
    let ano = data.getFullYear();
    let dataAtual = mes + "/" + dia + "/" + ano;
    user.createdAt = dataAtual;

    this.userService.save(user).subscribe({
      next: (user: users) => {
        alert("Usuario cadastrado com sucesso");
        window.location.reload();
      },
      error: (err: Error) => console.log("Error", err),
    });
  }
}
