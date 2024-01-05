exports.getLanding = (req, res) => {
    res.status(200).render('home', {
        title: 'Landing Page',
    });
}

exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        title: 'Login Page'
    });
}

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        title: 'Register Page'
    });
}

exports.getMyBooksPage = (req, res) => {
    res.status(200).render('myBooks', {
        title: 'My Books Page'
    });
}