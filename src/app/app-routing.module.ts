import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from "./create-user/create-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "createuser",
    component: CreateUserComponent,
  },
  {
    path: "edituser",
    component: EditUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
