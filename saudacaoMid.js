function saudacaoMid(nome) {
    return function ( req, res, next) {
       console.log(`Olá ${nome}`);
        next()
    }
}
module.exports = saudacaoMid;