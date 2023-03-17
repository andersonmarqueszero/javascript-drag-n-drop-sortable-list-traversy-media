const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const bestSellingFranchises = [
    "Mario",
    "Pokemon",
    "Call of Duty",
    "Grand Theft Auto",
    "FIFA",
    "The Legend of Zelda",
    "Sonic the Hedgehog",
    "Resident Evil",
    "Tetris",
    "Minecraft"
  ];

// Store listitems
 const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...bestSellingFranchises]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((game, index) => {
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
                <span class="number">${index +1}</span>
                <div class="draggable" draggable="true">
                    <p class="game-name">${game}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
}