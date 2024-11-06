function fetchUserData() {
    fetch('https://randomuser.me/api/?results=4')
        .then(response => {
            if (!response.ok) {
                throw new Error('Мережа не відповідає');
            }
            return response.json();
        })
        .then(data => {
            const users = data.results;
            const tableBody = document.getElementById("user-table").querySelector("tbody");
            tableBody.innerHTML = '';

            users.forEach(user => {
                const row = document.createElement("tr");
                row.classList.add("user-row");

                const imgCell = document.createElement("td");
                imgCell.classList.add("user-image");
                const img = document.createElement("img");
                img.src = user.picture.medium;
                imgCell.appendChild(img);
                row.appendChild(imgCell);

                const infoCell = document.createElement("td");
                infoCell.classList.add("user-info");
                infoCell.innerHTML = `
                    <strong>Ім'я:</strong> ${user.name.first} ${user.name.last}<br>
                    <strong>Місто:</strong> ${user.location.city}<br>
                    <strong>Поштовий індекс:</strong> ${user.location.postcode}<br>
                    <strong>Телефон:</strong> ${user.phone}
                `;
                row.appendChild(infoCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Помилка при отриманні даних:', error);
        });
}

fetchUserData();
