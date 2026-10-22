// task 1
document.getElementById("heading-id").textContent = "Upcoming Campus Events";

// task2
document.querySelectorAll('.event-card').forEach(card => {
    card.classList.add('highlight');
});
// 1.  task 3
const nameInput = document.getElementById('name-input');
const displayName = document.getElementById('display-name');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    
    displayName.textContent = nameInput.value;
});
// task 4
const eventData = {
    title: "Annual Tech Symposium",
    date: "November 14, 2026"
};

// 2. Create the card container and its inner elements
const card = document.createElement('div');
card.classList.add('event-card');

const heading = document.createElement('h3');
heading.textContent = eventData.title;

const dateParagraph = document.createElement('p');
dateParagraph.textContent = eventData.date;

// 3. Assemble the card structure
card.appendChild(heading);
card.appendChild(dateParagraph);

// 4. Append the completed card to the container
document.getElementById('event-list').appendChild(card);


