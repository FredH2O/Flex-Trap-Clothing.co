export default function ProductCard({ product }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={product.image} alt={product.title} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.title}</h5>
            {product.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
