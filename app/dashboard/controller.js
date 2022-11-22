module.exports = {
    index: async(req, res) => {
        try {
            console.log("tes nama")
            console.log(req.session.user.name)
            res.render('index', {
                name: req.session.user.name,
                title: 'Halaman Dashboard'
            })
        } catch (err) {
            console.log(err)
        }
    }
}