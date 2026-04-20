// ==========================================
// DATABASE JADWAL PSAJ LENGKAP (SESUAI EXCEL)
// ==========================================
const databaseUjian = [
    // --- KELAS 7 ---
    { tgl: "2026-06-17", tingkat: "7", rombel: "Semua", mapel: "PABP", link: "https://bit.ly/ASASPAI7abc2526", token: "PAI7", durasi: 90 },
    { tgl: "2026-06-17", tingkat: "7", rombel: "Semua", mapel: "Pend Pancasila", link: "https://bit.ly/SAS1PP7", token: "SAS1PP7", durasi: 90 },
    { tgl: "2026-06-18", tingkat: "7", rombel: "Semua", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI7ABC2526", token: "OKEKAPTEN!", durasi: 90 },
    { tgl: "2026-06-18", tingkat: "7", rombel: "Semua", mapel: "Bahasa Inggris", link: "https://bit.ly/ASAS_ENGLISH7_2526", token: "jangan asal tebak", durasi: 120 },
    { tgl: "2026-06-20", tingkat: "7", rombel: "Semua", mapel: "IPA", link: "https://bit.ly/ASASIPA_72526", token: "IPA100", durasi: 90 },
    { tgl: "2026-06-20", tingkat: "7", rombel: "Semua", mapel: "IPS", link: "https://bit.ly/ASAS_IPS7Ganjil", token: "PERUBAHANSOSIAL", durasi: 90 },
    { tgl: "2026-06-21", tingkat: "7", rombel: "Semua", mapel: "Matematika", link: "https://bit.ly/ASASMTK72526", token: "MTK7", durasi: 90 },
    { tgl: "2026-06-21", tingkat: "7", rombel: "Semua", mapel: "PJOK", link: "https://forms.gle/wG9Rgi5rk5NqHffu9", token: "PJOK7", durasi: 60 },
    { tgl: "2026-06-22", tingkat: "7", rombel: "Semua", mapel: "Seni Budaya", link: "https://bit.ly/AsasSenbud7_Agung25", token: "SBDP7", durasi: 60 },
    { tgl: "2026-06-22", tingkat: "7", rombel: "Semua", mapel: "Informatika", link: "https://bit.ly/ASASInformatika7251", token: "INFO7", durasi: 60 },
    { tgl: "2026-06-22", tingkat: "7", rombel: "Semua", mapel: "Bahasa Sunda", link: "https://bit.ly/ASAS_BasaSunda_72526", token: "SUNDA7", durasi: 60 },

    // --- KELAS 8 ---
    { tgl: "2026-06-17", tingkat: "8", rombel: "Semua", mapel: "PABP", link: "https://bit.ly/ASASPAIBP-82526", token: "BELAJARPAISAMPAITUA", durasi: 90 },
    { tgl: "2026-06-17", tingkat: "8", rombel: "Semua", mapel: "Pend Pancasila", link: "https://bit.ly/SAS1PP8", token: "SAS1PP8", durasi: 90 },
    { tgl: "2026-06-18", tingkat: "8", rombel: "8A", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI8AB2526", token: "OKEKAPTEN!", durasi: 90 },
    { tgl: "2026-06-18", tingkat: "8", rombel: "8B", mapel: "Bahasa Indonesia", link: "https://bit.ly/ASAS1-BI8AB2526", token: "OKEKAPTEN!", durasi: 90 },
    { tgl: "2026-06-18", tingkat: "8", rombel: "8C", mapel: "Bahasa Indonesia", link: "https://bit.ly/INDO8SAS", token: "SEMANGAT8", durasi: 90 },
    { tgl: "2026-06-18", tingkat: "8", rombel: "Semua", mapel: "Bahasa Inggris", link: "https://bit.ly/SASenglish8", token: "ICANDOIT!", durasi: 120 },
    { tgl: "2026-06-20", tingkat: "8", rombel: "8A", mapel: "IPA", link: "https://bit.ly/ASASIPA_82526", token: "IPA100", durasi: 90 },
    { tgl: "2026-06-20", tingkat: "8", rombel: "8B", mapel: "IPA", link: "https://bit.ly/ASASIPA8125", token: "AKUsayangAKU", durasi: 90 },
    { tgl: "2026-06-20", tingkat: "8", rombel: "8C", mapel: "IPA", link: "https://bit.ly/ASASIPA8125", token: "AKUsayangAKU", durasi: 90 },
    { tgl: "2026-06-20", tingkat: "8", rombel: "Semua", mapel: "IPS", link: "https://bit.ly/ASAS_IPS8Ganjil", token: "KEMAJEMUKANINDONESIA", durasi: 90 },
    { tgl: "2026-06-21", tingkat: "8", rombel: "Semua", mapel: "Matematika", link: "https://bit.ly/ASASMTK82526", token: "MTK8", durasi: 90 },
    { tgl: "2026-06-21", tingkat: "8", rombel: "Semua", mapel: "PJOK", link: "https://bit.ly/ASASPJOK8", token: "PJOK8", durasi: 60 },
    { tgl: "2026-06-22", tingkat: "8", rombel: "Semua", mapel: "Seni Budaya", link: "https://bit.ly/ASASSenbud82526", token: "SBDP8", durasi: 60 },
    { tgl: "2026-06-22", tingkat: "8", rombel: "Semua", mapel: "Informatika", link: "https://bit.ly/ASASInformatika82526", token: "INFO8", durasi: 60 },
    { tgl: "2026-06-22", tingkat: "8", rombel: "Semua", mapel: "Bahasa Sunda", link: "https://bit.ly/ASAS_BasaSunda_82526", token: "SUNDA8", durasi: 60 },

    // --- KELAS 9 ---
    { tgl: "2026-05-07", tingkat: "9", rombel: "Semua", mapel: "PABP", link: "https://bit.ly/ASASPAIBP-92526", token: "BELAJARPAISAMPAITUA", durasi: 90 },
    { tgl: "2026-05-04", tingkat: "9", rombel: "Semua", mapel: "Pend Pancasila", link: "https://bit.ly/SAS1PP9", token: "SAS1PP9", durasi: 90 },
    { tgl: "2026-05-06", tingkat: "9", rombel: "Semua", mapel: "Bahasa Indonesia", link: "https://bit.ly/9INDOSAS", token: "SEMANGAT", durasi: 90 },
    { tgl: "2026-05-05", tingkat: "9", rombel: "Semua", mapel: "Bahasa Inggris", link: "https://bit.ly/ASAS_ENGLISH9_2526", token: "Dibaca,bukan ditebak", durasi: 120 },
    { tgl: "2026-05-05", tingkat: "9", rombel: "Semua", mapel: "IPA", link: "https://bit.ly/IPA9ASAS25", token: "Aku SAYANG AKU", durasi: 90 },
    { tgl: "2026-05-06", tingkat: "9", rombel: "Semua", mapel: "IPS", link: "https://bit.ly/PSAJ_IPS_9_2026", token: "MinimalTauSejarah", durasi: 90 },
    { tgl: "2026-05-04", tingkat: "9", rombel: "Semua", mapel: "Matematika", link: "https://bit.ly/ASASMTK92526", token: "MTK9", durasi: 90 },
    { tgl: "2026-05-07", tingkat: "9", rombel: "Semua", mapel: "PJOK", link: "https://bit.ly/ASASPJOK9", token: "PJOK9", durasi: 60 },
    { tgl: "2026-05-07", tingkat: "9", rombel: "Semua", mapel: "Seni Budaya", link: "https://bit.ly/ASASSenbud92526", token: "SBDP9", durasi: 60 },
    { tgl: "2026-05-08", tingkat: "9", rombel: "Semua", mapel: "Informatika", link: "https://bit.ly/ASASInformatika92526", token: "INFO9", durasi: 60 },
    { tgl: "2026-05-08", tingkat: "9", rombel: "Semua", mapel: "Bahasa Sunda", link: "https://forms.gle/DGf4576PDZ7X7R388", token: "SundaTeuHese", durasi: 60 }
];

// KONFIGURASI SISTEM
const PIN_EXIT_PSAJ = "SMPYPKKP2026"; 
let timerInterval;
const today = new Date().toISOString().split('T')[0];
document.getElementById('date-display').innerText = "Tanggal: " + today;

// UPDATE ROMBEL
function updateRombel() {
    const t = document.getElementById('select-tingkat').value;
    const r = document.getElementById('select-rombel');
    r.innerHTML = '<option value="">-- Pilih Rombel --</option>';
    if(t) {
        let optS = document.createElement('option'); optS.value = "Semua"; optS.innerHTML = "Semua Kelas " + t; r.appendChild(optS);
        ["A","B","C","D"].forEach(l => {
            let o = document.createElement('option'); o.value = t+l; o.innerHTML = "Kelas "+t+l; r.appendChild(o);
        });
    }
}

// FILTER MAPEL BERDASARKAN TANGGAL & ROMBEL
function filterMapel() {
    const t = document.getElementById('select-tingkat').value;
    const r = document.getElementById('select-rombel').value;
    const m = document.getElementById('select-mapel');
    m.innerHTML = '<option value="">-- Pilih Mata Pelajaran --</option>';
    
    const match = databaseUjian.filter(i => 
        i.tgl === today && 
        i.tingkat === t && 
        (i.rombel === "Semua" || i.rombel === r || i.rombel.toLowerCase().includes(r.toLowerCase().replace(t, "")))
    );

    if(match.length > 0) {
        match.forEach(i => {
            let o = document.createElement('option'); 
            o.value = i.link; 
            o.dataset.token = i.token; 
            o.dataset.durasi = i.durasi; 
            o.innerHTML = i.mapel; 
            m.appendChild(o);
        });
    } else { 
        m.innerHTML = '<option value="">Tidak ada jadwal hari ini!</option>'; 
    }
}

// MULAI UJIAN
function startExam(mode) {
    let link = "", inTok = "", okTok = "", dur = 0;
    if(mode === 'jadwal') {
        const sel = document.getElementById('select-mapel');
        if(!sel.value || sel.value === "") return alert("Pilih Mapel!");
        link = sel.value; 
        inTok = document.getElementById('token-ujian').value;
        okTok = sel.options[sel.selectedIndex].dataset.token;
        dur = sel.options[sel.selectedIndex].dataset.durasi;
        if (inTok !== okTok) return alert("Token Salah!");
        document.getElementById('btn-exit').onclick = exitWithToken;
    } else {
        link = document.getElementById('manual-url').value;
        if(!link) return alert("Masukkan Link!");
        dur = 0;
        document.getElementById('btn-exit').onclick = exitSimple;
    }

    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('exam-frame').src = link;
    document.getElementById('exam-frame').style.display = 'block';
    document.getElementById('exam-header').style.display = 'flex';
    if(dur > 0) { startTimer(dur); document.getElementById('timer-container').style.display = 'inline'; } 
    else { document.getElementById('timer-container').style.display = 'none'; }
    document.documentElement.requestFullscreen().catch(() => {});
}

// TIMER
function startTimer(min) {
    let t = min * 60;
    timerInterval = setInterval(() => {
        let m = Math.floor(t / 60); let s = t % 60;
        document.getElementById('timer-display').innerText = `${m < 10 ? '0'+m:m}:${s < 10 ? '0'+s:s}`;
        if (--t < 0) { clearInterval(timerInterval); alert("Waktu Habis!"); location.reload(); }
    }, 1000);
}

// KELUAR UJIAN
function exitWithToken() {
    if (prompt("Masukkan Token Keluar (Admin):") === PIN_EXIT_PSAJ) { location.reload(); }
}

function exitSimple() {
    if (confirm("Sudah selesai mengerjakan?")) { location.reload(); }
}

// KEAMANAN
document.addEventListener('keydown', e => {
    if (e.ctrlKey && ['c','v','u','p','s'].includes(e.key)) e.preventDefault();
});

let viol = 0;
document.addEventListener("visibilitychange", () => {
    if (document.hidden) { viol++; document.getElementById('cheat-count').innerText = viol; alert("Dilarang pindah tab!"); }
});

function showTab(t) {
    document.getElementById('tab-jadwal').style.display = t === 'jadwal' ? 'block' : 'none';
    document.getElementById('tab-manual').style.display = t === 'manual' ? 'block' : 'none';
    document.getElementById('btn-tab-jadwal').classList.toggle('active', t === 'jadwal');
    document.getElementById('btn-tab-manual').classList.toggle('active', t === 'manual');
}
