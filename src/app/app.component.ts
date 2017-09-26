import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { LangService } from './services/lang.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private translate: TranslateService,
        private lang: LangService ) {

        const usedLang      = lang.used()
        const browserLang   = lang.browserLang()

        translate.setDefaultLang( browserLang.tag )
        translate.use( usedLang.tag )
    }
}
