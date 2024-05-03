import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "Homepage",
  description: "This is my homepage",
};

const Homepage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();
  // console.log(shoes);
  return (
    <div>
      <h1 className="text-3xl text-center">My NextJs App</h1>
      <Counter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-5 max-w-7xl mx-auto">
        {shoes.slice(0, 6).map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
