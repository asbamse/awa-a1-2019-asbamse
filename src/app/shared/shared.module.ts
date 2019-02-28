import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapseModule} from 'ngx-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {LoadingOverlayComponent} from './loading-overlay/loading-overlay.component';
import {PaginationComponent} from './pagination/pagination.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingOverlayComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule,
    NavbarComponent,
    LoadingOverlayComponent,
    PaginationComponent,
  ]
})
export class SharedModule { }
