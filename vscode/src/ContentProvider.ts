import * as vscode from "vscode";

export default class SqlOutputContentProvider
  implements vscode.TextDocumentContentProvider {
  public provideTextDocumentContent(uri: vscode.Uri): string {
    return `
    <html>
    <head>
    </head>
    <body style="margin: 0; padding: 0; height: 100%; overflow: hidden;">
        hello world 78
        <iframe id="frame" src="http://localhost:3000/" width="100%" height="100%" frameborder="0" style="position:absolute; left: 0; right: 0; bottom: 0; top: 0px;"/>
    </body>
    </html>`;
  }
}
