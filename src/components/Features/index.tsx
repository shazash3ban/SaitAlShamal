import brandsData from "./featuresData";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
     <section id="features" className="py-16 md:py-20 lg:py-28">
     <SectionTitle
            title="Our Brands"
            paragraph="Explore our partnerships with leading brands across the globe"
            center
          />
        <div className="container bg-white py-10">
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {brandsData.map((brand) => (
              <div key={brand.id} className="flex justify-center">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  style={{ width: "70%", height: "auto", backgroundColor: "white", padding:"px", borderRadius:"8px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Features;
