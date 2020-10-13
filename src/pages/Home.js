import getData from "../utils/getData";
import Character from "./Character";



const Home = async () => {
    const characters = await getData();
    const view = `
    <div class="Characters">
        ${characters.results.map(character => `  
        <article class="charcter-item">
        <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}">
        </a>
        <h2>${character.name}</h2>
        </article>    
        `).join("")}
    </div>
    `;
    return view;
};

export default Home;