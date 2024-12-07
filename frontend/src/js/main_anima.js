document.addEventListener("DOMContentLoaded", () => {
    const leftToggle = document.getElementById("left-toggle");
    const leftPanel = document.getElementById("left-panel");
    const rightToggle = document.getElementById("right-toggle");
    const rightPanel = document.getElementById("right-panel");

    // 좌측 패널 숨기기/복원
    leftToggle.addEventListener("click", () => {
        leftPanel.classList.toggle("hidden");
        leftToggle.textContent = leftPanel.classList.contains("hidden") ? "▶" : "◀";
    });

    // 우측 패널 숨기기/복원
    rightToggle.addEventListener("click", () => {
        rightPanel.classList.toggle("hidden");
        rightToggle.textContent = rightPanel.classList.contains("hidden") ? "◀" : "▶";
    });
});


// 채팅창 (임시)
document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.querySelector(".chat-window");
    const chatInput = document.querySelector(".chat-input input");
    const chatButton = document.querySelector(".chat-input button");

    // 새로운 메시지를 추가하는 함수
    const addMessage = (message) => {
        const messageItem = document.createElement("li");
        messageItem.textContent = message;
        chatWindow.querySelector("ul").appendChild(messageItem);

        // 스크롤을 최신 메시지로 이동
        chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    // 버튼 클릭 시 메시지 추가
    chatButton.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message);
            chatInput.value = ""; // 입력창 비우기
        }
    });
});


// 로그인 동작 추가 (임시)
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("visible");
    });

    const loginBtn = document.querySelector(".login-btn");
    loginBtn.addEventListener("click", () => {
        alert("Login functionality to be implemented!");
    });
});


// 아스키 애니메이션
document.addEventListener("DOMContentLoaded", () => {
    const lines = document.getElementById("ascii-game").innerText.split("\n");
    const asciiContainer = document.getElementById("ascii-game");
    asciiContainer.innerHTML = ""; // 초기화

    const lineAppearDuration = 200; // 각 줄이 등장하는 간격 (ms)
    const fullShowDuration = 6000; // 전체가 보여지는 시간 (ms) - 연장
    const lineDisappearDuration = 200; // 각 줄이 사라지는 간격 (ms)
    const transitionDuration = 600; // 줄의 이동 애니메이션 지속 시간 (ms)
    const cycleDelay = 2000; // 전체 사이클 간 지연 시간 (ms)

    // 첫 번째 애니메이션 - 등장
    const showLines = () => {
        lines.forEach((line, index) => {
            const lineElement = document.createElement("div");
            lineElement.textContent = line;
            lineElement.style.opacity = "0"; // 초기 상태: 보이지 않음
            lineElement.style.transform = "translateY(20px)"; // 초기 위치: 아래로 이동
            lineElement.style.transition = `all ${transitionDuration}ms ease-out`; // 애니메이션 지속 시간 설정
            asciiContainer.appendChild(lineElement);

            setTimeout(() => {
                lineElement.style.opacity = "1"; // 보이기
                lineElement.style.transform = "translateY(0)"; // 원래 위치로
            }, index * lineAppearDuration); // 각 줄마다 등장 딜레이
        });
    };

    // 두 번째 애니메이션 - 사라짐
    const hideLines = () => {
        Array.from(asciiContainer.children).forEach((lineElement, index) => {
            setTimeout(() => {
                lineElement.style.opacity = "0"; // 보이지 않게
                lineElement.style.transform = "translateY(20px)"; // 아래로 이동
            }, index * lineDisappearDuration); // 각 줄마다 사라짐 딜레이
        });
    };

    // 전체 반복 애니메이션
    const animateAscii = () => {
        showLines();

        setTimeout(() => {
            hideLines();
        }, lines.length * lineAppearDuration + fullShowDuration); // 모든 줄이 등장한 후 전체 보여짐 시간 대기

        setTimeout(() => {
            asciiContainer.innerHTML = ""; // 줄 제거
        }, lines.length * lineAppearDuration + fullShowDuration + lines.length * lineDisappearDuration);

        setTimeout(() => {
            animateAscii(); // 다음 사이클 시작
        }, lines.length * lineAppearDuration + fullShowDuration + lines.length * lineDisappearDuration + cycleDelay);
    };

    // 첫 번째 사이클 시작
    animateAscii();
});


