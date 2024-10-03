function cari(){
    var carikan = [ 
        document.getElementById("search"),
        document.getElementById("bodyd"),
        document.querySelector(".cari"),
        document.querySelector(".search-container")

    ];
    carikan.forEach(function (carikan) {
       carikan.classList.toggle('mencari') ;
    });
}

function dark(){
    var darkmod = [ 
        document.getElementById("bodyd"),
        document.getElementById("txtlogo-d"),
        document.getElementById("darkmodbtn"),
        document.getElementById("logo-d"),
        document.getElementById("cari-d"),
        document.querySelector("section"),
        ...document.querySelectorAll(".kanan"),
        ...document.querySelectorAll(".kiri"),
        document.querySelector(".github"),
        document.querySelector(".end"),
        document.querySelector(".back-logo"),
        

    ];
    darkmod.forEach(function (darkmod) {
       darkmod.classList.toggle('hym') ;
    });
}

const atas = ScrollReveal({
    
    distance: '40px',
    duration: 1000,
    opacity:0,
    origin: 'top',
    reset: true ,
})
atas.reveal('header', {})

const bawah = ScrollReveal({
    
    distance: '40px',
    duration: 1000,
    opacity:0,
    origin: 'bottom',
    reset: true ,
})
bawah.reveal('.back-logo', {})
bawah.reveal('.div-surat', {})
bawah.reveal('#surah', {})
bawah.reveal('.logoku', {delay:1000})
bawah.reveal('.link:nth-child(n)', {delay:0})
bawah.reveal('.search-container', {delay:0})


const kiri = ScrollReveal({
    
    distance: '40px',
    duration: 1000,
    opacity:0,
    origin: 'left',
    reset: true ,
})
kiri.reveal('.hrkiri', {})


const kanan = ScrollReveal({
    
    distance: '40px',
    duration: 2000,
    opacity:0,
    origin: 'right',
    reset: true ,
})
kanan.reveal('.hrkanan', {})

const opacity = ScrollReveal({
    
    distance: '0px',
    duration: 1000,
    opacity:0,
    origin: 'top',
    reset: true ,
})

opacity.reveal('.end', {})


function filterItems() {
const searchInput = document.getElementById('search').value.toLowerCase();
const items = document.querySelectorAll('.link');
items.forEach(function(item) {
    const itemName = item.querySelector('.item').textContent.toLowerCase();
    if (itemName.includes(searchInput)) {
        item.classList.remove('hidden');
    } else {
        item.classList.add('hidden');
    }
});

if (searchInput === '') {
    items.forEach(function(item) {
        item.classList.remove('hidden');
    });
}
}

const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    }

    document.querySelector('.dark-mode').addEventListener('click', toggleDarkMode);