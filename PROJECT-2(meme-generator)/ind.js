const generateMemeBtn = document.querySelector(".meme_generator .generator_meme_button");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme_generator .meme_title");
const memeAuthor = document.querySelector(".meme_generator .meme-author");


const updateDetailes = (url,title,author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}
const generate_MEME = () => {
    // https://meme-api.com/gimme
    // https:/I /meme-api. herokuapp.com/gimme/wholesomememes
    
    fetch("https://meme-api.herokuapp.com/gimme/wholesomemes")
    .then((response) => response.json())
    .then((data) => {
        updateDetailes(data.url,data.title,data.author);
    });
};

generateMemeBtn.addEventlistener("click",generate_MEME);