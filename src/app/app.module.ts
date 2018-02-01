import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class PhraseAppCompiler extends TranslateCompiler {
  constructor() {
    super();

  }
  compile(value: string, lang: string): string | Function {
    return value;
  }

  compileTranslations(translations: any, lang: string): any {
    let prefix = "{{__"
    let suffix = "__}}"
    let phraseTranslations : any = {} ;

    Object.keys(translations).forEach((key, value) => {
      phraseTranslations[key] = prefix + 'phrase_' + key + suffix;
    });

    return phraseTranslations;
  }
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: PhraseAppCompiler
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
