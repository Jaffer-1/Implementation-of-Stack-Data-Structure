/* --- TABS --- */
function switchTab(tabId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    const btns = document.querySelectorAll('.tab-btn');
    if(tabId === 'sim') btns[0].classList.add('active');
    else btns[1].classList.add('active');
}

/* ================= NOTIFICATION CENTER LOGIC ================= */
let notifStack = [];

function updateNotifUI() {
    const visualBox = document.getElementById('simVisual');
    const statusMsg = document.getElementById('simMsg');
    const emptyMsg = document.getElementById('emptyPhoneMsg');
    
    // Clear and redraw
    visualBox.innerHTML = "";
    
    // Iterate in REVERSE to show Stack (Top element appears first in UI)
    for (let i = notifStack.length - 1; i >= 0; i--) {
        const item = notifStack[i];
        const card = document.createElement('div');
        card.className = 'notif-card';
        card.innerHTML = `
            <div class="notif-header">
                <span>${item.app}</span>
                <span>now</span>
            </div>
            <div class="notif-body">${item.msg}</div>
        `;
        visualBox.appendChild(card);
    }

    if (notifStack.length === 0) {
        statusMsg.innerText = "No Notifications";
        emptyMsg.style.display = 'block';
    } else {
        statusMsg.innerText = `${notifStack.length} Notification(s)`;
        emptyMsg.style.display = 'none';
    }
}

function pushNotif() {
    const app = document.getElementById('notifSource').value.trim();
    const msg = document.getElementById('notifMsg').value.trim();
    
    if (!app || !msg) {
        alert("Please enter both App Name and Message.");
        return;
    }
    if (notifStack.length >= 6) {
        alert("Notification Overflow! (Too many alerts)");
        logSimAction("Error: Stack Overflow");
        return;
    }

    const notif = { app: app, msg: msg, time: new Date().toLocaleTimeString() };
    notifStack.push(notif);
    
    logSimAction(`Received: "${msg}" from ${app}`);
    
    // Clear inputs
    document.getElementById('notifMsg').value = "";
    
    updateNotifUI();
}

function popNotif() {
    if (notifStack.length === 0) {
        alert("No notifications to dismiss!");
        return;
    }

    // ANIMATION LOGIC:
    // 1. Get the top card (visual first child)
    const cards = document.querySelectorAll('.notif-card');
    if(cards.length > 0) {
        const topCard = cards[0];
        // 2. Add Swipe Animation Class
        topCard.classList.add('swiping-right');

        // 3. Wait for animation to finish (300ms) before updating Logic
        setTimeout(() => {
            const removed = notifStack.pop();
            logSimAction(`Cleared: "${removed.msg}"`);
            updateNotifUI();
        }, 300);
    }
}

function peekNotif() {
    if (notifStack.length === 0) {
        alert("Nothing to preview.");
        return;
    }
    // Highlight top card (First child visually)
    const cards = document.querySelectorAll('.notif-card');
    if(cards.length > 0) {
        cards[0].classList.add('highlight-peek');
        logSimAction(`Peeked at top notification`);
        setTimeout(() => cards[0].classList.remove('highlight-peek'), 800);
    }
}

function clearNotifs() {
    notifStack = [];
    logSimAction("Cleared All Notifications");
    updateNotifUI();
}

/* Simulator Log Logic */
function logSimAction(msg) {
    const list = document.getElementById('simLogList');
    const li = document.createElement('li');
    li.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
    list.prepend(li);
}
function toggleSimLog() {
    const c = document.getElementById('simLogContainer');
    c.classList.toggle('hidden');
    document.getElementById('simLogIcon').innerText = c.classList.contains('hidden') ? '▶' : '▼';
}


/* ================= EDITOR LOGIC (Same as before) ================= */
let docContent = "";
let undoStack = [];
let redoStack = [];

function updateEditorUI() {
    const display = document.getElementById('docDisplay');
    display.innerHTML = docContent === "" ? '<span class="placeholder-text">Start typing...</span>' : docContent;
    renderList('undoList', undoStack, 'undo');
    renderList('redoList', redoStack, 'redo');
}

function renderList(id, data, cls) {
    const container = document.getElementById(id);
    container.innerHTML = "";
    if (data.length === 0) {
        container.innerHTML = '<div class="empty-state">Empty</div>';
        return;
    }
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = `stack-item ${cls}`;
        div.innerText = item === "" ? "(Blank Page)" : item;
        container.appendChild(div);
    });
}

function writeText() {
    const input = document.getElementById('editorInput');
    const text = input.value.trim();
    if (!text) return;

    undoStack.push(docContent);
    if (redoStack.length > 0) {
        logEditorAction("⚠️ Timeline Branch: Redo history cleared");
        redoStack = [];
    }
    if (docContent.length > 0) docContent += " ";
    docContent += text;

    logEditorAction(`Typed: "${text}"`);
    input.value = "";
    updateEditorUI();
}

function undo() {
    if (undoStack.length === 0) {
        showStatus("Nothing to Undo!");
        return;
    }
    redoStack.push(docContent);
    docContent = undoStack.pop();
    logEditorAction("↩ Undo Performed");
    updateEditorUI();
    showStatus("Undo successful.");
}

function redo() {
    if (redoStack.length === 0) {
        showStatus("Nothing to Redo!");
        return;
    }
    undoStack.push(docContent);
    docContent = redoStack.pop();
    logEditorAction("↪ Redo Performed");
    updateEditorUI();
    showStatus("Redo successful.");
}

function showStatus(msg) {
    const el = document.getElementById('editorStatus');
    el.innerText = msg;
    setTimeout(() => el.innerText = "", 2000);
}

function logEditorAction(msg) {
    const list = document.getElementById('editorLogList');
    const li = document.createElement('li');
    li.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
    list.prepend(li);
}
function toggleEditorLog() {
    const c = document.getElementById('editorLogContainer');
    c.classList.toggle('hidden');
    document.getElementById('editorLogIcon').innerText = c.classList.contains('hidden') ? '▶' : '▼';
}

document.getElementById('editorInput').addEventListener("keypress", (e) => { if(e.key === "Enter") writeText(); });