const db = require('./database-connection')

module.exports = {
    listAll() {
        return db('bands')
    },
    getById(id) {
        return db('bands').where('id', id)
    },
    createBand(pushBand) {
        return db('bands').insert(pushBand).returning('*')
    },
    deleteBand(id) {
        return db('bands').where('id', id).delete()
    },
    updateBand(id, band) {
        return db('bands').where('id', id).update(band).returning('*')
    }
}