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

const images = items.results.map(item => item.Images)

const pics = items.results
  .map(item => item.Images[0])
  .map(item => item.url_170x135)

const html = items.results
  .map(item => {
    return `
  <section class="products">
  <img src="" />
  <ul>
    <li>
      <h3>${item.title}</h3>
    </li>
    <li>Company</li>
    <li>Ratings</li>
    <li>${item.price}</li>
  </ul>
  </section>`
  })
  .join("")
