'use strict';
import * as path from 'path';
import * as vscode from 'vscode';

export class ReminderView {
    private static panel: vscode.WebviewPanel | undefined;

    public static show(context: vscode.ExtensionContext,) {
        if (this.panel) {
            this.panel.reveal();
        } else {
            this.panel = vscode.window.createWebviewPanel('955-wlb', '955.WLB', vscode.ViewColumn.One, {});

            const onDiskPath = vscode.Uri.file(
                path.join(context.extensionPath, 'images', 'getOffWork.gif')
            );
            const imagePath = this.panel.webview.asWebviewUri(onDiskPath);
            this.panel.webview.html = this.getWebviewContent(imagePath);
            
            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }

    protected static getWebviewContent(imagePath: vscode.Uri | string): string {
        let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>955.WLB</title>
        </head>
        <body>
            <h1 style="text-align:center;">It's time to get off work!</h1>
            <h2 style="text-align:center;">955.WLB: For your wellness, for your happiness, for your life, for your family, and for your future!</h2>
            <div><img src="${imagePath}" style="display:block;margin:auto"></div>
        </body>
        </html>`;

        return html;
    }
}