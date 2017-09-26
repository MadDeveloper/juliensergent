import { Injectable } from '@angular/core'
import { Lang } from '../interfaces/lang'

@Injectable()
export class LangService {
    private usedLang: Lang

    browserLang(): Lang {
        let lang = navigator.language

        if ( lang.indexOf( '-' ) ) {
            lang = lang.substring( 0, lang.indexOf( '-' ) )
        }

        return this.validate( lang )
    }

    used(): Lang {
        if (!this.usedLang) {
            this.use(this.browserLang())
        }

        return this.usedLang
    }

    use( lang: Lang ) {
        this.usedLang = this.validate( lang )
    }

    all(): Lang[] {
        return [
            {  name: 'Français', tag: 'fr', flag: '/assets/images/fr.jpg' },
            {  name: 'English', tag: 'en', flag: '/assets/images/en.jpg' }
        ]
    }

    private validate( langToValidate: string | Lang ): Lang {
        const lang: Lang[] = this.all().filter( currentLang => {
            if ( 'string' === typeof langToValidate ) {
                return langToValidate === currentLang.tag
            } else {
                return (<Lang>langToValidate).tag === currentLang.tag
            }
        })

        return lang.length > 0 ? lang[ 0 ] : { name: 'Français', tag: 'fr', flag: '/assets/images/fr.jpg' }
    }
}
