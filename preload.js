const { contextBridge } = require('electron');
const https = require('https');
const fs = require('fs');
const path = require('path');

const agent = new https.Agent({
  ca: fs.readFileSync(path.join(__dirname, 'rootCA.pem')),
});

async function getMessage() {
  const res = await fetch('https://192.168.1.21', { dispatcher: agent });
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json();
}

contextBridge.exposeInMainWorld('api', {
  getMessage,
});
