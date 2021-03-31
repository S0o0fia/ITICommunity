import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionsModule } from 'src/app/sections/sections.module';
import { HomeComponent } from './home.component';




@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [ HomeComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
