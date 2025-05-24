export interface CardProps {
    title: string;
    description: string;
    image: string;
    path: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, description, image, path }) => {
    return (
      <a href={path} target="_blank" rel="noopener noreferrer">
        <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-slate-700 bg-opacity-80 rounded-xl overflow-hidden shadow-md cursor-pointer">
          <img src={image} alt={title} className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{description}</p>
          </div>
        </div>
      </a>
    );
  };
  
  export default Card;
  