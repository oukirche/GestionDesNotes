import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsListComponent} from "./students-list/students-list.component";
import {StudentCardComponent} from "./student-card/student-card.component";
import {StudentProfileComponent} from "./student-profile/student-profile.component";


const routes: Routes = [
    { path: "", redirectTo: "student-list", pathMatch: "full" },
    { path: "student-list", component: StudentProfileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
