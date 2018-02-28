import { AboutComponent } from './about/about.component'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { ExperiencesComponent } from './experiences/experiences.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { LangService } from './services/lang.service'
import { LanguagesComponent } from './languages/languages.component'
import { NgModule } from '@angular/core'
import { PersonalExperiencesComponent } from './personal-experiences/personal-experiences.component'
import { ProfileComponent } from './profile/profile.component'
import { SkillsComponent } from './skills/skills.component'
import { StudiesComponent } from './studies/studies.component'
import { ToolsComponent } from './tools/tools.component'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/translations/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ExperiencesComponent,
    PersonalExperiencesComponent,
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
