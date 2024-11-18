import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring

// Define the list of places (steps)
const places = [
  {
    name: "Paradise Beach",
    image: "/images/paradise-beach.jpg",
    description: "A serene and pristine beach with golden sands, calm blue waters, and a peaceful atmosphere. Perfect for relaxation and sunbathing.",
  },
  {
    name: "Auroville",
    image: "/images/auroville.jpg",
    description: "A global community and spiritual township dedicated to human unity, peace, and sustainable living. Visit the iconic Matrimandir for meditation and reflection.",
  },
  {
    name: "Promenade Beach",
    image: "/images/promenade-beach.jpg",
    description: "A picturesque beachfront located along the heart of Pondicherry, ideal for evening walks, watching sunsets, and enjoying the calm sound of the waves.",
  },
  {
    name: "French Colony",
    image: "/images/french-colony.jpg",
    description: "A charming district filled with French colonial-style buildings, vibrant streets, and cozy cafes. Explore its rich history and cultural heritage.",
  },
  {
    name: "Mahatma Gandhi Statue",
    image: "/images/mahatma-statue.jpg",
    description: "A historical landmark located near the Promenade Beach, the statue honors the Father of the Nation, Mahatma Gandhi. It stands as a symbol of peace and unity.",
  },
  {
    name: "Serenity Beach",
    image: "/images/serenity-beach.jpg",
    description: "A quieter, more secluded beach perfect for unwinding. Its calm waves and less crowded atmosphere make it ideal for a peaceful day by the sea.",
  },
  {
    name: "Theevu Plage",
    image: "/images/theevu-plage.jpg",
    description: "A lesser-known beach in Pondicherry where you can enjoy delicious seafood right by the water. A great spot for food lovers and beach enthusiasts alike.",
  },
  {
    name: "SeaSide Promenade",
    image: "/images/seaside-promade.jpg",
    description: "A scenic promenade along the coastline, ideal for romantic evening walks. With beautiful views of the ocean, it is the perfect spot to relax and enjoy the breeze.",
  },
];


const App = () => {
  const [revealedPlaceIndex, setRevealedPlaceIndex] = useState(0);

  // Auto slide after 3 seconds, with rotational behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedPlaceIndex((prevIndex) => (prevIndex + 1) % places.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Slide transition for the place change using react-spring
  const slideTransition = useSpring({
    transform: `translateX(-${revealedPlaceIndex * 100}%)`, // Slide to the left by 100% per step
    opacity: 1,
    config: { tension: 120, friction: 40 }, // Slower transition speed
  });

  return (
    <div className="app min-h-screen bg-gradient-to-b from-green-100 to-blue-200 text-gray-800">
      <header className="header py-6 bg-white shadow-md">
        <h1 className="text-4xl font-semibold text-center text-green-600">
          Explore Pondicherry!!!
        </h1>
      </header>

      <div className="content p-6">
        <div className="timeline overflow-hidden relative">
          {/* Timeline Steps - Displays one step at a time, sliding effect */}
          <animated.div
            style={slideTransition}
            className="flex w-full"
          >
            {places.map((place, index) => (
              <div key={index} className="timeline-step mb-12 w-full flex-shrink-0">
                <div className="step-header mb-4 flex items-center">
                  <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full">
                    {index + 1}
                  </div>
                  <div className="ml-4 text-lg font-semibold">{place.name}</div>
                </div>
                <div className="step-body">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-60 object-cover rounded-xl mb-4"
                  />
                  <p className="text-gray-700">{place.description}</p>
                </div>
              </div>
            ))}
          </animated.div>
        </div>
      </div>

      <footer className="footer py-6 text-center bg-white shadow-inner mt-12">
        <p className="text-lg font-light text-gray-600">
          Plan your dream trip today!
        </p>
      </footer>
    </div>
  );
};

export default App;
