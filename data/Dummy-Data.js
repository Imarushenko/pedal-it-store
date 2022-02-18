// imports
import Category from "../models/Categories";
import Product from "../models/Products";

// categories
export const CATEGORIES = [
  new Category(
    "cat1",
    "Enduro Bikes",
    "https://i.pinimg.com/564x/3e/64/5a/3e645a0e9764ee8b357a5dc5586a4fd7.jpg"
  ),
  new Category(
    "cat2",
    "Downhill Bikes",
    "https://i.pinimg.com/564x/3a/1e/e3/3a1ee3ab59a6cb1c94d49703be3e5e5e.jpg"
  ),
  new Category(
    "cat3",
    "Trail / XC",
    "https://i.pinimg.com/564x/05/5c/a3/055ca3328257533c4ed7966c2cc16d56.jpg"
  ),
  new Category(
    "cat4",
    "Road Bikes",
    "https://i.pinimg.com/564x/d9/73/84/d97384383fdd5ccb88784a52c2405132.jpg"
  ),
  new Category(
    "cat5",
    "Cross-Country",
    "https://i.pinimg.com/564x/c7/eb/fe/c7ebfee8bcfd327eecd010ca29c3817c.jpg"
  ),
  new Category(
    "cat6",
    "Gear",
    "https://i.pinimg.com/564x/25/55/33/25553378d5fa6f0cdab171d1c3081683.jpg"
  ),
];

// cart
export let CART = [];

// products
export const PRODUCTS = [
  // enduro bikes products
  new Product(
    "proc1",
    ["cat1"],
    "https://pictures.ssg-service.com/286/286305_1795827_png_overview_4.png",
    "SCOTT RANSOM 900 TUNED AXS BIKE",
    "The Ransom. This Enduro Mountain Bike features 170mm of trail munchin', climb crushing, stage winning all day pinning mountain biking excellence.",
    "M",
    2599.0,
    300.0,
    4.5
  ),
  new Product(
    "proc2",
    ["cat1"],
    "https://pictures.ssg-service.com/286/286370_1795870_png_overview_4.png",
    "SCOTT CONTESSA RANSOM 910 BIKE",
    "The Contessa Ransom. This enduro mountain bike features 170mm of trail munchin', climb crushing, stage winning all day pinning mountain biking excellence.",
    "L",
    4499.0,
    200.0,
    3.2
  ),
  new Product(
    "proc3",
    ["cat1"],
    "https://pictures.ssg-service.com/286/286603_1795668_png_overview_4.png",
    "SCOTT RANSOM 600 BIKE",
    "The SCOTT Ransom 600 is the fast and capable mountain bike for kids that dreams are made of. mountain bike features 170mm of trail munchin', climb crushing.",
    "XL",
    6999.0,
    300.0,
    5
  ),
  new Product(
    "proc4",
    ["cat1"],
    "https://pictures.ssg-service.com/286/286308_1795830_png_overview_6.png",
    "SCOTT RANSOM 930 BIKE",
    "The Ransom. This Enduro Mountain Bike features 170mm of trail munchin', climb crushing, stage winning all day pinning mountain biking excellence.",
    "XL",
    6999.0,
    300.0,
    2.9
  ),

  new Product(
    "proc33",
    ["cat1"],
    "https://pictures.ssg-service.com/286/286305_1795827_png_overview_4.png",
    "SCOTT RANSOM 900 TUNED AXS BIKE",
    "The Ransom. This Enduro Mountain Bike features 170mm of trail munchin', climb crushing, stage winning all day pinning mountain biking excellence.",
    "M",
    2599.0,
    300.0,
    4.5
  ),
  new Product(
    "proc34",
    ["cat1"],
    "https://pictures.ssg-service.com/286/286370_1795870_png_overview_4.png",
    "SCOTT CONTESSA RANSOM 910 BIKE",
    "The Contessa Ransom. This enduro mountain bike features 170mm of trail munchin', climb crushing, stage winning all day pinning mountain biking excellence.",
    "L",
    4499.0,
    200.0,
    3.2
  ),

  // downhill  bikes products
  new Product(
    "proc5",
    ["cat2"],
    "https://pictures.ssg-service.com/286/286309_1795831_png_overview_4.png",
    "SCOTT GAMBLER 900 TUNED BIKE",
    "The Gambler Tuned is a downhill mountain bike that was designed for one thing and one thing only, pure, unadulterated speed.",
    "XL",
    4999.0,
    100.0,
    5
  ),

  new Product(
    "proc6",
    ["cat2"],
    "https://pictures.ssg-service.com/286/286310_1795832_png_overview_4.png",
    "SCOTT GAMBLER 910 BIKE",
    "The Gambler is a downhill mountain bike that was designed for one thing and one thing only, pure, unadulterated speed. We made it to get you to take lines you'd never thought imaginable, to make you want to go to the bathroom before your race run - twice.",
    "L",
    5999.0,
    400.0,
    4
  ),

  new Product(
    "proc7",
    ["cat2"],
    "https://pictures.ssg-service.com/286/286311_1795833_png_overview_4.png",
    "SCOTT GAMBLER 920 BIKE",
    "The Gambler is a downhill mountain bike that was designed for one thing and one thing only, pure, unadulterated speed. We made it to get you to take lines you'd never thought imaginable, to make you want to go to the bathroom before your race run - twice.",
    "S",
    3999.0,
    500.0,
    4.7
  ),

  new Product(
    "proc8",
    ["cat2"],
    "https://pictures.ssg-service.com/286/286604_1795669_png_overview_4.png",
    "SCOTT VOLTAGE YZ 0.1 BIKE",
    "The SCOTT Voltage YZ 0.1 is our Pro riders replica bike built around a high-end Alloy dirtjump mountain bike frame. Equipped with ultashort adjustable chain stays, a tapered headtube and high-end components, this bike is perfect for hitting the pumptrack, the dirtjumps, or jibbin' through the streets.",
    "M",
    7499.0,
    100.0,
    5
  ),

  new Product(
    "proc36",
    ["cat2"],
    "https://pictures.ssg-service.com/286/286309_1795831_png_overview_4.png",
    "SCOTT GAMBLER 900 TUNED BIKE",
    "The Gambler Tuned is a downhill mountain bike that was designed for one thing and one thing only, pure, unadulterated speed.",
    "XL",
    4999.0,
    100.0,
    5
  ),

  new Product(
    "proc35",
    ["cat2"],
    "https://pictures.ssg-service.com/286/286310_1795832_png_overview_4.png",
    "SCOTT GAMBLER 910 BIKE",
    "The Gambler is a downhill mountain bike that was designed for one thing and one thing only, pure, unadulterated speed. We made it to get you to take lines you'd never thought imaginable, to make you want to go to the bathroom before your race run - twice.",
    "L",
    5999.0,
    400.0,
    4
  ),

  // trail / xc bikes products
  new Product(
    "proc9",
    ["cat3"],
    "https://pictures.ssg-service.com/286/286604_1795669_png_overview_4.png",
    "SCOTT SPARK 900 ULTIMATE EVO AXS BIKE",
    "When you think of the perfect mountain bike, what comes to mind? For us, it's the all new Spark 900 Ultimate EVO AXS. Why, you ask? Well, beyond the fact that it is fast, lightweight and ultra capable on all sorts of terrain, it's just damned good lookin'.",
    "L",
    4799.0,
    150.0,
    3.5
  ),

  new Product(
    "proc10",
    ["cat3"],
    "https://pictures.ssg-service.com/286/286281_1795785_png_overview_6.png",
    "SCOTT VOLTAGE YZ 0.1 BIKE",
    "When you think of the perfect mountain bike, what comes to mind? For us, it's the all new Spark 900 Tuned AXS. Why, you ask? Well, beyond the fact that it is fast, lightweight and ultra capable on all sorts of terrain, it's just damned good lookin'.",
    "S",
    5599.0,
    120.0,
    4
  ),

  new Product(
    "proc11",
    ["cat3"],
    "https://pictures.ssg-service.com/286/286286_1795800_png_overview_4.png",
    "SCOTT SPARK 930 BIKE ORANGE",
    "When you think of the perfect mountain bike, what comes to mind? For us, it's the all new Spark 930. Why, you ask? Well, beyond the fact that it is fast, lightweight and ultra capable on all sorts of terrain, it's just damned good lookin'.",
    "XL",
    9599.0,
    220.0,
    5
  ),

  new Product(
    "proc12",
    ["cat3"],
    "https://pictures.ssg-service.com/286/286289_1795809_png_overview_4.png",
    "SCOTT SPARK 960 BIKE RED",
    "When you think of the perfect mountain bike, what comes to mind? For us, it's the all new Spark 960. Why, you ask? Well, beyond the fact that it is fast, lightweight and ultra capable on all sorts of terrain, it's just damned good lookin'.",
    "L",
    8599.0,
    315.0,
    4
  ),

  new Product(
    "proc32",
    ["cat3"],
    "https://pictures.ssg-service.com/286/286604_1795669_png_overview_4.png",
    "SCOTT SPARK 900 ULTIMATE EVO AXS BIKE",
    "When you think of the perfect mountain bike, what comes to mind? For us, it's the all new Spark 900 Ultimate EVO AXS. Why, you ask? Well, beyond the fact that it is fast, lightweight and ultra capable on all sorts of terrain, it's just damned good lookin'.",
    "L",
    4799.0,
    150.0,
    3.5
  ),

  new Product(
    "proc31",
    ["cat3"],
    "https://pictures.ssg-service.com/286/286281_1795785_png_overview_6.png",
    "SCOTT VOLTAGE YZ 0.1 BIKE",
    "When you think of the perfect mountain bike, what comes to mind? For us, it's the all new Spark 900 Tuned AXS. Why, you ask? Well, beyond the fact that it is fast, lightweight and ultra capable on all sorts of terrain, it's just damned good lookin'.",
    "S",
    5599.0,
    120.0,
    4
  ),

  // Road Bikes products
  new Product(
    "proc13",
    ["cat4"],
    "https://pictures.ssg-service.com/286/286414_1795890_png_overview_6.png",
    "SCOTT ADDICT RC ULTIMATE BIKE",
    "Lightweight? Obviously. Fast? You betcha. Now with more integration than ever before, the Addict RC Ultimate will give you all the competitive advantage you need, should that be for taking your town’s KOMs one by one, sprinting to that mountain top finish or edging out the rest of the field in your local criterium.",
    "M",
    3699.0,
    105.0,
    2.5
  ),

  new Product(
    "proc14",
    ["cat4"],
    "https://pictures.ssg-service.com/286/286415_1795891_png_overview_6.png",
    "SCOTT ADDICT RC PRO BIKE",
    "Lightweight? Obviously. Fast? You betcha. Now with more integration than ever before, the Addict RC Pro will give you all the competitive advantage you need, should that be for taking your town’s KOMs one by one, sprinting to that mountain top finish or edging out the rest of the field in your local criterium.",
    "L",
    4099.0,
    99.0,
    5
  ),

  new Product(
    "proc15",
    ["cat4"],
    "https://pictures.ssg-service.com/286/286416_1795892_png_overview_6.png",
    "SCOTT ADDICT RC 10 BIKE",
    "Light, fast, and ready to turn heads. The Addict RC 10 provides you with all of the competitive advantage you've ever dreamed of. Fully integrated cables and race-ready spec combine to give you the tool to sprint to a mountain top finish or win your local criterium.",
    "S",
    2099.0,
    199.0,
    4
  ),

  new Product(
    "proc16",
    ["cat4"],
    "https://pictures.ssg-service.com/286/286418_1795894_png_overview_6.png",
    "SCOTT ADDICT RC 15 BIKE CARBON BLACK",
    "Light, fast, and ready to turn heads. The Addict RC 15 provides you with all of the competitive advantage you've ever dreamed of. Fully integrated cables and race-ready spec combine to give you the tool to sprint to a mountain top finish or win your local criterium.",
    "XL",
    1199.0,
    299.0,
    3.6
  ),

  new Product(
    "proc30",
    ["cat4"],
    "https://pictures.ssg-service.com/286/286414_1795890_png_overview_6.png",
    "SCOTT ADDICT RC ULTIMATE BIKE",
    "Lightweight? Obviously. Fast? You betcha. Now with more integration than ever before, the Addict RC Ultimate will give you all the competitive advantage you need, should that be for taking your town’s KOMs one by one, sprinting to that mountain top finish or edging out the rest of the field in your local criterium.",
    "M",
    3699.0,
    105.0,
    2.5
  ),

  new Product(
    "proc29",
    ["cat4"],
    "https://pictures.ssg-service.com/286/286415_1795891_png_overview_6.png",
    "SCOTT ADDICT RC PRO BIKE",
    "Lightweight? Obviously. Fast? You betcha. Now with more integration than ever before, the Addict RC Pro will give you all the competitive advantage you need, should that be for taking your town’s KOMs one by one, sprinting to that mountain top finish or edging out the rest of the field in your local criterium.",
    "L",
    4099.0,
    99.0,
    5
  ),

  //Cross-Country products
  new Product(
    "proc17",
    ["cat5"],
    "https://pictures.ssg-service.com/280/280825_1699423_png_overview_10.png",
    "SCOTT SUB CROSS 20 MEN BIKE",
    "The SCOTT SUB Cross 20 emphasizes comfort and convenience for touring and transportation. Equipped with a lockout fork and Syncros components, the SUB Cross is set up perfectly for your excursions.",
    "M",
    3999.0,
    99.0,
    4.9
  ),

  new Product(
    "proc18",
    ["cat5"],
    "https://pictures.ssg-service.com/280/280826_1699424_png_overview_10.png",
    "SCOTT SUB CROSS 20 LADY BIKE",
    "The SCOTT SUB Cross 20 emphasizes comfort and convenience for touring and transportation. Equipped with a lockout fork and Syncros components, the SUB Cross is set up perfectly for your excursions.",
    "M",
    4999.0,
    100.0,
    3.5
  ),

  new Product(
    "proc19",
    ["cat5"],
    "https://pictures.ssg-service.com/286/286592_1796020_png_overview_4.png",
    "SCOTT SUB CROSS 10 MEN BIKE",
    "The SCOTT SUB Cross 10 emphasizes comfort and convenience for touring and transportation. Equipped with a remote lockout fork and Syncros components, the SUB Cross is set up perfectly for your excursions.",
    "XL",
    7999.0,
    0.0,
    5
  ),

  new Product(
    "proc20",
    ["cat5"],
    "https://pictures.ssg-service.com/286/286593_1796021_png_overview_4.png",
    "SCOTT SUB CROSS 10 LADY BIKE",
    "The SCOTT SUB Cross 10 emphasizes comfort and convenience for touring and transportation. Equipped with a remote lockout fork and Syncros components, the SUB Cross is set up perfectly for your excursions.",
    "S",
    2000.0,
    59.0,
    5
  ),

  new Product(
    "proc27",
    ["cat5"],
    "https://pictures.ssg-service.com/280/280825_1699423_png_overview_10.png",
    "SCOTT SUB CROSS 20 MEN BIKE",
    "The SCOTT SUB Cross 20 emphasizes comfort and convenience for touring and transportation. Equipped with a lockout fork and Syncros components, the SUB Cross is set up perfectly for your excursions.",
    "M",
    3999.0,
    99.0,
    4.9
  ),

  new Product(
    "proc28",
    ["cat5"],
    "https://pictures.ssg-service.com/280/280826_1699424_png_overview_10.png",
    "SCOTT SUB CROSS 20 LADY BIKE",
    "The SCOTT SUB Cross 20 emphasizes comfort and convenience for touring and transportation. Equipped with a lockout fork and Syncros components, the SUB Cross is set up perfectly for your excursions.",
    "M",
    4999.0,
    100.0,
    3.5
  ),

  // gear prducts
  new Product(
    "proc21",
    ["cat6"],
    "https://pictures.ssg-service.com/281/2813927265_1799789_png_overview_2.png",
    "SCOTT+ HELMET",
    "Our Supersonic Collection of products was developed with one thing in mind - pure race speed. The SCOTT Centric Plus was designed and developed for our world-class road and mountain bike racers.",
    "S",
    199.0,
    29.0,
    4
  ),

  new Product(
    "proc22",
    ["cat6"],
    "https://pictures.ssg-service.com/275/2751981035_1799760_png_overview_2.png",
    "SCOTT ARX (CE) HELMET",
    "In-Mold TechnologyPolycarbonate Micro Shell, Everything we've learned from our high-end racing helmets has trickled down to the SCOTT Arx Plus - a versatile all-rounder. The SCOTT Nero Plus is our flagship full-face helmet that seamlessly.",
    "L",
    299.0,
    39.0,
    5
  ),

  new Product(
    "proc23",
    ["cat6"],
    "https://pictures.ssg-service.com/281/2811945024_1695606_png_overview_10.png",
    "SCOTT ROAD RC SHOE",
    "Mesh/microfiber upper. Our Supersonic Collection of products was developed with one thing in mind - pure race speed. that offers maximum stiffness and minimal weight.",
    "M",
    99.0,
    59.0,
    3.9
  ),

  new Product(
    "proc24",
    ["cat6"],
    "https://pictures.ssg-service.com/272/2728211008280_1501131_png_overview_14.png",
    "SCOTT PROSPECT GOGGLE",
    "Massive field of vision. The SCOTT Prospect Light Sensitive Goggle is an absolute highlight among off-road and motocross goggles.",
    "XL",
    499.0,
    0.0,
    4.5
  ),

  new Product(
    "proc25",
    ["cat6"],
    "https://s7d2.scene7.com/is/image/FoxRacing/28003002_2?$dw_pm1$&wid=400&hei=400",
    "SCOTT ROAD RC SHOE",
    "Mesh/microfiber upper. Our Supersonic Collection of products was developed with one thing in mind - pure race speed. that offers maximum stiffness and minimal weight.",
    "M",
    99.0,
    59.0,
    3.9
  ),

  new Product(
    "proc26",
    ["cat6"],
    "https://s7d2.scene7.com/is/image/FoxRacing/28156016_2?$dw_pm1$&wid=400&hei=400",
    "SCOTT PROSPECT GOGGLE",
    "Massive field of vision. The SCOTT Prospect Light Sensitive Goggle is an absolute highlight among off-road and motocross goggles.",
    "XL",
    499.0,
    0.0,
    4.5
  ),
];
