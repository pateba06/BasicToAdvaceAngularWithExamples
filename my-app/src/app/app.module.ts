import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';



import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { NgclassngstyleComponent } from './ngclassngstyle/ngclassngstyle.component';

@NgModule({
   declarations: [
      AppComponent,
      DatabindingComponent,
      NgclassngstyleComponent
   ],
   imports: [
	 BrowserModule,
	 BrowserModule,
	 BsDropdownModule.forRoot(),
	 TooltipModule.forRoot(),
	 ModalModule.forRoot()
	],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: [
      BsDropdownModule,
      TooltipModule,
      ModalModule
   ]
})
export class AppModule { }
export class AppBootstrapModule {}