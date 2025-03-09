function store() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const role = document.getElementById('dropdown').value;
    const rec = document.getElementById('yes').value;
    const rec1 = document.getElementById('no').value;
    const rec2 = document.getElementById('maybe').value;

    const output = document.getElementById('output');

    output.innerText = name, email, number
}
