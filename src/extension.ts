'use strict';
import * as vscode from 'vscode';
import { CronJob } from './cronJob';
import { ReminderView } from './reminderWebView';
import { CompanyTreeDataProvider } from './companyTreeDataProvider';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "955-wlb" is now active!');

	const companyTreeDataProvider = new CompanyTreeDataProvider();
    context.subscriptions.push(vscode.window.registerTreeDataProvider("955-wlb-company", companyTreeDataProvider));

	const cronJob = new CronJob(context);
	cronJob.start();

	context.subscriptions.push(vscode.commands.registerCommand('955-wlb.showReminder', () => {
		ReminderView.show(context);
	}));
}

export function deactivate() { }
