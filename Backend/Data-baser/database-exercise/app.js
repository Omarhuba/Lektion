const { PromisedDatabase } = require('promised-sqlite3');

const db = new PromisedDatabase ()


// async function getOneTracks(){
//     await db.open('chinook.db')
//     let tracks = await db.get( 'SELECT * FROM tracks ' )
//     console.log(tracks)
// }


// async function getTenArtists(){
//     await db.open('chinook.db')
//     let artists = await db.all( 'SELECT * FROM artists WHERE name IS "markus" ' )
//     console.log(artists)
// }
// // PRAGMA foreign_keys = ON

// async function createArtist(){
//     await db.open('chinook.db')
//     let create = await db.run( 'INSERT INTO artists(name) VALUES ("david")' )
//     console.log(create)
// }

async function createArtist(){
    await db.open('chinook.db')
    let create = await db.exec( `
    INSERT INTO artists(name) VALUES ("markus");
    SELECT * FROM artists ORDER BY ArtistId DESC LIMIT 10 ;
    SELECT * FROM tracks LIMIT 1;
`)
    console.log(create)
}
// getOneTracks()
// getTenArtists()
createArtist()