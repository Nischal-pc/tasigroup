// import { GraduationCap, BookOpen, Brain, FileSpreadsheet } from "lucide-react";

// const Home = () => {
//   const features = [
//     {
//       title: "Create an Assignment",
//       description: "Generate custom assignments with AI assistance",
//       icon: FileSpreadsheet,
//       gradient: "from-blue-600 to-cyan-500",
//       onClick: () => console.log("Create assignment"),
//     },
//     {
//       title: "Generate a Quiz",
//       description: "Create engaging quizzes in seconds",
//       icon: Brain,
//       gradient: "from-purple-600 to-pink-500",
//       onClick: () => console.log("Generate quiz"),
//     },
//     {
//       title: "Create Course Outline",
//       description: "Design comprehensive course structures",
//       icon: BookOpen,
//       gradient: "from-green-500 to-teal-500",
//       onClick: () => console.log("Create course outline"),
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-20 pl-64">
//       <div className="max-w-6xl mx-auto p-8">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Welcome to EVA
//           </h1>
//           <h2 className="text-2xl text-gray-600">
//             Educational Virtual Assistance
//           </h2>
//         </div>

//         <div className="relative mb-20">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform -skew-y-2"></div>
//           <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl">
//             <GraduationCap className="h-32 w-32 mx-auto text-blue-600 mb-8" />
//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-gray-800 mb-4">
//                 Your AI Education Assistant
//               </h3>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Enhance your teaching experience with AI-powered tools designed
//                 specifically for educators.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <button
//               key={index}
//               onClick={feature.onClick}
//               className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//             >
//               <div
//                 className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl`}
//               ></div>
//               <feature.icon
//                 className={`h-12 w-12 mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
//               />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">{feature.description}</p>
//               <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { GraduationCap, BookOpen, Brain, FileSpreadsheet } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Create an Assignment",
      description: "Generate custom assignments with AI assistance",
      icon: FileSpreadsheet,
      gradient: "from-blue-600 to-cyan-500",
      onClick: () => console.log("Create assignment"),
    },
    {
      title: "Generate a Quiz",
      description: "Create engaging quizzes in seconds",
      icon: Brain,
      gradient: "from-purple-600 to-pink-500",
      onClick: () => console.log("Generate quiz"),
    },
    {
      title: "Create Course Outline",
      description: "Design comprehensive course structures",
      icon: BookOpen,
      gradient: "from-green-500 to-teal-500",
      onClick: () => console.log("Create course outline"),
    },
  ];

  return (
    <div className="min-h-screen pt-20 pl-64 bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Welcome to EVA
          </h1>
          <h2 className="text-2xl text-gray-700 mb-6">
            Your Personal AI Educational Assistant
          </h2>
        </div>

        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform -skew-y-2"></div>
          <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <GraduationCap className="h-32 w-32 mx-auto text-blue-600 mb-8 animate-pulse" />
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Your AI Education Assistant
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enhance your teaching experience with AI-powered tools designed
                specifically for educators.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={feature.onClick}
              className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform hover:scale-105"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl`}
              ></div>
              <feature.icon
                className={`h-16 w-16 mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110`}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p>
            &copy; 2025 Educational Virtual Assistance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
