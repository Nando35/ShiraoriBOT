let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Nama Hero Ml'
  m.reply('*[❗] WAIT, Sedang Proses...*')
  let res = await fetch(`https://api.xteam.xyz/search/heroml?=${response}&apikey=FuzBot1`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.img, 'heroml.jpg', `${response}`, m, false)
}
handler.help = ['heroml'].map(v => v + ' <nama>')
handler.tags = ['game']
handler.command = /^(heroml)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


