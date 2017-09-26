import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { AppComponent } from './app.component'
import { LangService } from './services/lang.service';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { StudiesComponent } from './studies/studies.component';
import { SkillsComponent } from './skills/skills.component';
import { ToolsComponent } from './tools/tools.component';
import { LanguagesComponent } from './languages/languages.component'

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/translations/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ExperiencesComponent,
    StudiesComponent,
    SkillsComponent,
    ToolsComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    })
  ],
  providers: [
      LangService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
