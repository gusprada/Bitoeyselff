let currentLang = "th";

function switchLanguage() {
    currentLang = currentLang === "th" ? "en" : "th";
    updateText();
}

function updateText() {
    const text = {
        th: {
            question: "อยากได้อะไรถ้าถูกหวย?",
            enterNumber: "กรอกตัวเลข 6 หลัก",
            button: "ตรวจสอบผลรางวัล",
            resultLose: "น่าเสียดาย... เลขที่คุณกรอกไม่ตรงกับรางวัล ลองใหม่อีกครั้งไหม? โอกาสหน้าอาจเป็นของคุณ"
        },
        en: {
            question: "What do you want if you win the lottery?",
            enterNumber: "Enter your 6-digit number",
            button: "Check Results",
            resultLose: "Too bad... Your number didn't match. Want to try again? Maybe next time luck will be on your side!"
        }
    };

    document.getElementById("question").innerText = text[currentLang].question;
    document.getElementById("lotteryInput").placeholder = text[currentLang].enterNumber;
    document.getElementById("checkButton").innerText = text[currentLang].button;
}

function checkLucky() {
    const result = document.getElementById("result");
    result.innerText = currentLang === "th"
        ? "น่าเสียดาย... เลขที่คุณกรอกไม่ตรงกับรางวัล ลองใหม่อีกครั้งไหม? โอกาสหน้าอาจเป็นของคุณ"
        : "Too bad... Your number didn't match. Want to try again? Maybe next time luck will be on your side!";
    
    result.classList.remove("hidden");
}

updateText();
