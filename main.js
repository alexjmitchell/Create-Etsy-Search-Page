let products = `
<section class="products">
<img src="https://via.placeholder.com/300/300" />
<ul>
  <li>
    <h3>Title</h3>
  </li>
  <li>Company</li>
  <li>Ratings</li>
  <li>Price</li>
</ul>
</section>`

const title = items.results.map(item => item.title).join("\n\n")

const price = items.results.map(item => item.price).join("")

const images = items.results.map(item => item.Images).join("")

// const pics = items.results
//   .map(item => item.Images[0])
//   .map(item => item.url_570xN)

const pics = items.results.map(item => item.Images[0].url_570xN)

const html = items.results
  .map(item => {
    return `
  <section class="products">
  <div class="images">
    <a href="#" ><img src="${item.Images[0].url_570xN}" class="product-img" /></a>
  </div>
  <ul>
    <li>
      <h3>${item.title}</h3>
    </li>
    <li>${item.Shop.shop_name}</li>
    <li>Rating: 5/5</li>
    <li>$${item.price}</li>
  </ul>
  </section>`
  })
  .join("")

document.querySelector(".gallery").innerHTML = html
