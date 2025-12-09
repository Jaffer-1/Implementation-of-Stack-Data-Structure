#include <iostream>
#include <stack>
#include <string>
using namespace std;
struct Notification {
    string appName;
    string message;
};
class NotificationCenter {
private:
    stack<Notification> notifStack; 
    const int MAX_CAPACITY = 10;    
public:
    void receiveNotification(string app, string msg) {
        if (notifStack.size() >= MAX_CAPACITY) {
            cout << "\n[!] BLOCKED: Notification Center is full! Clear some alerts first." << endl;
            return;
        }
        Notification n = {app, msg};
        notifStack.push(n);
        cout << "\n[ALERT] New notification from " << app << " received." << endl;
    }
    void dismissTop() {
        if (notifStack.empty()) {
            cout << "\n[!] Empty: No notifications to dismiss." << endl;
            return;
        }
        Notification removed = notifStack.top();
        notifStack.pop();
        cout << "\n[DISMISSED] Cleared: " << removed.appName << ": " << removed.message << endl;
    }
    void previewTop() {
        if (notifStack.empty()) {
            cout << "\n[STATUS] No new notifications." << endl;
            return;
        }
        Notification top = notifStack.top();
        cout << "\n========= LATEST ALERT =========" << endl;
        cout << " App:     " << top.appName << endl;
        cout << " Message: " << top.message << endl;
        cout << "================================" << endl;
    }
    void clearAll() {
        while (!notifStack.empty()) {
            notifStack.pop();
        }
        cout << "\n[CLEARED] All notifications removed." << endl;
    }
    void showStatus() {
        cout << "\n----------------------------------------" << endl;
        cout << " NOTIFICATION CENTER (" << notifStack.size() << " Active)" << endl;
        cout << "----------------------------------------" << endl;
        cout << " 1. Receive Notification (Push)" << endl;
        cout << " 2. Dismiss Top (Pop)" << endl;
        cout << " 3. Preview Latest (Peek)" << endl;
        cout << " 4. Clear All" << endl;
        cout << " 5. Exit" << endl;
        cout << " Select: ";
    }
};
int main() {
    NotificationCenter myPhone;
    int choice;
    string app, msg;
    myPhone.receiveNotification("WhatsApp", "Where are you?");
    myPhone.receiveNotification("Instagram", "New follower request");
    while (true) {
        myPhone.showStatus();
        if (!(cin >> choice)) {
            cin.clear(); cin.ignore(1000, '\n'); continue;
        }
        cin.ignore();
        switch (choice) {
        case 1:
            cout << "Enter App Name: ";
            getline(cin, app);
            cout << "Enter Message: ";
            getline(cin, msg);
            myPhone.receiveNotification(app, msg);
            break;
        case 2:
            myPhone.dismissTop();
            break;
        case 3:
            myPhone.previewTop();
            break;
        case 4:
            myPhone.clearAll();
            break;
        case 5:
            cout << "Locking screen..." << endl;
            return 0;
        default:
            cout << "Invalid Option." << endl;
        }
    }
    return 0;
}