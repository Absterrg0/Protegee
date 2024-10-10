import React from "react";
import { Meteors } from "../ui/meteors";
import { Zap, Shield, Cpu } from "lucide-react"; // Import your icons

// Define a type for the feature prop
interface Feature {
  icon: React.ComponentType; // This can be a React component (icon)
  title: string;
  description: string;
}

// Create a FeatureCard component
const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto"> {/* Center the card */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200 to-teal-100 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-black border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center"> {/* Center the content */}
        <div className="h-10 w-10 flex items-center justify-center mb-4 border border-gray-500 rounded-full">
          <Icon/> {/* Adjust icon size */}
        </div>

        <h1 className="font-bold text-xl text-white mb-2 text-center relative z-50"> {/* Center the title */}
          {title}
        </h1>

        <p className="font-normal text-base text-slate-500 mb-4 text-center relative z-50"> {/* Center the description */}
          {description}
        </p>

        <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
          Explore
        </button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
};

// Main MeteorsDemo component
export const Card: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Zap,
      title: "Effortless Integration",
      description: "Incorporating our solutions into your workflow is as simple as calling a webhook—seriously, it's just a line of code."
    },
    {
      icon: Shield,
      title: "Fully Compliant",
      description: "Leave the regulatory complexities to us. We ensure you meet all necessary compliance standards effortlessly."
    },
    {
      icon: Cpu,
      title: "Designed for AI",
      description: "Our platform is purpose-built for AI agents, ensuring a seamless and optimized experience for autonomous applications."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4"> {/* Add padding to the grid container */}
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};
