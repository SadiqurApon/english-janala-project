const loadLassons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) => displayLessons(json.data));
};
const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then(data => displayLevelWord(data.data));
};

// "id": 4,
//       "level": 5,
//       "word": "Diligent",
//       "meaning": "পরিশ্রমী",
//       "pronunciation": "ডিলিজেন্ট"

const displayLevelWord = (words) => {
    // console.log(words);
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    words.forEach(word => {
        console.log(word);
        const cardwordDiv = document.createElement("div");
        cardwordDiv.innerHTML = ` 
        <div class="bg-white py-10 px-4 text-center rounded-xl shadow-sm space-y-4">
            <h2 class="font-bold text-3xl">${word.word}</h2>
            <p class="font-normal text-xl">Meaning / Pronounciation</p>
            <div class="font-semibold text-3xl font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-low"></i></button>
            </div>
        </div>
        `
        wordContainer.append(cardwordDiv);
    });
};

const displayLessons = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    for (const lesson of lessons) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-sharp fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `
        levelContainer.appendChild(btnDiv);
    }
}
loadLassons();
