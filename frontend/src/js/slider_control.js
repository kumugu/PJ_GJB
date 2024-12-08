document.querySelectorAll(".slider-item img").forEach(img => {
    img.addEventListener("click", event => {
        event.preventDefault(); // 기본 클릭 동작 방지
        const gameUrl = img.parentElement.getAttribute("href");
        const windowFeatures = "width=400,height=300,top=200,left=100";

        // 새 창 열기
        window.open(gameUrl, "GameWindow", windowFeatures);
    });
});
