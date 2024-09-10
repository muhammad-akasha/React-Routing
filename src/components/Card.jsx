import { useNavigate } from "react-router-dom";

function Card({
  title,
  description,
  brand,
  image,
  id,
  price,
  category,
  warrantyInformation,
  returnPolicy,
}) {
  const navigate = useNavigate();
  const isOnSingleProductPage =
    window.location.pathname.includes("/singalProduct/"); // for hide button in singal product page..
  function getSingalPro() {
    navigate(`/singalProduct/${id}`);
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        {isOnSingleProductPage && <h2> Category {category}</h2>}
        <h2 className="card-title">{brand}</h2>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {isOnSingleProductPage && (
          <>
            <h3>{warrantyInformation}</h3>
            <h3>{returnPolicy}</h3>
          </>
        )}
        <h4>Price : $ {price}</h4>
        <div className="card-actions justify-end">
          {!isOnSingleProductPage && (
            <button onClick={getSingalPro} className="btn btn-primary">
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
