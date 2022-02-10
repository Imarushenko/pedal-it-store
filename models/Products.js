// products class
class Product {
    constructor(id, categoryId, productImage, product_title, description_paragraph, size, price, shipping) {
        this.id = id;
        this.categoryId = categoryId;
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