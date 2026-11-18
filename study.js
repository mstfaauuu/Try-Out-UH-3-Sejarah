const KISI = [
['Faktor Pendorong Pergerakan Nasional','Peserta didik dapat mengidentifikasi faktor eksternal yang memengaruhi lahirnya pergerakan nasional Indonesia.','PG'],
['Pengaruh Nasionalisme Asia (India)','Disajikan deskripsi bentuk perjuangan Mahatma Gandhi, peserta didik dapat menentukan istilah gerakan tersebut secara berurutan.','PG'],
['Pengaruh Nasionalisme Asia (Tiongkok)','Peserta didik dapat menyebutkan tokoh nasionalis Tiongkok pencetus ajaran San Min Chu I.','PG'],
['Transformasi Strategi Perjuangan (1908)','Peserta didik dapat menganalisis perbedaan mendasar karakter perjuangan bangsa Indonesia sebelum dan sesudah tahun 1908.','PG'],
['Organisasi Awal Pergerakan Nasional','Peserta didik dapat membandingkan perbedaan orientasi gerakan antara Budi Utomo dan Sarekat Islam.','PG'],
['Karakteristik Organisasi Pergerakan','Disajikan tiga karakteristik organisasi pergerakan, peserta didik dapat mengklasifikasikan pasangan organisasi yang tepat.','PG'],
['Makna Berdirinya Budi Utomo','Peserta didik dapat menjelaskan alasan historis ditetapkannya tanggal berdirinya Budi Utomo sebagai Hari Kebangkitan Nasional.','PG'],
['Tokoh Pendiri Indische Partij','Peserta didik dapat mengidentifikasi tiga tokoh pendiri Indische Partij yang dikenal sebagai Tiga Serangkai.','PG'],
['Perkembangan Sarekat Islam','Peserta didik dapat mengidentifikasi faktor utama yang mendorong pesatnya dukungan masyarakat terhadap Sarekat Islam.','PG'],
['Dinamika Internal Sarekat Islam','Peserta didik dapat menganalisis faktor pemicu perpecahan Sarekat Islam (SI Putih dan SI Merah) beserta dampak strategisnya.','PG'],
['Organisasi Keagamaan (Muhammadiyah & NU)','Peserta didik dapat membandingkan fokus gerakan pembaruan sosial dan pendidikan antara Muhammadiyah dan Nahdlatul Ulama.','PG'],
['Perkembangan Gerakan Pemuda','Disajikan perbandingan fokus gerakan pemuda periode 1915–1925 dan 1926–1928, peserta didik dapat menyimpulkan pergeseran orientasi gerakan pemuda.','PG'],
['Ikrar Sumpah Pemuda','Peserta didik dapat mengidentifikasi tiga pokok isi ikrar Sumpah Pemuda 28 Oktober 1928 dengan tepat.','PG'],
['Kongres Pemuda I','Peserta didik dapat menyebutkan tokoh pembicara dalam Kongres Pemuda I yang membahas perkembangan bahasa dan sastra Indonesia.','PG'],
['Arti Penting Sumpah Pemuda','Disajikan stimulus mengenai latar belakang Kongres Pemuda II, peserta didik dapat mengevaluasi arti penting Sumpah Pemuda bagi bangsa Indonesia.','PG'],
['Peran Pers pada Masa Pergerakan','Disajikan ilustrasi kemunculan surat kabar masa pergerakan, peserta didik dapat menganalisis kontribusi pers terhadap perkembangan nasionalisme.','PG'],
['Surat Kabar Masa Pergerakan','Disajikan dua ciri surat kabar radikal masa pergerakan, peserta didik dapat menentukan nama surat kabar yang dimaksud (De Express).','PG'],
['Fungsi Pers dalam Pergerakan Nasional','Disajikan lima pernyataan, peserta didik dapat menentukan tiga pernyataan yang merupakan peran pers pada masa pergerakan nasional.','PG'],
['Kondisi Kesehatan & Wabah Penyakit','Peserta didik dapat mengidentifikasi wabah penyakit menular utama yang melanda Hindia Belanda pada awal abad ke-20 (1910–1930-an).','PG'],
['Akhir Kekuasaan Kolonial Belanda','Peserta didik dapat menyebutkan peristiwa bersejarah yang menandai berakhirnya pemerintahan kolonial Belanda dan dimulainya pendudukan Jepang.','PG'],
['Faktor Perubahan Strategi Abad ke-20','Disajikan uraian perubahan bentuk perjuangan abad ke-20, peserta didik dapat menganalisis faktor-faktor penyebab munculnya organisasi modern.','PG Majemuk'],
['Dampak Jangka Panjang Sumpah Pemuda','Peserta didik dapat mengevaluasi tiga dampak jangka panjang peristiwa Sumpah Pemuda terhadap proses integrasi bangsa Indonesia.','PG Majemuk'],
['Perkembangan Organisasi Pergerakan','Disajikan lima karakteristik organisasi pergerakan nasional, peserta didik dapat menyimpulkan dinamika perkembangan organisasi pergerakan.','PG Majemuk'],
['Dampak Great Depression & Krisis Sosial','Disajikan teks kondisi ekonomi dan kesehatan tahun 1930-an, peserta didik dapat menyimpulkan hubungannya dengan stabilitas pemerintahan kolonial Belanda.','PG Majemuk'],
['Makna Historis Kapitulasi Kalijati','Disajikan narasi peristiwa Kapitulasi Kalijati 8 Maret 1942, peserta didik dapat mengevaluasi makna historisnya bagi perjalanan bangsa Indonesia.','PG Majemuk']
];
function conceptVisual(id){
 const maps={
  3:`<div class="concept-visual"><div class="concept-title">SAN MIN CHU I · TIGA PRINSIP RAKYAT</div><div class="concept-flow three"><div><b>MIN TSEN</b><span>Nasionalisme</span></div><div><b>MIN TSU</b><span>Demokrasi</span></div><div><b>MIN SHENG</b><span>Kesejahteraan</span></div></div></div>`,
  4:`<div class="concept-visual"><div class="concept-title">TRANSFORMASI STRATEGI PERJUANGAN</div><div class="concept-flow"><div><b>SEBELUM 1908</b><span>Kedaerahan · fisik · pemimpin tradisional · pedalaman</span></div><i>→</i><div><b>SESUDAH 1908</b><span>Nasional · organisasi · kaum terpelajar · kota</span></div></div></div>`,
  12:`<div class="concept-visual"><div class="concept-title">PERGESERAN GERAKAN PEMUDA</div><div class="concept-flow"><div><b>1915–1925</b><span>Organisasi pemuda bercorak kedaerahan</span></div><i>→</i><div><b>1926–1928</b><span>Persatuan pemuda dan identitas Indonesia</span></div></div></div>`,
  13:`<div class="concept-visual"><div class="concept-title">TIGA PILAR SUMPAH PEMUDA · 28 OKTOBER 1928</div><div class="concept-flow three"><div><b>01 · TANAH AIR</b><span>Indonesia</span></div><div><b>02 · BANGSA</b><span>Indonesia</span></div><div><b>03 · BAHASA</b><span>Bahasa Indonesia</span></div></div></div>`,
  19:`<div class="concept-visual"><div class="concept-title">GARIS WAKTU WABAH</div><div class="timeline"><div><b>1910–1936</b><span>Wabah pes di Pulau Jawa</span></div><div><b>1918–1919</b><span>Flu Spanyol menyebar luas</span></div></div></div>`,
  20:`<div class="concept-visual"><div class="concept-title">KAPITULASI KALIJATI</div><div class="timeline"><div><b>7 MARET 1942</b><span>Lembang dikuasai Jepang</span></div><div><b>8 MARET 1942</b><span>Belanda menyerah di Kalijati, Subang</span></div></div></div>`,
  24:`<div class="concept-visual"><div class="concept-title">RANTAI DAMPAK GREAT DEPRESSION</div><div class="concept-flow"><div><b>KRISIS GLOBAL</b><span>Permintaan dan harga komoditas turun</span></div><i>→</i><div><b>KRISIS HINDIA BELANDA</b><span>Ekspor, penerimaan, pekerjaan, pendapatan, dan daya beli melemah</span></div></div></div>`
 };
 return maps[id]||'';
}
async function loadStudyModules(){
 const data=await fetch('study-content.json').then(r=>{if(!r.ok)throw Error('Materi tidak ditemukan');return r.json()});
 const idx=document.getElementById('studyIndex'),content=document.getElementById('studyContent');
 idx.innerHTML=data.map(x=>`<a href="#lesson-${x.id}" class="study-index-link"><span>${String(x.id).padStart(2,'0')}</span>${x.title}</a>`).join('');
 content.innerHTML=data.map(x=>`<article class="lesson-card" id="lesson-${x.id}"><div class="lesson-number">INDIKATOR ${String(x.id).padStart(2,'0')} / 25</div><h2>${x.title}</h2><p>${x.body}</p>${conceptVisual(x.id)}${x.image?`<figure class="lesson-figure"><img src="${x.image}" alt="${x.caption||x.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('figure').hidden=true"><figcaption>${x.caption||''}</figcaption></figure>`:''}<div class="lesson-key"><b>Yang perlu diingat</b><ul>${x.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div><div class="lesson-tip"><b>Catatan belajar</b><p>${x.tip}</p></div></article>`).join('');
 document.getElementById('kisiRows').innerHTML=KISI.map((r,i)=>`<tr><td>${String(i+1).padStart(2,'0')}</td><td>${r[0]}</td><td>${r[1]}</td><td><span class="form-chip">${r[2]}</span></td></tr>`).join('');
}
function openStudyView(){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById('studyView').classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function openKisiView(){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById('kisiView').classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
document.addEventListener('DOMContentLoaded',()=>{
 document.getElementById('openStudy')?.addEventListener('click',openStudyView);
 document.getElementById('openKisi')?.addEventListener('click',openKisiView);
 document.getElementById('studyBack')?.addEventListener('click',()=>{document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById('homeView').classList.add('active');});
 document.getElementById('kisiBack')?.addEventListener('click',()=>{document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById('homeView').classList.add('active');});
 loadStudyModules().catch(e=>{document.getElementById('studyContent').innerHTML='<p>Materi gagal dimuat. Pastikan study-content.json berada di folder yang sama.</p>';});
});
