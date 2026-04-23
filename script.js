// DATABASE LENGKAP PSAJ 2026
const databaseUjian = [
    // KELAS 7
    { tingkat: "7", mapel: "PABP", link: "https://bit.ly/ASASPAI7abc2526", tgl: "2026-04-17", durasi: 90, token: "PAI7" },
    { tingkat: "7", mapel: "Pend. Pancasila", link: "https://bit.ly/SAS1PP7", tgl: "2026-04-17", durasi: 90, token: "PP7" },
    { tingkat: "7", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI7ABC2526", tgl: "2026-04-18", durasi: 90, token: "BI7" },
    { tingkat: "7", mapel: "Bahasa Inggris", link: "https://bit.ly/ASAS_ENGLISH7_2526", tgl: "2026-04-18", durasi: 120, token: "ENG7" },
    { tingkat: "7", mapel: "IPA", link: "https://bit.ly/ASASIPA_72526", tgl: "2026-04-20", durasi: 90, token: "IPA7" },
    { tingkat: "7", mapel: "IPS", link: "https://bit.ly/ASAS_IPS7Ganjil", tgl: "2026-04-20", durasi: 90, token: "IPS7" },
    { tingkat: "7", mapel: "Matematika", link: "https://bit.ly/ASASMTK7", tgl: "2026-04-21", durasi: 90, token: "MTK7" },
    { tingkat: "7", mapel: "PJOK", link: "https://forms.gle/wG9Rgi5rk5NqHffu9", tgl: "2026-04-21", durasi: 60, token: "PJOK7" },
    { tingkat: "7", mapel: "SBDP", link: "https://bit.ly/AsasSenbud7_Agung25", tgl: "2026-04-22", durasi: 60, token: "SBD7" },
    { tingkat: "7", mapel: "Informatika", link: "https://bit.ly/ASASInformatika7251", tgl: "2026-04-22", durasi: 60, token: "TIK7" },
    { tingkat: "7", mapel: "Bahasa Sunda", link: "https://bit.ly/ASAS_BasaSunda_72526", tgl: "2026-04-22", durasi: 60, token: "SUN7" },

    // KELAS 8
    { tingkat: "8", mapel: "PABP", link: "https://bit.ly/ASASPAIBP-82526", tgl: "2026-04-17", durasi: 90, token: "PAI8" },
    { tingkat: "8", mapel: "Pend. Pancasila", link: "https://bit.ly/SAS1PP8", tgl: "2026-04-17", durasi: 90, token: "PP8" },
    { tingkat: "8", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI8AB2526", tgl: "2026-04-18", durasi: 90, token: "BI8" },
    { tingkat: "8", mapel: "Bahasa Inggris", link: "https://bit.ly/SASenglish8", tgl: "2026-04-18", durasi: 120, token: "ENG8" },
    { tingkat: "8", mapel: "IPA", link: "https://bit.ly/ASASIPA_82526", tgl: "2026-04-20", durasi: 90, token: "IPA8" },
    { tingkat: "8", mapel: "IPS", link: "https://bit.ly/ASAS_IPS8Ganjil", tgl: "2026-04-20", durasi: 90, token: "IPS8" },
    { tingkat: "8", mapel: "Matematika", link: "https://bit.ly/ASASMTK8", tgl: "2026-04-21", durasi: 90, token: "MTK8" },
    { tingkat: "8", mapel: "PJOK", link: "https://forms.gle/9B8A3v4uN6yE7rT8", tgl: "2026-04-21", durasi: 60, token: "PJOK8" },
    { tingkat: "8", mapel: "SBDP", link: "https://bit.ly/AsasSenbud8_Agung25", tgl: "2026-04-22", durasi: 60, token: "SBD8" },
    { tingkat: "8", mapel: "Informatika", link: "https://bit.ly/ASASInformatika825", tgl: "2026-04-22", durasi: 60, token: "TIK8" },
    { tingkat: "8", mapel: "Bahasa Sunda", link: "https://bit.ly/ASAS_BasaSunda_82526", tgl: "2026-04-22", durasi: 60, token: "SUN8" },

    // KELAS 9
    { tingkat: "9", mapel: "PABP", link: "https://bit.ly/ASASPAIBP-92526", tgl: "2026-05-07", durasi: 90, token: "PAI9" },
    { tingkat: "9", mapel: "Pend. Pancasila", link: "https://bit.ly/ASASPPKN9-2526", tgl: "2026-05-04", durasi: 90, token: "PP9" },
    { tingkat: "9", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI92526", tgl: "2026-05-06", durasi: 90, token: "BI9" },
    { tingkat: "9", mapel: "Bahasa Inggris", link: "https://bit.ly/SAS9ENGLISH", tgl: "2026-05-05", durasi: 120, token: "ENG9" },
    { tingkat: "9", mapel: "IPA", link: "https://bit.ly/ASASIPA_92526", tgl: "2026-0405-05", durasi: 90, token: "IPA9" },
    { tingkat: "9", mapel: "IPS", link: "https://bit.ly/PSAJ_IPS_9_2026", tgl: "2026-05-06", durasi: 90, token: "MinimalTauSejarah" },
    { tingkat: "9", mapel: "Matematika", link: "https://docs.google.com/forms/d/e/1FAIpQLScUL0P-yN3jQQHbhmmPfn-s9zJeywKM4d-jCbVi2d851IGYlg/viewform?usp=header", tgl: "2026-05-04", durasi: 90, token: "MTK9" },
    { tingkat: "9", mapel: "PJOK", link: "https://forms.gle/4G9Rgi5rk5NqHffu9", tgl: "2026-05-07", durasi: 60, token: "PJOK9" },
    { tingkat: "9", mapel: "SBDP", link: "https://bit.ly/AsasSenbud9_Agung25", tgl: "2026-05-07", durasi: 60, token: "SBD9" },
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
