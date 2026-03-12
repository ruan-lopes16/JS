
function arrayProducts(products) {
  return [...new Set(
    products
      .split(",")
      .map(product => product.trim())
  )]
}

const products = "eyelash  , fox eye  , volume    ,    eyelash     , tweezers  "

console.log(arrayProducts(products))