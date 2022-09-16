# WorkflowEngine Designer for Angular Sample

## Introduction

WorkflowEngine Designer for Angular is a library developed to facilitate the use of this component. It provides a convenient way to interact and create the Workflow Designer on your web page using Angular. This section explains you how to add the Workflow Designer to your web application in a convenient format  - Get Started -  that thoroughly interprets the procedure, step by step.

## Prerequisites

To run the example below, you should create the WorkflowEngine backend capable of handling requests from the Workflow Designer, the NodeJS runtime, and  the NPM package manager to download the required packages. That is all you need for further action.

## Get Started

First, you should install a command line utility to work comfortably with your Angular application. For this, run the following command:

```shell
npm install -g @angular/cli
```

After executing this command, the Angular command line interface will be globally installed on your computer, and you can proceed to creating our project. For this, also run the following code:

```shell
ng new workflow-designer-angular-sample
```

After execution, these two questions will be asked:

- Use Angular Routing - No;
- Preferred style sheet language (CSS, SCSS, etc.) - CSS.

After confirmation, the Angular project will be created in the `workflow-designer-angular-sample` folder. The `workflow-designer-angular` package must be installed. To start, do the following:

```shell
cd workflow-designer-angular-sample
npm install @optimajet/workflow-designer-angular
npm start
```

Now, the `workflow-designer-angular-sample` folder contains all the necessary files for our web application. Their file hierarchy is presented below (depending on the version used, it may differ):

```
├── node_modules
│   └── ...
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   │   └── .gitkeep
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── poyfills.ts
│   ├── styles.css
│   └── test.ts
├── angular.json
├── karma.conf.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

Now let's go directly to connecting and displaying the Workflow Designer in this web application. First, we should add the WorkflowDesigner styles. For this, add the following import in the `style.css` file:

```css
@import '~@optimajet/workflow-designer/dist/workflowdesigner.min.css'
```

Next, we need to set up the Angular component. To do this, open the file `src/app/app.component.ts` and paste the following content:

```typescript
import { Component } from '@angular/core';
import { WorkflowDesignerComponent } from '@optimajet/workflow-designer-angular';

@Component({
  selector: 'app-root'
})
export class AppComponent {
  schemeCode = '<YOUR_SCHEME_CODE_VALUE>';
  processId = '';
  designerConfig = {
    apiurl: '<YOUR_API_URL_VALUE>',
    widthDiff: 0,
    heightDiff: 0
  };
}
```

This code imports the WorkflowDesigner component for use in the markup code, and also sets the necessary parameters for passing them to the WorkflowDesigner component, namely:

- `schemeCode` - is the code for the Workflow diagram to be displayed in the Workflow Designer.
- `processId` - is the identifier of the WorkflowEngine process.
- `designerConfig` - are the direct settings for the Designer indicating all the necessary parameters, namely: the HTTP address of the WorkflowAPI for interacting with the server side of the application (`apiurl`), the difference between the total page width and the width available for the WorkflowDesigner (`widthDiff`), and the difference between the total page height and the height available for the WorkflowDesigner (`heightDiff`) to display the WorkflowDesigner window. For a more detailed list of the parameters, see the **Designer** section of the documentation page about the WorkflowEngine.

> **NOTE:** Be careful with the case of the characters when specifying the parameters. For example: `apiUrl` and `apiurl` are two completely different values.

If you want to display the Workflow scheme in the Workflow Designer interface, set the required value to the `schemecode` variable, and assign the empty string to the `processId`. In case you want to display the Workflow process, assign the empty string to the `schemecode`, and the required value to the `processId` variable of the WorkflowEngine process identifier.


Then, paste the following code into the `src/app/app.component.html` file:

```html
<workflow-designer 
  [schemeCode]="schemeCode"
  [processId]="processId"
  [designerConfig]="designerConfig"
></workflow-designer>
```

Here the WorkflowDesigner is drawn and its parameters, specified in the `src/app/app.component.ts` file, are initialized.

And finally, all that remains is to edit the `src/app/app.module.ts` file as follows:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WorkflowDesignerModule } from '@optimajet/workflow-designer-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorkflowDesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Here you just need to add the `WorkflowDesignerModule` initialization, and join it to the parameters of the application module.

Now, run the `npm start` command and your page will display something like that (the Workflow diagram may differ):

![Workflow Engine Designer Sample for Angular](./screens/good-result.png)

## How to Call WorkflowDesigner Functions inside Angular Component

The `@optimajet/workflow-designer-angular` component is a wrapper over the usual WorkflowDesigner. Some of the most commonly used methods are wrapped in the `@optimajet/workflow-designer-angular` component for convenience. To use them, do the following:

1. Import the `ViewChild` from `@angular/core` into your component, create a class variable using the `@ViewChild` decorator (e.g.`this.workflowDesigner`) of the `WorkflowDesignerComponent` type, and set the value `undefined` to it; in the `WorkflowDesigner` component, assign the value of the variable you created to the `ref` parameter:

   ```javascript
   import { Component, ViewChild } from '@angular/core';
   import { WorkflowDesignerComponent } from '@optimajet/workflow-designer-angular';
   
   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent {
     workflowDesignerParameters = {
       schemeCode: '<YOUR_SCHEME_CODE_VALUE>',
       processId: '',
       designerConfig: {
         name: 'wfdesigner',
         apiurl: '<YOUR_API_URL_VALUE>',
         templatefolder: '/templates/',
         widthDiff: 0,
         heightDiff: 0
       }
     };
   
     @ViewChild(WorkflowDesignerComponent) workflowDesigner?: WorkflowDesignerComponent = undefined;
   
     yourWorkflowFunction() {
       // Your code here...
     }
   }
   
   ```

2. Now you can use the methods of the `WorkflowDesigner` component directly in your component:

   ```javascript
   yourWorkflowFunction() {
       this.workflowDesigner.methodName();
   }
   ```

A complete list of the methods available for use from the `WorkflowDesigner` component is given below:

| Method Name                          | Description                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| clearScheme()                        | Clears the designer, equivalent of creating empty scheme design |
| getDesignerErrors()                  | Get Workflow Designer Errors<br/>**Returns** Errors in Workflow Designer |
| save(successCallback, errorCallback) | Save Workflow scheme<br/>**successCallback** Function which will be executed if save was successful<br/>**errorCallback** Function which will be executed if save operation failed |
| downloadScheme()                     | Download XML file with Workflow Scheme description |
| downloadBpmn()                       | Download BPMN file with BPM description of the scheme. |
| upload(uploadType, callback)         | Upload BPMN or XML file.<br>**uploadType** Upload type, can be 'scheme' or 'bpmn'<br/>**callback** Function that will be executed after uploading file |
| isSchemeExist()                      | Check for scheme existence by the scheme code from props. <br>**Returns** {boolean} If scheme exists true, otherwise, false |
| isProcessExist()                     | Check for process existence by scheme code and process id given in props. <br>**Returns** {boolean} If process exists true, otherwise, false |
| refresh()                            | Refresh data in WorkflowDesigner                             |

In case you want some methods that are not presented in this table, use the WorkflowDesigner and call its methods directly without wrappers, for example:

```js
this.workflowDesigner.innerDesigner.methodName();
```
