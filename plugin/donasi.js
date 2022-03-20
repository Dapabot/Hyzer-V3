let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Saweria*_✅ : 
║│- https://saweria.co/dapagans
║│
║│➸ _*Pulsa*_✅: 
║│- 6283103592954
║│
║│➸ _*OWNER*_
║│- wa.me/48459088084
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
