const form = document.getElementById('form');
const url = document.getElementById('url');
const btn = document.getElementById('btn-text');
function handleurl(event) {
    event.preventDefault();
    if (url.value != '') {
        saveurl = btn.innerHTML = ` <p> <%= locals.url %> <span><i class="fa-regular fa-copy"></i></span></p>`
        url.value = '';
    } else {
        alert('url is required')
    }
}