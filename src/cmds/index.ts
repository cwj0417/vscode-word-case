import * as vscode from 'vscode';
import { replace } from './replaceWord';

const document = vscode.workspace.textDocuments[0];

const editorReplacement = (type: 'camel' | 'cabab' | 'pascal' | 'snake') => {
    const editor = vscode.window.activeTextEditor;
    editor?.edit((eb) => {
        const txt = document.getText(editor?.selection);
        if (txt) {
            eb.replace(editor.selection, replace(txt, type));
        } else {
            const fullTextSelection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(document.lineCount + 1, 1));
            eb.replace(fullTextSelection, replace(document.getText(fullTextSelection), type));
        }
    });
};

export {
    editorReplacement
};
