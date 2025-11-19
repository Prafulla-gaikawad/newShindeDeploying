import PageHero from '../PageHero';
import mandirImage from '../../images/mandir.jpg';

const TemplePage = () => {
  const temples = [
    {
      id: 1,
      image: mandirImage,
      name: 'मंदिर 1',
      description: 'गावातील एक प्राचीन आणि पवित्र मंदिर जिथे भक्तांची श्रद्धा आणि भक्ती दिसून येते.',
      location: 'शिंदे'
    },
    {
      id: 2,
      image: mandirImage,
      name: 'मंदिर 2',
      description: 'हा मंदिर गावाच्या सांस्कृतिक वारशाचा एक महत्त्वाचा भाग आहे आणि येथे नियमित पूजा-अर्चना होत असते.',
      location: 'शिंदे'
    },
    {
      id: 3,
      image: mandirImage,
      name: 'मंदिर 3',
      description: 'गावातील सर्वांना आध्यात्मिक शांती आणि आनंद देणारे हे मंदिर गावाच्या अभिमानास्पद ठिकाण आहे.',
      location: 'शिंदे'
    }
  ];

  return (
    <div>
      <PageHero 
        title="मंदिर" 
        subtitle="माहिती"
        image={mandirImage}
      />
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
            मंदिर
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temples.map((temple) => (
              <div
                key={temple.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-teal-800 mb-3">
                    {temple.name}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {temple.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{temple.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TemplePage;

