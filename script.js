document.addEventListener('DOMContentLoaded', () => {
    const tripInput = document.getElementById('tripName');
    const tripContainer = document.getElementById('tripContainer');
    const createButton = document.getElementById('createButton');

    createButton.addEventListener('click', () => {
        const tripName = tripInput.value.trim();
        if (tripName === '') {
            alert('Please enter a trip name.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = tripName;
        tripContainer.appendChild(listItem);
        tripInput.value = '';
    });
});
