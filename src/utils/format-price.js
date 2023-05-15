export function formatPrice(price) {
  let numPrice = Number.parseFloat(price).toFixed(2);
  let priceParts = numPrice.toString().split(".");
  priceParts[0] = priceParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let formattedPrice = priceParts.join(".");
  return formattedPrice;
}
