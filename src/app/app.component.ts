import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { initializePhraseAppEditor } from "ngx-translate-phraseapp";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    let config = {
      projectId: '<YOUR_PROJECT_ID>',
      phraseEnabled: true,
      prefix: "{{__",
      suffix: "__}}",
      fullReparse: true
    };

    initializePhraseAppEditor(config);
  }
}
