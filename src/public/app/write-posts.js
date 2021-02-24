$('#submitPost').click(() => {
    let currentUser = window.localStorage.user
    $.post('/api/posts', {
        userId: JSON.parse(currentUser).id,
        title: $('#InputTitle').val(),
        body: $('#InputBody').val()
    }, (post) => {
        console.log(post)
    })
})




