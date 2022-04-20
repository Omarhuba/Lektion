const {PromisedDatabase} = require('promised-sqlite3')
const db = new PromisedDatabase()
class Artist {
    constructor(name){
        this.name = name

    }
    static async all() {
            await db.open('./database/chinook.db')
            const allArtists = await db.all('SELECT * FROM artists')
            await db.close() 
            // console.log(allArtists);
        }
        static async get(id){
            await db.open('./database/chinook.db')
            const result = await db.all("SELECT * FROM artists WHERE id = ?")
            const artist = new Artist(result.name)
            artist.setId(result.id)
            await db.close()
            console.log(allArtistsId);
            return artist
        } 
        static async delete(id) {
            await db.open('./database/chinook.db')
            const deleteArtistsId = await db.run(`DELETE FROM artists WHERE ArtistId `)
            await db.close()
            console.log(deleteArtistsId);
        }
        static findBy(fields) {
            await db.open('./database/chinook.db')
            const findBy = await db.run(`DELETE FROM artists WHERE ArtistId `)
            await db.close()
            console.log(findBy);
        }
        getId(){

        }
        getName(){

        }
        setName(newName) {

        }
        save() {

        }
        destroy() {

        }
        getAlbums() {

        }
}
class Albums {
    constructor(name){

    }
}


async function test(){
    await Artist.all()
    await Artist.get()
    await Artist.delete()
}
test()


// const Artists = new Artists()
// Artists.save()