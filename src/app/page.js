import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "Homepage",
  description: "This is my homepage",
};

const Homepage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">My NextJs App</h1>
      <Counter />
    </div>
  );
};

export default Homepage;
