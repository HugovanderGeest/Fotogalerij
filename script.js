
const Link = [

 'https://media.nomadicmatt.com/amsterdamguide1.jpg',
 'https://www.telegraph.co.uk/content/dam/insurance/2016/04/06/amsterdam.jpg',
 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Netherlands/Amsterdam/amsterdam-dusk-lead-image-guide.jpg',
 'https://cache.marriott.com/marriottassets/marriott/AMSWH/amswh-exterior-8679-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgQcHVze7xsFUi6wT-M2U0wUQPsGDqRPhMrpraMHEptIzcsbwz',
 'https://nltimes.nl/sites/nl-times.nl/files/styles/main/public/2020/03/depositphotos_281566124_ds.jpg',
 'https://www.iamexpat.nl/sites/default/files/styles/article--full/public/amsterdam-houses-water.jpg?itok=0ca8qlHf',
 'https://cdn.getyourguide.com/img/tour_img-1499461-146.jpg',
 'https://www.telegraph.co.uk/content/dam/Travel/2020/March/amsterdam-red-light-district-coronavirus.jpg?imwidth=450',
 'https://i.guim.co.uk/img/media/c93b41394c9892576721cbf356c70876e867ba2e/0_0_3744_2246/master/3744.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=4c05fbe1534fe977da2d517fa419f1a7',
 'https://upload.wikimedia.org/wikipedia/commons/7/70/Amsterdam_Prinsengracht_Wallpaper.jpg',
 'https://images.adsttc.com/media/images/5e4c/9ab3/6ee6/7e0b/9d00/0a00/newsletter/De_Werf_overview_garden_OZ_Photo_Milan_Hofmans_2019-8_2880px.jpg?1582078630',
 'https://api.time.com/wp-content/uploads/2019/10/red-light-district-amsterdam.jpg',
 'https://www.planetware.com/photos-large/NL/netherlands-amsterdam-attractions-the-rijksmuseum.jpg',
 'https://www.goldentulip.com/styles/gt_banner/public/2019-11/Panorama-Amsterdam.jpg',
 'https://www.planetware.com/wpimages/2020/02/netherlands-amsterdam-top-attractions-amsterdam-museum.jpg',
 'https://media.radissonhotels.net/image/Radisson-Blu-Hotel-Amsterdam-City-Center/Exteriorview/16256-116431-f64810357_3XL.jpg?impolicy=MainGalleryImg',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzJjVcmlN5sogMWIA_g0Vo0nuyEcGPQ9xjIAKI2pf5SQZwbB2m',
 'https://dutchreview.com/wp-content/uploads/Copyright-Renzo-Gerritsen-NachtelijkAmsterdam.nl-0011-1.jpg',
 'https://live.staticflickr.com/7422/12663863995_a50d25ea22_b.jpg',
 'https://www.tripsavvy.com/thmb/8pLw0mRhOpoMvBaRC_QajMLoyrc=/3862x2172/smart/filters:no_upscale()/amstel-river-and-surroundings-in-amsterdam-netherlands-638153370-5b6cab7ec9e77c002565a9c7.jpg'
];

const vast = document.getElementById('container');

function plak(url) {
    let item = document.createElement('div');
    item.className = 'item';
    
    let foto = document.createElement('img'); 
    foto.src = url;
    foto.alt = 'Amsterdam';

    item.append(foto);
    vast.append(item);
}

for(let i=Link.length; i>0; i--) {
    let getal = Math.floor(Math.random()*Link.length)

    plak( Link[getal] );
    Link.splice(getal,1);
}