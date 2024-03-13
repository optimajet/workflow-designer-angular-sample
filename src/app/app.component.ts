import {Component} from '@angular/core';
// @ts-ignore
import el from './localization/el.json';
// @ts-ignore
import elElementUILocalization from './localization/el.js';

el.elementUILocalization = elElementUILocalization;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  schemeCode = 'SimpleWF';
  processId = '';
  designerConfig = {
    apiurl: 'https://demo.workflowengine.io/Designer/API',
    renderTo: 'wf-designer',
    uploadFormId: 'wf-uploadFormId',
    uploadFileId: 'wf-uploadFileId',
    widthDiff: 0,
    heightDiff: 0,
    name: 'wfe',
    language: 'en',
    customLocalization: [el]
  };
}
