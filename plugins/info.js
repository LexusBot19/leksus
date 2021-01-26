let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: LexusBOT
╠➥ Script: @Nurotomo&MhankBarBar
║
╠➥ Github: https://github.com/LexusBot19
╠➥ Instagram: @Lxcyz._
╠➥ YouTube: LexusCH
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Pulsa: +62 821-2432-8193
╠➥ Saweria: https://saweria.co/donate/LexusCH
╠➥ Trakteer: https://trakteer.id/LexusCH
║
║>Request? Wa.me/6288806757044
║
╠═〘 LexusBOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

