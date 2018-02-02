import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { initializePhraseAppEditor } from "ngx-translate-phraseapp";

type Language = 'en' | 'de';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  translate: TranslateService;

  constructor(translate: TranslateService) {
    let config = {
      projectId: '<YOUR_PROJECT_ID>',
      phraseEnabled: true,
      phraseDecoratorPrefix: "{{__",
      phraseDecoratorSuffix: "__}}",
      fullReparse: true
    };

    initializePhraseAppEditor(config);

    this.translate = translate;
    translate.setDefaultLang('de');
  }

  switchLanguage = (lang: Language) => {
    this.translate.use(lang);
  }
}
