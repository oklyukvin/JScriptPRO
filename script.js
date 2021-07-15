const goods = [
    { title: 'Adidas', price: 72.00 },
    { title: 'Reebok', price: 152.00 },
    { title: 'New Balance', price: 223.00 },
    { title: 'Nike', price: 42.00 },
    { title: 'Adidas', price: 72.00 },
    { title: 'Reebok', price: 152.00 },
    { title: 'New Balance', price: 223.00 },
    { title: 'Nike', price: 42.00 },
];

var img = ["images/product-1.jpg","images/product-2.jpg","images/product-3.jpg"];

const $goodsList = document.querySelector('.goods-list');
  
const renderGoodsItem = ({ title, price }) => {
    return `<a href="single_page.html" class="product">
          <img class="product-img" src="images/product-2.jpg" alt="product photo">
          <div class="product-text-box">
            <p class="product-text">${title}</p>
            <p class="product-price">$ ${price}</p>
          </div>
        </a>
        <div class="box-add">
            <a class="add" href="#"><img class="add-img" src="images/cart_to_card.png" alt="cart-img">Add to cart</a>
        </div>`
};
  
const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
            item => renderGoodsItem(item)
        ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}
  
renderGoodsList();