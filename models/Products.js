// products class
class Product {
    constructor(product_id, category_id, productImage, product_title, description_paragraph, size, price, shipping) {
        this.product_id = product_id;
        this.category_id = category_id;
        this.productImage = productImage;
        this.product_title = product_title;
        this.description_paragraph = description_paragraph;
        this.size = size;
        this.price = price;
        this.shipping - shipping;
        // this.review = review; TODO reviews
    }
}

export default Product;