import { useState } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import VideoPlayer from './VideoPlayer';

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { data, loading } = useHomeData();
  const language = 'mr'; // Default to Marathi

  // Get about data from API or use fallback
  const aboutData = data?.about;
  const title = aboutData?.title?.[language] || aboutData?.title?.mr || 'आपला अभिमान, आपलं गाव';
  const description = aboutData?.description?.[language] || aboutData?.description?.mr || 'हे गाव एक शांत आणि सांस्कृतिक वारसा जपणारे ठिकाण आहे. शिक्षणाचा दर्जा चांगला असून साक्षरतेच्या दृष्टीने हे गाव प्रगत मानले जाते. स्वतःची ग्रामपंचायत असल्याने स्थानिक पातळीवर प्रशासनाची सुविधा उपलब्ध आहे. जवळच महत्त्वाची शहरे आणि बाजारपेठा असल्याने खरेदी-विक्री आणि व्यवहार सोयीस्कर होतात. गावाजवळून जाणारे राष्ट्रीय महामार्ग वाहतूक आणि संपर्कासाठी महत्त्वाचे साधन ठरतात.';
  const videoUrl = aboutData?.videoUrl;

  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center">
                <p className="text-lg text-gray-600">लोड होत आहे...</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <div className="inline-block mb-4">
                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">आमच्याबद्दल</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-teal-700 via-blue-700 to-teal-700 bg-clip-text text-transparent">
                    {title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto"></div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-10 border border-gray-100">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                    {description}
                  </p>
                </div>
            
                {/* Play Button - Only show if video URL exists */}
                {videoUrl && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="group relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50"
                      aria-label="Play Video"
                    >
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                      <svg 
                        className="w-10 h-10 md:w-12 md:h-12 text-white ml-1 relative z-10" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {isVideoOpen && videoUrl && (
        <VideoPlayer 
          videoUrl={videoUrl}
          onClose={() => setIsVideoOpen(false)} 
        />
      )}
    </>
  );
};

export default About;
