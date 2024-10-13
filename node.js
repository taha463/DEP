document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;

    if (!name || !email) {
        e.preventDefault();
        alert('Name and Email are required!');
    }
});
