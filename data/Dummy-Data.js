// imports
import Category from "../models/Categories";
import Product from "../models/Products";

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
    "Cat6",
    "Gear",
    "https://i.pinimg.com/564x/25/55/33/25553378d5fa6f0cdab171d1c3081683.jpg"
  ),
];

// TODO reviews
export const PRODUCTS = [
    new Product("proc1", ["cat1"], "https://pictures.ssg-service.com/286/286305_1795827_png_overview_4.png", "SCOTT RANSOM 900 TUNED AXS BIKE", "The Ransom. This Enduro Mountain Bike features 170mm of trail munchin', climb crushing, stage winning all day pinning mountain biking excellence.", "M", 2599.00, 300.00),
]
