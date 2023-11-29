let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/859966a97d82bcac71af0.jpg'
let dann =
`
ʜᴀɪ ᴋᴀᴋ👋 
ᴋᴀʟɪᴀɴ ʙɪsᴀ ʙᴇʀᴋᴏɴᴛʀɪʙᴜsɪ ᴅᴀʟᴀᴍ ᴘᴇɴɢᴇᴍʙᴀɴɢᴀɴ ʙᴏᴛ ɪɴɪ ᴅᴇɴɢᴀɴ ʙᴇʀᴅᴏɴᴀsɪ sᴇɪᴋʜʟᴀsɴʏᴀ

ᴅᴏɴᴀsɪ ᴋᴇᴘᴀᴅᴀ ᴅᴇᴠɪɴᴀ - ᴍᴅ

➪ᴅᴀɴᴀ : 083141797710
➪ᴏᴠᴏ : 083141797710
➪ɢᴏᴘᴀʏ : 083141797710

ʙᴇsᴀʀ ᴋᴇᴄɪʟ ᴊᴜᴍʟᴀʜ ᴅᴏɴᴀsɪ ʏᴀɴɢ ᴋᴀʟɪᴀɴ ʙᴇʀɪᴋᴀɴ ɪᴛᴜ sᴜᴅᴀʜ sᴀɴɢᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ☘︎

ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ...
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(donasi|donate)$/i
module.exports = handler