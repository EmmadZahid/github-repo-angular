import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitsMainComponent } from './components/commits-main/commits-main.component';
import { CommitsRoutingModule } from './commits-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CommitsMainComponent],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CommitsModule {}
