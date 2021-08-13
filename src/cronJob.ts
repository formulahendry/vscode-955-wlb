'use strict';
import * as vscode from 'vscode';
import * as cron from 'node-cron';
import { ReminderView } from './reminderWebView';
import { Utility } from './utility';

export class CronJob {
    public constructor(private context: vscode.ExtensionContext) {
    }

    public start() {
        const cronExpression = Utility.getConfiguration().get<string>('cronExpression')!;
        cron.schedule(cronExpression, () => {
            ReminderView.show(this.context);
        });
    }
}