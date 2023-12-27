exports.getLanding = (req, res) => {
    res.status(200).render('home', {
        title: 'Landing Page',
    });
}