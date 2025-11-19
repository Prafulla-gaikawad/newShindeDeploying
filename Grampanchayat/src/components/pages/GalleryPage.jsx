import PageHero from '../PageHero';
import gavImage from '../../images/gav.jpg';
// Only import images that are NOT used in other pages
// Used elsewhere: WA0001, WA0002, WA0005 (TemplePage), WA0006, WA0007, WA0008 (SchoolPage), 
// WA0009, WA0010, WA0012 (TourismPage), WA0013, WA0014 (Awards)
import img15 from '../../images/IMG-20251112-WA0015.jpg';
import img16 from '../../images/IMG-20251112-WA0016.jpg';
import img17 from '../../images/IMG-20251112-WA0017.jpg';
import img18 from '../../images/IMG-20251112-WA0018.jpg';
import img20 from '../../images/IMG-20251112-WA0020.jpg';
import img21 from '../../images/IMG-20251112-WA0021.jpg';
import img22 from '../../images/IMG-20251112-WA0022.jpg';
import img23 from '../../images/IMG-20251112-WA0023.jpg';
import img24 from '../../images/IMG-20251112-WA0024.jpg';
import img25 from '../../images/IMG-20251112-WA0025.jpg';
import img26 from '../../images/IMG-20251112-WA0026.jpg';
import img27 from '../../images/IMG-20251112-WA0027.jpg';
import img28 from '../../images/IMG-20251112-WA0028.jpg';

const GalleryPage = () => {
  // Only show images that are NOT used in other sections
  const images = [
    { id: 1, src: img15, alt: 'गॅलरी चित्र 1' },
    { id: 2, src: img16, alt: 'गॅलरी चित्र 2' },
    { id: 3, src: img17, alt: 'गॅलरी चित्र 3' },
    { id: 4, src: img18, alt: 'गॅलरी चित्र 4' },
    { id: 5, src: img20, alt: 'गॅलरी चित्र 5' },
    { id: 6, src: img21, alt: 'गॅलरी चित्र 6' },
    { id: 7, src: img22, alt: 'गॅलरी चित्र 7' },
    { id: 8, src: img23, alt: 'गॅलरी चित्र 8' },
    { id: 9, src: img24, alt: 'गॅलरी चित्र 9' },
    { id: 10, src: img25, alt: 'गॅलरी चित्र 10' },
    { id: 11, src: img26, alt: 'गॅलरी चित्र 11' },
    { id: 12, src: img27, alt: 'गॅलरी चित्र 12' },
    { id: 13, src: img28, alt: 'गॅलरी चित्र 13' },
  ];

  return (
    <div>
      <PageHero 
        title="फोटो गॅलरी" 
        subtitle="माहिती"
        image={gavImage}
      />
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Dotted Line */}
          <div className="flex justify-center mb-4">
            <div className="w-32 border-t-2 border-dotted border-gray-400"></div>
          </div>

          {/* Sub-heading */}
          <p className="text-sm text-gray-500 text-center mb-2">माहिती</p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
            फोटो गॅलरी
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GalleryPage;

