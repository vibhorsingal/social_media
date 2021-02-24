$(() => {
    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#footer').load('/components/footer.html')
    $('#content').load('/components/show-posts.html')
})

function loginIfNeeded() {
    let currentuser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if (!currentuser) {
        $.post('/api/users', {}, (user) => {
            if (user) {
                console.log('registered as username', user.username)
                window.localStorage.user = JSON.stringify(user)
                currentuser = user
                $('#nav-username').text(currentuser.username)
            }
        })

    }
    else {
        console.log('running as user', currentuser.username)
        $('#nav-username').text(currentuser.username)
    }
}

