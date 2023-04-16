import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';
import { RouterModule } from '@angular/router';
import { AddCodeComponent } from './components/add-code/add-code.component';
@NgModule({
  declarations: [MainComponent, CheatsheetComponent, AddCodeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class CoreModule {}
