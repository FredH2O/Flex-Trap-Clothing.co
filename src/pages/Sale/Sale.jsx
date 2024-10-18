function Sale({ addProduct }) {
  const saleProducts = [
    {
      image: `${process.env.PUBLIC_URL}/images/sale1.jpeg`,
      title: "Gold Earrings",
      price: "5",
      description: "Elegant gold earrings perfect for any occasion.",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/sale2.jpeg`,
      title: "Seashell Bracelet",
      price: "5",
      description: "A beautiful bracelet made from natural seashells.",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/sale3.jpeg`,
      title: "RAYBAN Shades G80s",
      price: "300",
      description:
        "Stylish and protective RAYBAN sunglasses from the G80s collection.",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/sale4.jpeg`,
      title: "MEN'S Casual Jacket Jane&Jam",
      price: "75",
      description:
        "Comfortable and fashionable men's casual jacket from Jane&Jam.",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/sale5.jpeg`,
      title: "WOMEN'S Leather Boots PRIMAL",
      price: "50",
      description:
        "Durable and chic women's leather boots from PRIMAL, perfect for winter.",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/sale6.jpeg`,
      title: "MEN'S Chino Pants S-L",
      price: "50",
      description:
        "Versatile and comfortable men's chino pants, available in sizes S-L.",
    },
  ];

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div
        id="card-container"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center"
      >
        {saleProducts.map((item, index) => (
          <div
            id="card-container"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            className="col mb-5"
            key={index}
          >
            <div className="card h-100">
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{item.title}</h5>
                  <span className="price-tag">€{item.price}</span>
                </div>
                <div className="text-center description">
                  {item.description}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button
                    onClick={() => addProduct(item)}
                    type="button"
                    className="btn btn-success"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sale;
