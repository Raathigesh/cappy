"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import ContentProvider from "./ContentProvider";
const WebSocket = require("ws");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const ws = new WebSocket("ws://localhost:7777");

  ws.on("open", function open() {
    ws.send("something");
  });

  ws.on("message", function incoming(data) {
    console.log(data);
  });
  let previewUri = vscode.Uri.parse("css-preview://authority/css-preview");
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "reassist" is now active!');

  vscode.workspace.registerTextDocumentContentProvider(
    "css-preview",
    new ContentProvider()
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("extension.sayHello", () => {
    // The code you place here will be executed every time your command is executed

    vscode.commands.executeCommand(
      "vscode.previewHtml",
      previewUri,
      vscode.ViewColumn.Two,
      "Cappy"
    );
  });

  // vscode.window.activeTextEditor.document.

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
