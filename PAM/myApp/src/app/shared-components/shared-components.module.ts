import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ LoginComponent],
  exports: [LoginComponent]
})
export class SharedComponentsModule {}
