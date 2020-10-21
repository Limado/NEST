const bcrypt = require('bcrypt');
const saltOrRounds = 10;


async function find(user) {
    /**
     * Usuario prueba para autenticacion
     * En la practica deben estar en una base de datos.
     */
    if (user.name == "admin") {
        return { name: "neotel_admin", password: bcrypt.hashSync('123456', saltOrRounds) }
    } else {
        return false;
    }
}
// hash user password before saving into database

module.exports = {
    find: find
}