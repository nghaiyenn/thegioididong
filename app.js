// list__product slider
let data = [
    {
        id: "1",
        img: "./img/list__product/iphone-15-pro-max-512gb-(4).png",
        name: "iPhone 15 Pro Max 512GB",
        priceSale: "39.690.000đ",
        price: "40.990.000đ",
        sale: "-3%",
        existence: "4/20 suất",
    },
{
        id: "2",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Bao da nắp gập iPad mini Apple MX4R2 ",
        priceSale: "645.000đ",
        price: "1.290.000đ",
        sale: "-50%",
        existence: "19/20 suất",
    },
    {
        id: "3",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "-14%",
        existence: "36/200 suất",
    },
    {
        id: "4",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/275434/TimerThumb/samsung-galaxy-a04-(12).jpg",
        name: "Samsung Galaxy A04 (3GB/32GB)",
        priceSale: "1.990.000đ",
        price: "2.990.000đ",
        sale: "-33%",
        existence: "40/50 suất",
    },
    {
        id: "5",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-2-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "-14%",
        existence: "36/200 suất",
    },
    {
        id: "6",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 86 2MP Ezviz C6N",
        priceSale: "550.000đ",
        price: "890.000đ",
        sale: "-14%",
        existence: "36/200 suất",
    },
    {
        id: "7",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "14%",
        existence: "36/200 suất",
    },
    {
        id: "8",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "14%",
        existence: "36/200 suất",
    }, {
        id: "9",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "14%",
        existence: "36/200 suất",
    },
    {
        id: "10",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "14%",
        existence: "36/200 suất",
    }, {
        id: "11",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "14%",
        existence: "36/200 suất",
    },
    {
        id: "12",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "14%",
        existence: "36/200 suất",
    },
];
const ListProduct = document.querySelector(".product");

const renderProductItem = (params) => {
    ListProduct.innerHTML = params
        .map((item) => {
            return `
           <li class="product-item d-flex col-2 ">
                                            <a href="./detail.html?${item.id}"
                                                class=" d-flex flex-column justify-content-center align-items-center">
                                                <img src="${item.img}" alt="${item.name}">
                                                <div class="name-product">${item.name}</div>
                                                <div class="price-sale">${item.priceSale}</div>
                                                <div class="price d-flex ">
                                                    <label for="">${item.price} </label>
                                                    <small>${item.sale}</small>
                                                </div>
                                                <div
                                                    class="fs-contain w-100 d-flex justify-content-center align-items-center">
                                                    <img class="w-h-15" src="./img/fs-iconfire.png" alt="">
                                                    <span class="justify-content-center">${item.existence} </span>
                                                </div>
                                            </a>
                                        </li>
         `;
        })
        .join("");
};
renderProductItem(data);


// deal-product '
let database = [
    {
        id: "1",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305659/TimerThumb/iphone-15-pro-max-512gb-(4).jpg",
        name: "iPhone 15 Pro Max 512GB",
        priceSale: "39.690.000đ",
        price: "40.990.000đ",
        sale: "-3%",
        existence: "4/20 suất",
    },
    {
        id: "2",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1662/251945/bao-da-smart-cover-cho-ipad-mini-nap-gap-apple-thumb-600x600.jpg",
        name: "Bao da nắp gập iPad mini Apple MX4R2 ",
        priceSale: "645.000đ",
        price: "1.290.000đ",
        sale: "-50%",
        existence: "19/20 suất",
    },
    {
        id: "3",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "-14%",
        existence: "36/200 suất",
    },
    {
        id: "4",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/275434/TimerThumb/samsung-galaxy-a04-(12).jpg",
        name: "Samsung Galaxy A04 (3GB/32GB)",
        priceSale: "1.990.000đ",
        price: "2.990.000đ",
        sale: "-33%",
        existence: "40/50 suất",
    },
    {
        id: "5",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-2-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "-14%",
        existence: "36/200 suất",
    }
];
const dealProductList = document.querySelector(".deal__product-list");

const renderdealProductList = (params) => {
    dealProductList.innerHTML = params
        .map((item) => {
            return `
           <li class="product-item d-flex w-100">
                                            <a href="#"
                                                class=" d-flex flex-column justify-content-center align-items-center">
                                                <img src="${item.img}" alt="${item.name}">
                                                <div class="name-product">${item.name}</div>
                                                <div class="price-sale">${item.priceSale}</div>
                                                <div class="price d-flex ">
                                                    <label for="">${item.price} </label>
                                                    <small>${item.sale}</small>
                                                </div>
                                                <div
                                                    class="fs-contain w-100 d-flex justify-content-center align-items-center">
                                                    <img class="w-h-15" src="./img/fs-iconfire.png" alt="">
                                                    <span class="justify-content-center">${item.existence} </span>
                                                </div>
                                            </a>
                                        </li>
         `;
        })
        .join("");
    // return result;
};
renderdealProductList(database);

// deal__product-online
let dataProductOnline = [
    {
        id: "1",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305659/TimerThumb/iphone-15-pro-max-512gb-(4).jpg",
        name: "iPhone 15 Pro Max 512GB",
        priceSale: "39.690.000đ",
        price: "40.990.000đ",
        sale: "-3%",
        existence: "4/20 suất",
    },
    {
        id: "2",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1662/251945/bao-da-smart-cover-cho-ipad-mini-nap-gap-apple-thumb-600x600.jpg",
        name: "Bao da nắp gập iPad mini Apple MX4R2 ",
        priceSale: "645.000đ",
        price: "1.290.000đ",
        sale: "-50%",
        existence: "19/20 suất",
    },
    {
        id: "3",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "-14%",
        existence: "36/200 suất",
    },
    {
        id: "4",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/275434/TimerThumb/samsung-galaxy-a04-(12).jpg",
        name: "Samsung Galaxy A04 (3GB/32GB)",
        priceSale: "1.990.000đ",
        price: "2.990.000đ",
        sale: "-33%",
        existence: "40/50 suất",
    },
    {
        id: "5",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-2-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
        price: "690.000đ",
        sale: "-14%",
        existence: "36/200 suất",
    }
];
const listProductOnline = document.querySelector(".list__product-online");

const renderlistProductOnline = (params) => {
    listProductOnline.innerHTML = params
        .map((item) => {
            return `
            <li class="product-item d-flex w-100">
            <a href="#"
                class=" d-flex flex-column justify-content-center align-items-center">
                <img src="${item.img}" alt="${item.name}">
                <div class="name-product">${item.name}</div>
                <div class="price-sale">${item.priceSale}</div>
                <div class="price d-flex ">
                    <label for="">${item.price} </label>
                    <small>${item.sale}</small>
                </div>
                <div
                    class="fs-contain w-100 d-flex justify-content-center align-items-center">
                    <img class="w-h-15" src="./img/fs-iconfire.png" alt="">
                    <span class="justify-content-center">${item.existence} </span>
                </div>
            </a>
        </li>
         `;
        })
        .join("");
    // return result;
};
renderlistProductOnline(dataProductOnline);

// list top
let datalistTopProduct = [
    {
        id: "1",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305659/TimerThumb/iphone-15-pro-max-512gb-(4).jpg",
        name: "iPhone 15 Pro Max 512GB",
    },
    {
        id: "2",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1662/251945/bao-da-smart-cover-cho-ipad-mini-nap-gap-apple-thumb-600x600.jpg",
        name: "Bao da nắp gập iPad mini Apple MX4R2 ",
    },
    {
        id: "3",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 Độ 2MP IMOU Ranger  ",
    },
    {
        id: "4",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/275434/TimerThumb/samsung-galaxy-a04-(12).jpg",
        name: "Samsung Galaxy A04 (3GB/32GB)",
    },
    {
        id: "5",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-2-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
    },
    {
        id: "6",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305659/TimerThumb/iphone-15-pro-max-512gb-(4).jpg",
        name: "iPhone 15 Pro Max 512GB",
    },
    {
        id: "7",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1662/251945/bao-da-smart-cover-cho-ipad-mini-nap-gap-apple-thumb-600x600.jpg",
        name: "Bao da nắp gập iPad mini Apple MX4R2 ",
    },
    {
        id: "8",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/314597/camera-ip-360-do-1080p-imou-ranger-2c-a22ep-l-thumb-600x600.jpg",
        name: "Camera IP 360 Độ 2MP IMOU Ranger  ",
    },
    {
        id: "9",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/275434/TimerThumb/samsung-galaxy-a04-(12).jpg",
        name: "Samsung Galaxy A04 (3GB/32GB)",
    },
    {
        id: "10",
        img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-2-600x600.jpg",
        name: "Camẻa IP 360 Độ 2MP IMOU Ranger  ",
        priceSale: "590.000đ",
    }
];
const listTopProduct = document.querySelector(".list__top-product");

const renderlistTopProduct = (params) => {
    listTopProduct.innerHTML = params
        .map((item) => {
            return `
            <li class="top__product-item w-100 d-flex flex-column justify-content-center align-items-center">
            <a href="#">
                <img src="${item.img}" alt="${item.name}">
                <span>${item.name}</span>
            </a>
        </li>
         `;
        })
        .join("");
    // return result;
};
renderlistTopProduct(datalistTopProduct);