// Membuat peta dengan koordinat tengah di Banten
var map = L.map('map').setView([-6.4058, 106.0640], 10);

// Menambahkan layer peta
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18
        }).addTo(map);


// Menambahkan marker untuk setiap lokasi
var locations = [
    {name: 'Gudang Rumput Laut " Surya Anugrah "', lat: -6.063061, lng: 106.126431, image: 'img/suryaanungrah2.jpg', description: 'Pantai Anyer adalah salah satu pantai terkenal di Banten.', } ,
    {name: 'Gudang Rumput Laut Kelompok Saluyu', lat: -6.008369, lng: 106.276080, image: 'img/saluyu.png', description: 'Gunung Krakatau adalah gunung berapi aktif yang terletak di Selat Sunda.'},
    {name: 'Panglong Rumput Laut Bang Jun', lat: -5.970242, lng: 106.308039, image: 'img/bangjun.jpg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: 'Desa Taman Jaya ', lat: -6.399844, lng: 106.128994, image: 'img/tamanjaya.jpg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: 'Ujung Kulon ', lat: -6.746413, lng: 105.331220, image: 'img/ujungkulon.jpg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: ' Desa cipanon ', lat: -6.512431, lng: 105.676429, image: 'img/cipanon.jpg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: ' Desa Ujung Jaya ', lat: -6.800693, lng: 105.505863, image: 'umang.jpg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: ' Desa Binuangeun ', lat: -6.844806, lng: 105.881827, image: 'img/binuangeun.jpeg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: ' Desa sawarna ', lat: -6.9363088, lng: 106.2431460, image: 'img/sawarna.jpeg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: ' Desa Karangkamulyan', lat: -6.876649, lng: 106.131617, image: 'umang.jpg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: ' Pantai Cimandiri', lat: -6.91012, lng: 106.17363, image: 'img/cimandiri.jpeg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},
    {name: ' Pelabuhan Karangantu', lat: -6.03659, lng: 106.16295, image: 'img/karangantu.jpg', description: 'Pulau Umang adalah destinasi wisata pulau di Banten yang menawarkan keindahan alam.'},

];

locations.forEach(function(location) {
    var marker = L.marker([location.lat, location.lng]).addTo(map);

    // Membuat konten popup dengan nama lokasi, gambar, dan tombol penjelasan
    var popupContent = `
        <h3>${location.name}</h3>
        <img src="${location.image}" alt="${location.name}" style="width:30%;height:auto;">
        <p>${location.description}</p>`;

      ///button onclick="showDetail()">Detail</button'    `;

    marker.bindPopup(popupContent);
});
//var detailButton = L.control({ position: 'topright' });

 // detailButton.onAdd = function(map) {
   // var div = L.DomUtil.create('div', 'detail-button leaflet-bar leaflet-control');
    //div.innerHTML = '<button onclick="showDetail()">Detail</button>';
    //return div;
  //};

 // detailButton.addTo(mymap);

  // Fungsi untuk menampilkan detail
  //function showDetail() {
    //alert('Ini adalah detail yang lebih lengkap.');
    // Di sini Anda bisa menambahkan logika untuk menampilkan detail sesuai kebutuhan.
  //}
// Fungsi untuk menampilkan penjelasan lokasi
//function showDescription(locationName) {
    //alert("Penjelasan untuk lokasi " + locationName);
//}

// Menambahkan popup pertama ke marker
//marker.bindPopup("<b>Nama Lokasi</b><br>Gambar: <img src='gambar.jpg' width='100'><br><button onclick='showDetail()'>Detail Lebih Lanjut</button>");

// Fungsi untuk menampilkan detail lebih lanjut
//function showDetail() {
  // Redirect ke halaman detail
  //window.location.href = "detail.html";
//}