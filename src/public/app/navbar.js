let navlinks = $('.navbar-nav .nav-link')
navlinks.click((ev) => {
    let component = ($(ev.target).attr('data-component'))
    $('#content').load(`/components/${component}.html`)

})
