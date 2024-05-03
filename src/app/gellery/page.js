import Image from "next/image";
import nextJSImage from "../../assets/next-js-img.jpg";

const GelleryPage = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl text-center py-5 font-semibold">Gellery Page</h1>
      <div>
        <h1 className="text-2xl text-center py-5 font-semibold">
          Normal Image
        </h1>
        <img
          width={500}
          height={500}
          src="https://img.freepik.com/premium-photo/technology-data_343960-8571.jpg?w=900"
          className="mx-auto"
          alt="next image"
        />
      </div>
      <div>
        <h1 className="text-2xl text-center py-5 font-semibold">
          NextJs Image
        </h1>
        <Image
          width={500}
          height={500}
          src="https://img.freepik.com/premium-photo/technology-data_343960-8571.jpg?w=900"
          className="mx-auto"
          alt="next image"
        />
      </div>
      <div>
        <h1 className="text-2xl text-center py-5 font-semibold">Local Image</h1>
        <Image
          width={500}
          height={500}
          src={nextJSImage}
          className="mx-auto"
          alt="next image"
        />
      </div>
    </div>
  );
};

export default GelleryPage;
