import React from 'react';

// Import all images
import toteImage from '../assets/images/innovation/cups.png';
import backpackImage from '../assets/images/innovation/moka-makker.png';
import crossbodyImage from '../assets/images/innovation/espresso-maker.png';
import bagImage from '../assets/images/innovation/espresso-maker-red.png';
import familyImage from '../assets/images/innovation/family.png';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const DesignInnovation: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Cream Leopard Print Water Bottle',
      price: '£16',
      image: toteImage
    },
    {
      id: '2',
      name: 'Navy Blue Knitted Polo Shirt (3-16yrs)',
      price: '£16 - £21',
      image: backpackImage
    },
    {
      id: '3',
      name: 'Kids’ Mid Blue Wide-Leg Cargo Jeans',
      price: '£12 - £14',
      image: crossbodyImage
    },
    {
      id: '4',
      name: 'Blue Paw Patrol Elastic Lace Trainers',
      price: '£28 - £30',
      image: bagImage
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 4k:px-container-x">
        {/* Section Title */}
        <h2 className="text-[#0E1422] font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          Better Together
        </h2>

        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 md:gap-8 w-full">
          {/* Left Side - Hero Image */}
          <div className="w-full lg:flex-1 lg:flex-[1.2] xl:flex-[1.3]">
            <div className="relative w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[808px] max-w-[850px] mx-auto lg:mx-0">
              <img
                src={familyImage}
                alt="TUMI Design Innovation"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Navigation Arrows - Hidden on mobile and tablet */}
              <button className="">
                <span className="material-icons-outlined text-white text-xl">arrow_back_ios</span>
              </button>
              
              <button className="">
                <span className="material-icons-outlined text-white text-xl">arrow_forward_ios</span>
              </button>
            </div>
          </div>

          {/* Right Side - Product Grid */}
          <div className="w-full lg:flex-1 lg:max-w-[700px]">
            {/* Mobile: Single column stack */}
            <div className="grid grid-cols-1 sm:hidden gap-4">
              {products.map((product) => (
                <div key={product.id} className="group flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  {/* Product Image Container - Mobile horizontal layout */}
                  <div className="relative bg-[#F6F6F6] rounded-lg overflow-hidden w-20 h-20 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Add Button */}
                    <button className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                      <span className="material-icons-outlined text-[#0E1422] text-sm">add</span>
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-[#0E1422] font-medium text-sm">
                      {product.name}
                    </h3>
                    <p className="text-[#5C5F6A] text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet and Desktop: 2x2 Grid */}
            <div className="hidden sm:grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[808px] grid-rows-2">
              {products.map((product) => (
                <div key={product.id} className="group flex flex-col h-full">
                  {/* Product Image Container */}
                  <div className="relative bg-[#F6F6F6] rounded-lg overflow-hidden mb-3 sm:mb-4 flex-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 sm:p-3 md:p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Add Button */}
                    <button className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-transparent flex items-center justify-center transition-shadow duration-200">
                      <span className="material-icons-outlined text-[#0E1422] text-sm sm:text-base md:text-lg">add</span>
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-1 flex-shrink-0">
                    <h3 className="text-[#0E1422] font-medium text-xs sm:text-sm text-sm">
                      {product.name}
                    </h3>
                    <p className="text-[#5C5F6A] text-xs sm:text-sm text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignInnovation;