exports.getLanding = (req, res) => {
    res.status(200).render('base', {
        title: 'Landing Page'
    });
}