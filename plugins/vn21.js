let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './mp3/nyanyi4.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [3,7,29,61,14,15,14,16,10] }, { quoted: m })
 }
handler.customPrefix = /^(nyanyi4)$/i
handler.command = new RegExp

module.exports = handler