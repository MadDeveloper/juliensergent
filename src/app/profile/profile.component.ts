import { Component, OnInit } from '@angular/core'
import { Lang } from '../interfaces/lang'
import { LangService } from '../services/lang.service'
import { TranslateService } from '@ngx-translate/core'
import * as $ from 'jquery'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    langUsed: Lang
    langs: Lang[]
    maxWidthSmallScreen = 999
    langModalOpened = false
    flipped = false

    constructor(
        private lang: LangService,
        private translate: TranslateService) { }

    ngOnInit() {
        this.langUsed = this.lang.used()
        this.langs = this.lang.all()
    }

    changeLang(lang: Lang, event: Event) {
        event.stopPropagation()
        this.lang.use(lang)
        this.langUsed = this.lang.used()
        this.translate.use(this.langUsed.tag)

        $('.lang.modal .content').removeClass('displayed')
        $('app').off('.lang')
        this.toggleFirstPageBlur()
    }

    toggleLangModal(event: Event) {
        event.preventDefault()
        event.stopPropagation()

        const $app = $('app-root')
        const $modal = $('.lang.modal')
        const $modalContent = $modal.children('.content')
        const $caret = $modalContent.children('.caret')

        $modalContent.toggleClass('displayed')

        if ($modalContent.hasClass('displayed')) {
            /*
             * Center modal in container
             */
            $modalContent.css({
                left: -Math.abs($modal.width() - $modalContent.width()) / 2,
                top: $modal.height() + 10
            })

            /*
             * Center caret in modal content
             */
            $caret.css({
                left: $modalContent.width() / 2 - 8.5
            })

            /*
             * Blur first page
             */
            this.toggleFirstPageBlur()

            /*
             * Handle click not on a lang
             */
            $app.off('.lang').on('click.lang', () => {
                $modalContent.removeClass('displayed')
                $app.off('.lang')
                this.toggleFirstPageBlur()
            })
        } else {
            $app.off('.lang')
            this.toggleFirstPageBlur()
        }
    }

    private toggleFirstPageBlur() {
        if ($('.lang.modal .content').hasClass('displayed')) {
            $('#first-page > *:not(#lang-container)').addClass('blurred accentuated')
            this.langModalOpened = true
        } else {
            $('#first-page > *:not(#lang-container)').removeClass('blurred accentuated')
            this.langModalOpened = false
        }
    }

    gotoProfile() {
        const top = $('#nav-root').offset().top
        const duration = 400

        this.animateScrollTop(top, duration)
    }

    animateScrollTop(target, duration?: number) {
        const $window = $(window)
        const scrollTopProxy = { value: $window.scrollTop() }
        duration = duration || 16

        if (scrollTopProxy.value !== target) {
            $(scrollTopProxy).animate(
                { value: target },
                {
                    duration,
                    step: stepValue => {
                        const rounded = Math.round(stepValue)
                        $window.scrollTop(rounded)
                    }
                })
        }
    }

    toggleFlip() {
        this.flipped = !this.flipped
    }
}
