// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { editorReplacement } from './cmds';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "word-case" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let camel = vscode.commands.registerCommand('word-case.camel-case', () => {
		editorReplacement('camel');
	});
	let cabab = vscode.commands.registerCommand('word-case.cabab-case', () => {
		editorReplacement('cabab');
	});
	let pascal = vscode.commands.registerCommand('word-case.pascal-case', () => {
		editorReplacement('pascal');
	});
	let snake = vscode.commands.registerCommand('word-case.snake-case', () => {
		editorReplacement('snake');
	});

	context.subscriptions.push(camel);
	context.subscriptions.push(cabab);
	context.subscriptions.push(pascal);
	context.subscriptions.push(snake);
}

// This method is called when your extension is deactivated
export function deactivate() { }
