const regexFullName = /^[А-ЯІЇЄҐ][а-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
const regexIdCard = /^[А-ЯІЇЄҐ]{2} №\d{6}$/;
const regexFaculty = /^[А-ЯІЇЄҐ]{1,4}$/;
const regexDob = /^\d{2}\.\d{2}\.\d{4}$/;
const regexAddress = /^м\. [А-ЯІЇЄҐ][а-яіїєґ]+$/;

const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const idCard = document.getElementById('idCard');
    const faculty = document.getElementById('faculty');
    const dob = document.getElementById('dob');
    const address = document.getElementById('address');

    let isValid = true;
    resultDiv.textContent = '';

    if (!regexFullName.test(fullName.value)) {
        fullName.classList.add('error');
        isValid = false;
    } else {
        fullName.classList.remove('error');
    }

    if (!regexIdCard.test(idCard.value)) {
        idCard.classList.add('error');
        isValid = false;
    } else {
        idCard.classList.remove('error');
    }

    if (!regexFaculty.test(faculty.value)) {
        faculty.classList.add('error');
        isValid = false;
    } else {
        faculty.classList.remove('error');
    }

    if (!regexDob.test(dob.value)) {
        dob.classList.add('error');
        isValid = false;
    } else {
        dob.classList.remove('error');
    }

    if (!regexAddress.test(address.value)) {
        address.classList.add('error');
        isValid = false;
    } else {
        address.classList.remove('error');
    }

    if (isValid) {
        resultDiv.classList.add('success');
        resultDiv.innerHTML = `
            <h3>Введена інформація:</h3>
            <p><strong>ПІБ:</strong> ${fullName.value}</p>
            <p><strong>ID-картка:</strong> ${idCard.value}</p>
            <p><strong>Факультет:</strong> ${faculty.value}</p>
            <p><strong>Дата народження:</strong> ${dob.value}</p>
            <p><strong>Адреса:</strong> ${address.value}</p>
        `;
    } else {
        resultDiv.classList.remove('success');
        resultDiv.textContent = 'Будь ласка, виправте помилки у формі.';
    }
});