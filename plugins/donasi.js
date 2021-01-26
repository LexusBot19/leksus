let handler = async m => m.reply(`
╭─「 Donasi • LexusBOT 」
│ • Pulsa [+62 821-2432-8193]
│ • Saweria [https://saweria.co/donate/LexusCH]
│ • Trakteer [https://trakteer.id/LexusCH]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281224328193
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
