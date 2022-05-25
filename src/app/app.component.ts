import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  schemeCode = 'SimpleWF';
  processId = '';
  designerConfig = {
    renderTo: 'wf-designer',
    uploadFormId: 'wf-uploadFormId',
    uploadFileId: 'wf-uploadFileId',
    apiurl: 'https://workflowengine.io/demo/Designer/API',
    widthDiff: 0,
    heightDiff: 0
  };
}
