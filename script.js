// Function to check results
function checkResults() {
    const lottoNumber = document.getElementById('lotto').value;
    if (lottoNumber.length !== 6) {
        Swal.fire('กรุณากรอกเลข 6 หลัก');
        return;
    }

    const winningNumber = '123456'; // Example
    const resultMessage = (lottoNumber === winningNumber)
        ? 'ยินดีด้วย! คุณถูกรางวัล 🎉'
        : `น่าเสียดาย... เลขที่ออกคือ ${winningNumber}`;

    document.getElementById('resultMessage').innerHTML = resultMessage;
    showModal();
}

// Function to reset form
function resetForm() {
    document.getElementById('lotto').value = '';
    document.getElementById('year').value = '2568';
    document.getElementById('drawDate').value = '1 มีนาคม 2568';
}

// Function to show the modal
function showModal() {
    document.getElementById('resultModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}
