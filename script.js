// ============================================================
// DATABASE JADWAL PSAJ 2026 - LENGKAP SESUAI EXCEL
// ============================================================
const databasePSAJ = [
    // --- KELAS 7 ---
    { tingkat: "7", mapel: "PABP", link: "https://bit.ly/ASASPAI7abc2526", tgl: "2026-04-17", durasi: 90 },
    { tingkat: "7", mapel: "Pend. Pancasila", link: "https://bit.ly/SAS1PP7", tgl: "2026-04-17", durasi: 90 },
    { tingkat: "7", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI7ABC2526", tgl: "2026-04-18", durasi: 90 },
    { tingkat: "7", mapel: "Bahasa Inggris", link: "https://bit.ly/ASAS_ENGLISH7_2526", tgl: "2026-04-18", durasi: 120 },
    { tingkat: "7", mapel: "IPA", link: "https://bit.ly/ASASIPA_72526", tgl: "2026-04-20", durasi: 90 },
    { tingkat: "7", mapel: "IPS", link: "https://bit.ly/ASAS_IPS7Ganjil", tgl: "2026-04-20", durasi: 90 },
    { tingkat: "7", mapel: "Matematika", link: "https://bit.ly/ASASMTK7", tgl: "2026-04-21", durasi: 90 },
    { tingkat: "7", mapel: "PJOK", link: "https://forms.gle/wG9Rgi5rk5NqHffu9", tgl: "2026-04-21", durasi: 60 },
    { tingkat: "7", mapel: "SBDP", link: "https://bit.ly/AsasSenbud7_Agung25", tgl: "2026-04-22", durasi: 60 },
    { tingkat: "7", mapel: "Informatika", link: "https://bit.ly/ASASInformatika7251", tgl: "2026-04-22", durasi: 60 },
    { tingkat: "7", mapel: "Bahasa Sunda", link: "https://bit.ly/ASAS_BasaSunda_72526", tgl: "2026-04-22", durasi: 60 },

    // --- KELAS 8 ---
    { tingkat: "8", mapel: "PABP", link: "https://bit.ly/ASASPAIBP-82526", tgl: "2026-04-17", durasi: 90 },
    { tingkat: "8", mapel: "Pend. Pancasila", link: "https://bit.ly/SAS1PP8", tgl: "2026-04-17", durasi: 90 },
    { tingkat: "8", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI8AB2526", tgl: "2026-04-18", durasi: 90 },
    { tingkat: "8", mapel: "Bahasa Inggris", link: "https://bit.ly/SASenglish8", tgl: "2026-04-18", durasi: 120 },
    { tingkat: "8", mapel: "IPA", link: "https://bit.ly/ASASIPA_82526", tgl: "2026-04-20", durasi: 90 },
    { tingkat: "8", mapel: "IPS", link: "https://bit.ly/ASAS_IPS8Ganjil", tgl: "2026-04-20", durasi: 90 },
    { tingkat: "8", mapel: "Matematika", link: "https://bit.ly/ASASMTK8", tgl: "2026-04-21", durasi: 90 },
    { tingkat: "8", mapel: "PJOK", link: "https://forms.gle/9B8A3v4uN6yE7rT8", tgl: "2026-04-21", durasi: 60 },
    { tingkat: "8", mapel: "SBDP", link: "https://bit.ly/AsasSenbud8_Agung25", tgl: "2026-04-22", durasi: 60 },
    { tingkat: "8", mapel: "Informatika", link: "https://bit.ly/ASASInformatika825", tgl: "2026-04-22", durasi: 60 },
    { tingkat: "8", mapel: "Bahasa Sunda", link: "https://bit.ly/ASAS_BasaSunda_82526", tgl: "2026-04-22", durasi: 60 },

    // --- KELAS 9 ---
    { tingkat: "9", mapel: "PABP", link: "https://bit.ly/ASASPAIBP-92526", tgl: "2026-04-17", durasi: 90 },
    { tingkat: "9", mapel: "Pend. Pancasila", link: "https://bit.ly/ASASPPKN9-2526", tgl: "2026-04-17", durasi: 90 },
    { tingkat: "9", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI92526", tgl: "2026-04-18", durasi: 90 },
    { tingkat: "9", mapel: "Bahasa Inggris", link: "https://bit.ly/SAS9ENGLISH", tgl: "2026-04-18", durasi: 120 },
    { tingkat: "9", mapel: "IPA", link: "https://bit.ly/ASASIPA_92526", tgl: "2026-04-20", durasi: 90 },
    { tingkat: "9", mapel: "IPS", link: "https://bit.ly/ASAS_IPS9Ganjil", tgl: "2026-04-20", durasi: 90 },
    { tingkat: "9", mapel: "Matematika", link: "https://bit.ly/ASASMTK92526", tgl: "2026-04-21", durasi: 90 },
    { tingkat: "9", mapel: "PJOK", link: "https://forms.gle/4G9Rgi5rk5NqHffu9", tgl: "2026-04-21", durasi: 60 },
    { tingkat: "9", mapel: "SBDP", link: "https://bit.ly/AsasSenbud9_Agung25", tgl: "2026-04-22", durasi: 60 },
    { tingkat: "9", mapel: "Informatika", link: "https://bit.ly/ASASInformatika925", tgl: "2026-04-22", durasi: 60 },
    { tingkat: "9", mapel: "Bahasa Sunda", link: "https://bit.ly/ASAS_BasaSunda_92526", tgl: "2026-04-22", durasi: 60 }
];

// --- SISTEM LOGIKA ---

let isExamActive = false;
let timerInterval;
let streamObj = null;

function showTab(tab) {
    document.getElementById('tab-jadwal').style.display = tab === 'jadwal' ? 'block' : 'none';
    document.getElementById('tab-manual').style.display = tab === 'manual' ? 'block' : 'none';
    document.getElementById('btn-tab-jadwal').classList.toggle('active', tab === 'jadwal');
    document.getElementById('btn-tab-manual').classList.toggle('active', tab === 'manual');
}

function filterMapel() {
    const tingkat = document.getElementById('select-tingkat').value;
    const selectMapel = document.getElementById('select-mapel');
    selectMapel.innerHTML = '<option value="">-- Pilih Mata Pelajaran --</option>';
    
    const filtered = databasePSAJ.filter(m => m.tingkat === tingkat);
    filtered.forEach((m, index) => {
        let opt = document.createElement('option');
        opt.value = index; 
        opt.innerHTML = `${m.mapel} (${m.tgl})`;
        selectMapel.appendChild(opt);
    });
}

async function startExam(type) {
    const nama = document.getElementById('siswa-nama').value;
    if (!nama) return alert("Masukkan Nama Lengkap!");

    let link, durasi, mapel;

    if (type === 'jadwal') {
        const tingkat = document.getElementById('select-tingkat').value;
        const idx = document.getElementById('select-mapel').value;
        if (!tingkat || idx === "") return alert("Pilih Tingkat dan Mapel!");
        
        const data = databasePSAJ.filter(m => m.tingkat === tingkat)[idx];
        link = data.link; durasi = data.durasi; mapel = data.mapel;
    } else {
        link = document.getElementById('manual-url').value;
        durasi = parseInt(document.getElementById('manual-timer').value) || 0;
        mapel = "Ulangan Harian";
        if (!link.startsWith('http')) return alert("Link soal tidak valid!");
    }

    try {
        streamObj = await navigator.mediaDevices.getUserMedia({ video: true });
        document.getElementById('video').srcObject = streamObj;
        document.getElementById('camera-feed').style.display = 'block';
        await document.documentElement.requestFullscreen();

        isExamActive = true;
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('exam-header').style.display = 'block';
        document.getElementById('display-nama').innerText = nama;
        document.getElementById('display-mapel').innerText = mapel;
        document.getElementById('exam-frame').src = link;

        if (durasi > 0) startTimer(durasi);
        else document.getElementById('timer-display').innerText = "Unlimited";

    } catch (err) {
        alert("Kamera wajib aktif untuk pengawasan!");
    }
}

function startTimer(min) {
    let t = min * 60;
    timerInterval = setInterval(() => {
        let h = Math.floor(t / 3600);
        let m = Math.floor((t % 3600) / 60);
        let s = t % 60;
        document.getElementById('timer-display').innerText = 
            `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        if (--t < 0) { clearInterval(timerInterval); exitApp(); }
    }, 1000);
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
    if (confirm("Pastikan sudah klik SUBMIT. Keluar sekarang?")) {
        location.reload();
    }
}

document.addEventListener("visibilitychange", () => { if (document.hidden) triggerViolation("Dilarang Pindah Tab!"); });
document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement) triggerViolation("Dilarang Mengecilkan Layar!"); });
document.addEventListener('contextmenu', e => e.preventDefault());
