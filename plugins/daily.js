let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Selamat anda mendapatkan +500 XP', m)  
    global.DATABASE._data.users[m.sender].exp += 9999999999
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Anda sudah mengklaim klaim harian  hari ini', m)
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.exp = 0

module.exports = handler

