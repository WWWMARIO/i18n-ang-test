import { Component, LOCALE_ID, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLang:string;

  constructor(@Inject(LOCALE_ID) private localeId: string){
    this.currentLang=localeId;

   }

}


