function checkResults() {
    const lotto = document.getElementById("lotto").value.trim();
    const resultMessage = document.getElementById("resultMessage");
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    
    if (lotto.length !== 6) {
        resultMessage.innerHTML = "กรุณากรอกเลขสลาก 6 หลัก";
        resultModal.show();
        return;
    }

    const winningNumber = Math.floor(100000 + Math.random() * 900000); // Random winning number
    if (lotto === winningNumber.toString()) {
        resultMessage.innerHTML = `ยินดีด้วย! เลขที่คุณกรอกตรงกับรางวัล 🎉<br>เลขที่ออก: ${winningNumber}`;
    } else {
        resultMessage.innerHTML = `น่าเสียดาย... เลขที่คุณกรอกไม่ตรงกับรางวัล 😢<br>เลขที่ออก: ${winningNumber}`;
    }

    resultModal.show();
}

function resetForm() {
    document.getElementById("lotto").value = '';
    document.getElementById("resultMessage").innerHTML = '';
}
