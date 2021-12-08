import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  schemeCode = 'TestScheme';
  processId = '';
  designerConfig = {
    renderTo: 'wf-designer',
    uploadFormId: 'wf-uploadFormId',
    uploadFileId: 'wf-uploadFileId',
    apiurl: 'http://localhost:5000/Designer/API',
    widthDiff: 0,
    heightDiff: 0
  };
}
