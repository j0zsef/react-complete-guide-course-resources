import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product {params.id} Detail</h1>
      <p>
        <Link to={".."} relative={"path"}>
          Back
        </Link>
      </p>
    </div>
  );
};

export default ProductDetail;
