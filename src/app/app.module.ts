import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslatePipe, TranslateDirective, TranslateParser, TranslateDefaultParser, TranslateService } from '@ngx-translate/core'
import { MissingTranslationHandler, FakeMissingTranslationHandler } from '@ngx-translate/core'
import { TranslateStore, USE_STORE } from '@ngx-translate/core'



import { AppComponent } from './app.component';

export class TranslateLowerDirective extends TranslateDirective {
  updateValue(key: string, node: any, translations: any) {
    key = key.toLowerCase();
    super.updateValue(key, node, translations);
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    TranslateLowerDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    { provide: TranslateParser, useClass: TranslateDefaultParser },
    { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
    { provide: USE_STORE, useValue: false },
    TranslateStore,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
