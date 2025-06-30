

document.getElementById('ip').addEventListener('click', function() {
    const ipAddress = document.querySelector('.ip-address').textContent; // ดึงข้อความ IP
    navigator.clipboard.writeText(ipAddress) // คัดลอกข้อความไปยังคลิปบอร์ด
        .then(() => {
            alert('IP ถูกคัดลอกแล้ว!'); // แสดงข้อความแจ้งเมื่อคัดลอกสำเร็จ
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
});


function changeTitle() {
    let titles = ["@n", "@na", "@nat", "@natt", "@natta", "@nattap", "@nattapa", "@nattapat", "@nattapat2", "@nattapat28", "@nattapat287", "@nattapat2871", "@nattapat287", "@nattapat28", "@nattapat2", "@nattapat", "@nattapa", "@nattap", "@natta", "@natt", "@nat", "@na", "@n", "@"];
    let index = 0;
    setInterval(() => {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    }, 250); 
}

// ฟังก์ชันที่ใช้ในการซ่อน popup
function hidePopup() {
    document.getElementById('popup').classList.add('hidden');
}

// เมื่อโหลดหน้าเว็บ
window.onload = function() {
    // ตั้งเวลาให้ popup หายไปหลังจาก 3 วินาที
    setTimeout(function() {
        hidePopup(); // เรียกใช้ฟังก์ชันซ่อน
    }, 3000); // 3000 มิลลิวินาที = 3 วินาที
};

function playClickSound() {
    var sound = document.getElementById('click-sound');
    sound.currentTime = 0; // รีเซ็ตเวลาเสียงให้เริ่มต้นใหม่
    sound.volume = 0.3;
    sound.play(); // เล่นเสียง
}

// เพิ่มเหตุการณ์คลิกที่ body
document.body.onclick = function() {
    playClickSound(); // เรียกใช้ฟังก์ชันเล่นเสียง
};




// ป้องกันการเปิด Developer Tools ด้วยการกด F12
document.addEventListener('keydown', function(event) {
    // ตรวจสอบว่ากด F12 หรือไม่
    if (event.key === 'F12') {
        event.preventDefault(); // ป้องกันการเปิด DevTools
        alert('Broo i know u what doing'); // แสดงข้อความเตือน
    }
});

