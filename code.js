const games = [
    { title: "Star Wars Jedi Fallen Order", price: 25.99, discount: "30%", image: "jedi.jpg" },
    { title: "Call Of Duty MW II", price: 30.99, discount: "30%", image: "cod.jpg" },
    { title: "Grand Theft Auto V", price: 20.99, discount: "30%", image: "gta.jpg" },
    { title: "Fall Guys", price: 25.99, discount: "30%", image: "fallguys.jpg" },
    { title: "Sekiro Shadow Die Twice", price: 30.99, discount: "30%", image: "sekiro.jpg" },
    { title: "Horizon Forbidden West", price: 20.99, discount: "30%", image: "horizon.jpg" },
    { title: "Red Dead Redemption 2", price: 25.99, discount: "30%", image: "rd.jpg" },
    { title: "God Of War", price: 30.99, discount: "30%", image: "gow.jpg" },
    { title: "Cyberpunk 2077", price: 30.99, discount: "30%", image: "cp.jpg" },
    { title: "Elden Ring", price: 25.99, discount: "30%", image: "ring.jpg" },
    { title: "The Last Of Us", price: 30.99, discount: "30%", image: "tlou.jpg" },
    { title: "Spider Man", price: 20.99, discount: "30%", image: "spiderman.jpg" },
];

const gamesList = document.getElementById('games-list');

games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.discount}</p>
        <p class="price">$${game.price}</p>
    `;

    gamesList.appendChild(card);
});
