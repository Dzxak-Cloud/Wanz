let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/859966a97d82bcac71af0.jpg'
let dann =
`
𝙿𝚊𝚢𝚖𝚎𝚗𝚝 ᴅᴇᴠɪɴᴀ - ᴍᴅ

➪ᴅᴀɴᴀ : 083141797710
➪ᴏᴠᴏ : 083141797710
➪ɢᴏᴘᴀʏ : 083141797710

ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ss ʙᴜᴋᴛɪ ᴛғ
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler