const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id) /** Busca todos incidents que essa ong criou */
            .select('*'); /** busca todos os campos do incident */

        return response.json(incidents);
    } /**Retorna casos específicos de uma ong */
}