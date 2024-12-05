import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const articles = [
    {
      id: 1,
      title: "The Right to Record in Public in Sri Lanka",
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=800&q=80",
      link: "/current-affairs"
    },
    {
      id: 2,
      title: "New Digital Privacy Laws Proposed",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
      link: "/current-affairs"
    },
    {
      id: 3,
      title: "Environmental Protection Regulations Update",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      link: "/current-affairs"
    },
    {
      id: 4,
      title: "Changes in Employment Law 2024",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      link: "/current-affairs"
    },
    {
      id: 5,
      title: "Consumer Rights Protection Act Updates",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      link: "/current-affairs"
    },
    {
      id: 6,
      title: "Legal Education Reform",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      link: "/current-affairs"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide p-4 snap-x snap-mandatory"
      >
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex-none w-72 h-48 relative rounded-lg overflow-hidden snap-start"
          >
            {article.link ? (
              <Link to={article.link}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold">{article.title}</h3>
                </div>
              </Link>
            ) : (
              <>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold">{article.title}</h3>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-r"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-l"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default NewsSlider;