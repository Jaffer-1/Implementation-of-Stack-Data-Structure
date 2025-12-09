#include <iostream>
#include <stack>
#include <string>
using namespace std;
class TextEditor {
private:
    string currentText;          
    stack<string> undoStack;     
    stack<string> redoStack;     
public:
    TextEditor() {
        currentText = "";
    }
    void write(string newText) {
        undoStack.push(currentText);
        while (!redoStack.empty()) {
            redoStack.pop();
        }
        if (currentText.length() > 0) {
            currentText += " " + newText; // Append with a space
        } else {
            currentText += newText;
        }
        cout << "[+] Written successfully." << endl;
    }
    void undo() {
        if (undoStack.empty()) {
            cout << "[!] Nothing to Undo!" << endl;
            return;
        }
        redoStack.push(currentText);
        currentText = undoStack.top();
        undoStack.pop();
        cout << "[<] Undo Performed." << endl;
    }
    void redo() {
        if (redoStack.empty()) {
            cout << "[!] Nothing to Redo!" << endl;
            return;
        }
        undoStack.push(currentText);
        currentText = redoStack.top();
        redoStack.pop();
        cout << "[>] Redo Performed." << endl;
    }
    void showDisplay() {
        cout << "\n==========================================" << endl;
        cout << "            CURRENT DOCUMENT              " << endl;
        cout << "==========================================" << endl;
        if (currentText.empty()) {
            cout << "[Empty Document]" << endl;
        } else {
            cout << "\"" << currentText << "\"" << endl;
        }
        cout << "------------------------------------------" << endl;
        cout << "History Steps: " << undoStack.size() << " | Redo Available: " << redoStack.size() << endl;
        cout << "==========================================" << endl;
        cout << "1. Write Text   2. Undo (Ctrl+Z)   3. Redo (Ctrl+Y)   4. Exit" << endl;
        cout << "Choose Option: ";
    }
};
int main() {
    TextEditor myDoc;
    int choice;
    string input;
    while (true) {
        myDoc.showDisplay();
        if (!(cin >> choice)) { 
            cin.clear();
            cin.ignore(1000, '\n'); 
            continue;
        }
        cin.ignore(); 
        switch (choice) {
        case 1:
            cout << "Enter text to append: ";
            getline(cin, input);
            myDoc.write(input);
            break;
        case 2:
            myDoc.undo();
            break;
        case 3:
            myDoc.redo();
            break;
        case 4:
            return 0;
        default:
            cout << "Invalid Option!" << endl;
        }
    }
    return 0;
}