"use strict";

import * as vscode from "vscode";
import { connect } from "./socket";

export function activate(context: vscode.ExtensionContext) {
  vscode.window.onDidChangeActiveTextEditor(textEditor => {
    connect((message: any) => {
      if (message.type === "open-editor") {
        vscode.window
          .showTextDocument(vscode.Uri.file(message.path))
          .then(e => {
            console.log(e);
          });
      }
    }).then((ws: any) =>
      ws.json({
        filePath: textEditor.document.fileName
      })
    );
  });
}

export function deactivate() {}
