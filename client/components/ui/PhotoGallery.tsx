import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  className?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  title,
  className = "",
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(
        selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1,
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedPhoto(null);
    } else if (e.key === "ArrowLeft") {
      prevPhoto();
    } else if (e.key === "ArrowRight") {
      nextPhoto();
    }
  };

  return (
    <div className={className}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h3>
      )}

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedPhoto(index)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            {photo.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h4 className="text-white font-semibold">{photo.title}</h4>
                {photo.description && (
                  <p className="text-gray-200 text-sm mt-1">
                    {photo.description}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className="max-w-full max-h-full object-contain rounded-lg animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            {(photos[selectedPhoto].title ||
              photos[selectedPhoto].description) && (
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                {photos[selectedPhoto].title && (
                  <h4 className="text-xl font-bold mb-2">
                    {photos[selectedPhoto].title}
                  </h4>
                )}
                {photos[selectedPhoto].description && (
                  <p className="text-gray-200">
                    {photos[selectedPhoto].description}
                  </p>
                )}
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {selectedPhoto + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Stunning AI-generated and curated travel photos
export const sampleTravelPhotos: Photo[] = [
  {
    id: "travel-1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Tropical paradise beach",
    title: "Maldives Paradise",
    description: "Crystal clear waters and pristine beaches in the Maldives",
  },
  {
    id: "travel-2",
    src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73702?w=800&q=80",
    alt: "City skyline at night",
    title: "Tokyo Nights",
    description: "Vibrant neon lights illuminate Tokyo's modern skyline",
  },
  {
    id: "travel-3",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Mountain landscape",
    title: "Swiss Alps Adventure",
    description: "Majestic peaks and pristine alpine lakes",
  },
  {
    id: "travel-4",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    alt: "Ancient temple",
    title: "Angkor Wat Temple",
    description: "Ancient Khmer architecture in Cambodia",
  },
  {
    id: "travel-5",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Northern lights",
    title: "Aurora Borealis",
    description: "Spectacular northern lights in Iceland",
  },
  {
    id: "travel-6",
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    alt: "Autumn forest",
    title: "Autumn Serenity",
    description: "Golden autumn colors in Canadian forests",
  },
  {
    id: "travel-7",
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    alt: "Santorini sunset",
    title: "Santorini Magic",
    description: "Iconic blue domes and sunset in Greece",
  },
  {
    id: "travel-8",
    src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80",
    alt: "Patagonia landscape",
    title: "Patagonian Wilderness",
    description: "Dramatic peaks and glacial lakes in Patagonia",
  },
];

export const sampleHotelPhotos: Photo[] = [
  {
    id: "hotel-1",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Luxury hotel lobby",
    title: "Grand Palazzo Lobby",
    description: "Opulent marble lobby with crystal chandeliers",
  },
  {
    id: "hotel-2",
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    alt: "Presidential suite",
    title: "Presidential Suite",
    description: "Luxurious suite with panoramic city views",
  },
  {
    id: "hotel-3",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "Infinity pool",
    title: "Rooftop Infinity Pool",
    description: "Stunning infinity pool overlooking the city",
  },
  {
    id: "hotel-4",
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Hotel spa",
    title: "Luxury Spa Retreat",
    description: "Serene spa environment for ultimate relaxation",
  },
  {
    id: "hotel-5",
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    alt: "Michelin restaurant",
    title: "Michelin Star Dining",
    description: "Award-winning culinary experience",
  },
  {
    id: "hotel-6",
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    alt: "Hotel beach view",
    title: "Oceanfront Paradise",
    description: "Private beach access with cabana service",
  },
];

export const sampleFoodPhotos: Photo[] = [
  {
    id: "food-1",
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
    alt: "Michelin star dish",
    title: "Molecular Gastronomy",
    description: "Award-winning chef's innovative molecular cuisine",
  },
  {
    id: "food-2",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80",
    alt: "Neapolitan pizza",
    title: "Authentic Neapolitan Pizza",
    description: "Traditional wood-fired pizza from Naples",
  },
  {
    id: "food-3",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    alt: "Omakase sushi",
    title: "Omakase Experience",
    description: "Premium sushi crafted by master chef",
  },
  {
    id: "food-4",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    alt: "French patisserie",
    title: "French Patisserie",
    description: "Exquisite French pastries and desserts",
  },
  {
    id: "food-5",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Farm to table",
    title: "Farm-to-Table Cuisine",
    description: "Fresh, locally sourced organic ingredients",
  },
  {
    id: "food-6",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Wine tasting",
    title: "Wine Tasting Experience",
    description: "Curated wine selection with expert sommelier",
  },
  {
    id: "food-7",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    alt: "Artisan coffee",
    title: "Artisan Coffee Culture",
    description: "Single-origin coffee with latte art mastery",
  },
  {
    id: "food-8",
    src: "https://images.unsplash.com/photo-1559054663-e9b8c3c2e6c8?w=800&q=80",
    alt: "Chocolate dessert",
    title: "Decadent Chocolate Art",
    description: "Handcrafted chocolate dessert masterpiece",
  },
];

export const sampleBikePhotos: Photo[] = [
  {
    id: "bike-1",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Mountain biking adventure",
    title: "Alpine Mountain Trails",
    description: "Epic mountain biking through Alpine wilderness",
  },
  {
    id: "bike-2",
    src: "https://images.unsplash.com/photo-1544191696-15693072e0e6?w=800&q=80",
    alt: "Urban cycling tour",
    title: "City Discovery Tour",
    description: "Explore hidden gems and iconic landmarks by bike",
  },
  {
    id: "bike-3",
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
    alt: "Coastal cycling",
    title: "Pacific Coast Adventure",
    description: "Scenic coastal routes with ocean views",
  },
  {
    id: "bike-4",
    src: "https://images.unsplash.com/photo-1517654443271-11c621d19e60?w=800&q=80",
    alt: "Forest trail biking",
    title: "Forest Trail Expedition",
    description: "Immersive nature rides through ancient forests",
  },
  {
    id: "bike-5",
    src: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&q=80",
    alt: "Desert biking",
    title: "Desert Canyon Challenge",
    description: "Adventurous trails through red rock canyons",
  },
  {
    id: "bike-6",
    src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
    alt: "Electric bike tour",
    title: "E-Bike Wine Country",
    description: "Effortless exploration through vineyard valleys",
  },
];

export const sampleMedicalPhotos: Photo[] = [
  {
    id: "medical-1",
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    alt: "Advanced medical facility",
    title: "Cutting-Edge Medical Center",
    description: "State-of-the-art diagnostic and treatment facilities",
  },
  {
    id: "medical-2",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
    alt: "Specialist consultation",
    title: "Board-Certified Specialists",
    description: "Expert medical consultation with leading physicians",
  },
  {
    id: "medical-3",
    src: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=800&q=80",
    alt: "Telemedicine platform",
    title: "Advanced Telemedicine",
    description: "Secure virtual consultations with medical experts",
  },
  {
    id: "medical-4",
    src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80",
    alt: "Preventive care",
    title: "Preventive Health Programs",
    description: "Comprehensive health screenings and wellness plans",
  },
  {
    id: "medical-5",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
    alt: "Medical research",
    title: "Research & Innovation",
    description: "Leading medical research and innovative treatments",
  },
  {
    id: "medical-6",
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    alt: "Wellness center",
    title: "Integrated Wellness",
    description: "Holistic approach to health and wellness",
  },
];

export const sampleBeautyPhotos: Photo[] = [
  {
    id: "beauty-1",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    alt: "Luxury hair salon",
    title: "Celebrity Hair Styling",
    description: "Award-winning stylists and premium hair treatments",
  },
  {
    id: "beauty-2",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    alt: "Luxury spa sanctuary",
    title: "Wellness Sanctuary",
    description: "Holistic spa treatments in tranquil environment",
  },
  {
    id: "beauty-3",
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    alt: "Nail art studio",
    title: "Nail Art Masterpieces",
    description: "Creative nail designs by certified artists",
  },
  {
    id: "beauty-4",
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    alt: "Advanced skincare",
    title: "Medical-Grade Skincare",
    description: "Professional treatments using cutting-edge technology",
  },
  {
    id: "beauty-5",
    src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
    alt: "Makeup artistry",
    title: "Professional Makeup",
    description: "Bridal and special occasion makeup artistry",
  },
  {
    id: "beauty-6",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Aromatherapy massage",
    title: "Aromatherapy Bliss",
    description: "Therapeutic massage with organic essential oils",
  },
];

export const allServicePhotos: Photo[] = [
  ...sampleTravelPhotos.slice(0, 2),
  ...sampleHotelPhotos.slice(0, 2),
  ...sampleFoodPhotos.slice(0, 2),
  ...sampleBikePhotos.slice(0, 2),
  ...sampleBeautyPhotos.slice(0, 2),
  ...sampleMedicalPhotos.slice(0, 2),
];
