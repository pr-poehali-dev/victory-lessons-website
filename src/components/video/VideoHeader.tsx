
interface VideoHeaderProps {
  title: string;
  description: string;
}

const VideoHeader = ({ title, description }: VideoHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="h-1 w-20 bg-victory-red mx-auto mt-4"></div>
    </div>
  );
};

export default VideoHeader;
