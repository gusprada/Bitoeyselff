function checkResults() {
    const resultContainer = document.getElementById("result-container");
    const resultPopup = document.getElementById("result-popup");
    const resultMessage = document.getElementById("result");
    const winningNumber = Math.floor(100000 + Math.random() * 900000); // Random winning number
    const lotto = document.getElementById("lotto").value.trim();

    if (lotto.length !== 6) {
        resultMessage.innerHTML = "กรุณากรอกเลขสลาก 6 หลัก";
        openPopup();
        return;
    }

    if (lotto === winningNumber.toString()) {
        resultMessage.innerHTML = `ยินดีด้วย! เลขที่คุณกรอกตรงกับรางวัล 🎉<br>เลขที่ออก: ${winningNumber}`;
    } else {
        resultMessage.innerHTML = `น่าเสียดาย... เลขที่คุณกรอกไม่ตรงกับรางวัล 😢<br>เลขที่ออก: ${winningNumber}`;
    }

    openPopup();
}

function openPopup() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "flex";
}

function closePopup() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "none";
}

function resetForm() {
    document.getElementById("lotto").value = '';
    document.getElementById("result").innerHTML = '';
}
