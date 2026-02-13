const loadLassons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) => displayLessons(json.data));
};

const displayLessons = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    for(const lesson of lessons){
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-sharp fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `
        levelContainer.appendChild(btnDiv);
    }
}
loadLassons();
