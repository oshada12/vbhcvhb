const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	dapuhy: 'https://dapuhy.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://dapuhy.xyz': 'Kirbotz123',
}

//Apikey
global.lolkey = 'Atakbotz'
global.dapuh = 'Kirbotz123'

//Owner
global.owner = ['6287705048235','6285335877178']
global.ownerNumber = ["6285335877178@s.whatsapp.net"]
global.nomorowner = 'https://wa.me/6285335877178'
global.namaownernya = 'OnX Dz'


//Bot
global.namabotnya = 'Killau Bot'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sessionName = 'killau'

//Media
global.email = 'callmedzofc@gmail.com'
global.group = 'https://bit.ly/38oNU0D'
global.youtube = 'https://bit.ly/39Ivus6'
global.website = 'https://api-xr.herokuapp.com'
global.github = 'https://github.com/OhMyDz'


//Packname
global.packname = '© OnX Dz\nI`m From Indonesia'
global.author = 'Wa : 0853-3587-7178\nOnX Dz'

//Message
global.krmd = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```'
}

//Keperluan Button img 
global.thumb = fs.readFileSync('./image/image/thumb.jpg')
global.imagekir = fs.readFileSync('./Image/image/logo.jpg')
global.videokir = fs.readFileSync('./image/image/all.mp4')

//Console Log
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})