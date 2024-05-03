const filmRow = document.querySelector(".filmRow");

const inp = document.querySelector(".form-control");
const btnforSearch = document.querySelector(".btnforSearch")

const loadMore = document.querySelector(".load-more-btn")

const url = "https://freetestapi.com/api/v1/cars"

  let img=["https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1280.jpg",
  "https://cars.usnews.com/pics/size/640x420/images/Auto/custom/15550/2024_Honda_Civic_Angular_Front_1.jpg",
  "https://cdn.motor1.com/images/mgl/6ZpqJk/s3/ford-mustang-electric-by-charge-cars.jpg",
  "https://www.clickheretesting.com/LexingtonParkCBG/research/2023/equinox/images/mlp-img-ext.jpg",
  "https://media.ed.edmunds-media.com/nissan/altima/2020/oem/2020_nissan_altima_sedan_25-platinum_fq_oem_1_1600.jpg",
  "https://car-images.bauersecure.com/wp-images/12603/bmw3series_200.jpg",
  "https://www.motortrend.com/uploads/sites/5/2020/07/2018-Tesla-Model-3-18.jpg?w=768&width=768&q=75&format=webp",
  "https://upload.wikimedia.org/wikipedia/commons/b/b7/2017_Audi_Q5_%28FY%29_TDI_Sport_quattro_ultra_wagon_%282018-09-17%29_01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mercedes-Benz_W214_1X7A1841.jpg",
  "https://media.ed.edmunds-media.com/chevrolet/tahoe/2023/oem/2023_chevrolet_tahoe_4dr-suv_high-country_fq_oem_1_1600.jpg",
  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/subaru-outback-review-2023-01-cornering-front.jpg?itok=3hMVk59q",
  "https://media.ed.edmunds-media.com/lexus/rx-350/2023/oem/2023_lexus_rx-350_4dr-suv_f-sport_fq_oem_1_1600.jpg",
  "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150f-150/2024/collections/dm/24_FRD_F15_62093.tif?croppathe=1_16x9&wid=900",
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAldkXw5gSa_OTnqteXhHzNsujVGl0alxdrtOEAuJTA&s",
  "https://cdn.yenisabah.az/resize.php?w=750&h=422&file=image_750x422_654655d6762c9.jpg",
  "https://media.ed.edmunds-media.com/tesla/model-y/2024/oem/2024_tesla_model-y_4dr-suv_performance_fq_oem_1_1600.jpg",
  "https://media.ed.edmunds-media.com/chevrolet/silverado-2500hd/2024/oem/2024_chevrolet_silverado-2500hd_crew-cab-pickup_high-country_fq_oem_1_1600.jpg",
  "https://cdn.motor1.com/images/mgl/P3WnPA/s3/2023-ford-escape-phev.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulS3Yl3Gqq_iA9Aeo3qrAnyhuGrwUyFlY5-8Wf5Iqzw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX4wefjCiudmUaZCfKtGFYyl7A9-LHvq6ajETAE8H8w&s",
  "https://www.motortrend.com/uploads/sites/5/2021/05/2021-honda-accord-sport-2-0t-15.jpg",
  "https://cdn.motor1.com/images/mgl/LZNyl/s3/2021-jeep-grand-cherokee-l-exterior.jpg",
  "https://cdn.motor1.com/images/mgl/LZNyl/s3/2021-jeep-grand-cherokee-l-exterior.jpg",
  "https://2684054.fs1.hubspotusercontent-na1.net/hubfs/2684054/2025-Ford-Explorer-ST-hero-credit-ford.jpg",
  "https://autoreview.ru/images/Article/1547/Article_154771_860_575.jpg",
  "https://www.autocar.co.uk/sites/autocar.co.uk/files/audi-a4-rt-2015-0024_0.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/6604f74b27ca13d2f957bc97/2025-subaru-forester/960x0.jpg?format=jpg&width=960",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg",
  "https://cars.usnews.com/static/images/Auto/custom/15320/2024_Kia_Telluride_Angular_Front_1.jpg"]



function ProductLoad() {
fetch(url)
    .then(res=> res.json())
    .then(datas => {
        console.log(datas)
        for(let i = 0; i < datas.length; i++) {
            filmRow.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${img[i]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${datas[i].make}</h5>
              <p class="card-title"></p>${datas[i].model}</p>
              <p class="card-title"></p>${datas[i].year}</p>
              <p class="card-title"></p>${datas[i].engine}</p>
              <p class="card-title"></p>${datas[i].horsepower}</p>

              

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        }
    })  
}

ProductLoad();

loadMore.addEventListener("click", () => {
  ProductLoad();
});

fetch(url)
    .then(res=> res.json())
    .then(datas => {
        console.log(datas)
        for(let i = 0; i < datas.length; i++) {
            filmRow.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${img[i]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${datas[i].make}</h5>
              <p class="card-title"></p>${datas[i].model}</p>
              <p class="card-title"></p>${datas[i].year}</p>
              <p class="card-title"></p>${datas[i].engine}</p>
              <p class="card-title"></p>${datas[i].horsepower}</p>

              

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        }
    })  
    
btnforSearch.addEventListener("click", function() {
  const searchItem = inp.value.toLowerCase().trim()

  fetch(url)
  .then(res=> res.json())
  .then(datas => {

    filmRow.innerHTML = ''

    datas.forEach((data,i) => {
      if(data.make.toLowerCase().includes(searchItem)) {
        filmRow.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${img[i]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datas[i].make}</h5>
          <p class="card-title"></p>${datas[i].model}</p>
          <p class="card-title"></p>${datas[i].year}</p>
          <p class="card-title"></p>${datas[i].engine}</p>
          <p class="card-title"></p>${datas[i].horsepower}</p>

          

          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      }
    });
   })  
})

