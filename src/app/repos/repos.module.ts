import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposMainComponent } from './components/repos-main/repos-main.component';
import { HttpClientModule } from '@angular/common/http';
import { ReposRoutingModule } from './repos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReposMainComponent],
  imports: [
    CommonModule,
    ReposRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [],
})
export class ReposModule {}
