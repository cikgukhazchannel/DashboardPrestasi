/**
 * Menjana dan memaparkan lencana berdasarkan prestasi pelajar.
 * Lencana akan sentiasa dipaparkan; berwarna jika tercapai, kelabu jika tidak.
 * @param {object} student Objek data pelajar.
 */
function renderAchievements(student) {
    const container = document.getElementById('achievements-container');
    container.innerHTML = ''; // Kosongkan lencana lama
    let badgesHTML = '';

    // DATA LENCANA DENGAN 'subjectKey' YANG TELAH DIBETULKAN
    // Nama ini kini sepadan dengan nama dalam graf "Pecahan Markah" anda
    const badgeData = [
        { name: 'Jaguh Pengajian Am', subjectKey: 'PA 2', threshold: 52, icon: '🏆', color: 'yellow', theme: 'bg-yellow-100 border-yellow-400 text-yellow-800' },
        { name: 'Sejarawan Muda', subjectKey: 'SEJ 2', threshold: 52, icon: '🏛️', color: 'blue', theme: 'bg-blue-100 border-blue-400 text-blue-800' },
        { name: 'Jauhari Bahasa', subjectKey: 'BM 2', threshold: 52, icon: '🖋️', color: 'orange', theme: 'bg-orange-100 border-orange-400 text-orange-800' },
        { name: 'Sasterawan Harapan', subjectKey: 'KMK 2', threshold: 52, icon: '📚', color: 'purple', theme: 'bg-purple-100 border-purple-400 text-purple-800' }, // Saya andaikan nama subjeknya 'KMK 2'
        { name: 'Pakar Perniagaan', subjectKey: 'PP2', threshold: 52, icon: '💼', color: 'green', theme: 'bg-green-100 border-green-400 text-green-800' },
        { name: 'Skor Cemerlang', subjectKey: 'average', threshold: 80, icon: '⭐', color: 'yellow', theme: 'bg-yellow-100 border-yellow-400 text-yellow-800' }
    ];

    badgeData.forEach(badge => {
        // Logik mendapatkan skor kini akan berfungsi dengan betul
        const score = badge.subjectKey === 'average' ? student.average : (student.subjects[badge.subjectKey.toUpperCase()] || 0);

        if (score >= badge.threshold) {
            // JIKA TERCAPAI: Paparkan lencana yang berwarna-warni dan bercahaya
            badgesHTML += `
                <div class="badge ${badge.theme} badge-glow-${badge.color} text-center p-3 rounded-lg w-36 border-2" 
                     title="Hebat! Anda telah membuka lencana ini dengan skor ${Math.round(score)}%.">
                    <div class="text-5xl badge-icon">${badge.icon}</div>
                    <p class="text-sm font-semibold mt-2 badge-name">${badge.name}</p>
                </div>
            `;
        } else {
            // JIKA BELUM TERCAPAI: Paparkan lencana kelabu (terkunci)
            badgesHTML += `
                <div class="badge badge-locked text-center p-3 rounded-lg w-36 border-2 border-dashed" 
                     title="Belum tercapai. Perlu skor ${badge.threshold}% ke atas untuk membuka lencana ini.">
                    <div class="text-5xl badge-icon">${badge.icon}</div>
                    <p class="text-sm font-semibold mt-2 badge-name">${badge.name}</p>
                </div>
            `;
        }
    });

    container.innerHTML = badgesHTML;
}