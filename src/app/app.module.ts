import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG, NgxCurrencyModule } from 'ad-ngx-currency';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
  nullable: false
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCurrencyModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

