module.exports = (_, res) => {
    res.status(404).send({
        error: '404.',
        message: 'path not found'
    })
}