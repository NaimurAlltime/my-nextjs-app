const AllShuePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();

  return (
    <div>
      <h2 className="text-3xl font-medium text-center">All Shue Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-5 max-w-7xl mx-auto">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary"> {shoe.price} $ </div>
              </h2>
              <p> {shoe.description} </p>
              <div className="card-actions justify-end mt-2">
                <button className="btn btn-sm btn-outline btn-primary rounded-md">
                  Buy Now
                </button>
                <button className="btn btn-sm btn-outline btn-primary rounded-md">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShuePage;
