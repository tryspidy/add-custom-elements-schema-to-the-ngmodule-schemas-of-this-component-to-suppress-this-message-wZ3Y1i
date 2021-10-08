//In the app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
...
@NgModule({
  declarations: [ ... ],
  exports: [ ... ],
  imports: [ ... ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})