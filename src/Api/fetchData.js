export default function fetchData() {
  return fetch(`http://localhost:4000/products`)
    .then((res) => res.json())
    .then((body) => {
      console.log(body)
      return body.map((data) => {
        return {
          name: data.product_name,
          description: data.product_description,
          picture: data.product_picture,
          url: data.product_url,
          price: data.product_price
        };
      })
    })
}
