// DATABASE LENGKAP PSAJ 2026
const databaseUjian = [
   
    // KELAS 9
    { tingkat: "9", mapel: "PABP", link: "https://bit.ly/PSAJPAIBP2526", tgl: "2026-05-07", durasi: 90, token: "ALLAHBANTUSAYALULUS" },
    { tingkat: "9", mapel: "Pend. Pancasila", link: "https://forms.gle/tJFuapRJCFbJGws17", tgl: "2026-05-04", durasi: 90, token: "PSAJ2526PP9" },
    { tingkat: "9", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI92526", tgl: "2026-05-06", durasi: 90, token: "BI9" },
    { tingkat: "9", mapel: "Bahasa Inggris", link: "https://bit.ly/PSAJ_English2526", tgl: "2026-05-05", durasi: 120, token: "eng2526" },
    { tingkat: "9", mapel: "IPA", link: "https://forms.gle/Fm26nSSpXEvFERaAA", tgl: "2026-0405-05", durasi: 90, token: "IPAUS26" },
    { tingkat: "9", mapel: "IPS", link: "https://bit.ly/PSAJ_IPS_9_2026", tgl: "2026-05-06", durasi: 90, token: "MinimalTauSejarah" },
    { tingkat: "9", mapel: "Matematika", link: "https://docs.google.com/forms/d/e/1FAIpQLScUL0P-yN3jQQHbhmmPfn-s9zJeywKM4d-jCbVi2d851IGYlg/viewform?usp=header", tgl: "2026-05-04", durasi: 90, token: "SMPYPKKP2026" },
    { tingkat: "9", mapel: "PJOK", link: "https://forms.gle/rcrBqkYLEbKqrmgE9", tgl: "2026-05-07", durasi: 60, token: "passwordnyaapa?" },
    { tingkat: "9", mapel: "SBDP", link: "https://bit.ly/ASAJSBDP2526", tgl: "2026-05-07", durasi: 60, token: "BACAYANGBENER!" },
    { tingkat: "9", mapel: "Informatika", link: "https://bit.ly/ASASInformatika925", tgl: "2026-05-08", durasi: 60, token: "TIK9" },
    { tingkat: "9", mapel: "Bahasa Sunda", link: "https://forms.gle/4NxzRsnbhrToniEq5", tgl: "2026-05-08", durasi: 60, token: "SundaTeuHese" }
];

let isExamActive = false;
let timerInterval;

function showTab(t) {
    document.getElementById('tab-jadwal').style.display = t === 'jadwal' ? 'block' : 'none';
    document.getElementById('tab-manual').style.display = t === 'manual' ? 'block' : 'none';
    document.getElementById('btn-tab-jadwal').className = t === 'jadwal' ? 'active' : '';
    document.getElementById('btn-tab-manual').className = t === 'manual' ? 'active' : '';
}

function filterMapel() {
    const tkt = document.getElementById('select-tingkat').value;
    const sel = document.getElementById('select-mapel');
    sel.innerHTML = '<option value="">-- Pilih Mata Pelajaran --</option>';
    databaseUjian.filter(m => m.tingkat === tkt).forEach((m, i) => {
        let opt = document.createElement('option');
        opt.value = i; opt.innerHTML = `${m.mapel} (${m.tgl})`;
        sel.appendChild(opt);
    });
}

async function startExam(type) {
    const nama = document.getElementById('siswa-nama').value;
    if (!nama) return alert("Masukkan Nama!");

    let link, durasi, mapel;

    if (type === 'jadwal') {
        const tkt = document.getElementById('select-tingkat').value;
        const idx = document.getElementById('select-mapel').value;
        const tokenIn = document.getElementById('psaj-token').value.toUpperCase();

        if (!tkt || idx === "") return alert("Pilih Mapel!");
        const data = databaseUjian.filter(m => m.tingkat === tkt)[idx];

        // Kunci Tanggal
        const today = new Date().toISOString().split('T')[0];
        if (today !== data.tgl) return alert(`Hanya bisa dibuka tanggal: ${data.tgl}`);

        // Kunci Token
        if (tokenIn !== data.token) return alert("TOKEN SALAH!");

        link = data.link; durasi = data.durasi; mapel = data.mapel;
    } else {
        link = document.getElementById('manual-url').value;
        durasi = parseInt(document.getElementById('manual-timer').value) || 0;
        mapel = "Ulangan Harian";
        if (!link.startsWith('http')) return alert("Link tidak valid!");
    }

    isExamActive = true;
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('exam-header').style.display = 'block';
    document.getElementById('display-nama').innerText = nama;
    document.getElementById('display-mapel').innerText = mapel;
    document.getElementById('exam-frame').src = link;
    document.documentElement.requestFullscreen().catch(() => {});

    if (durasi > 0) startTimer(durasi);
    else document.getElementById('timer-display').innerText = "Unlimited";
}

function startTimer(min) {
    let t = min * 60;
    const display = document.getElementById('timer-display');
    const warningSound = document.getElementById('warning-sound');

    timerInterval = setInterval(() => {
        let h = Math.floor(t / 3600);
        let m = Math.floor((t % 3600) / 60);
        let s = t % 60;
        display.innerText = `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;

        // Peringatan 5 Menit
        if (t === 300) {
            warningSound.play();
            alert("Waktu sisa 5 menit! Segera selesaikan.");
        }

        // Peringatan 1 Menit (Visual Kedip)
        if (t <= 60 && t > 0) {
            display.parentElement.classList.add('timer-critical');
            if (t === 60) warningSound.play();
        }

        if (--t < 0) {
            clearInterval(timerInterval);
            autoSubmitAction();
        }
    }, 1000);
}

function autoSubmitAction() {
    isExamActive = false;
    document.getElementById('exam-header').style.display = 'none';
    document.getElementById('exam-frame').src = "";
    document.getElementById('times-up-overlay').style.display = 'flex';
    if (document.fullscreenElement) document.exitFullscreen();
}

function triggerViolation(msg) {
    if (!isExamActive) return;
    document.getElementById('alert-sound').play();
    document.getElementById('violation-msg').innerText = msg;
    document.getElementById('warning-overlay').style.display = 'flex';
}

function returnToFullscreen() {
    document.documentElement.requestFullscreen();
    document.getElementById('warning-overlay').style.display = 'none';
}

function exitApp() {
    if (confirm("Sudah kirim jawaban di Google Form?")) location.reload();
}

document.addEventListener("visibilitychange", () => { if (document.hidden) triggerViolation("Pindah Tab Terdeteksi!"); });
document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && isExamActive) triggerViolation("Wajib Fullscreen!"); });
