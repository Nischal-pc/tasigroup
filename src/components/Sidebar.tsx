import React from 'react';
import { Settings, Share2, Info, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white/80 backdrop-blur-md p-6 border-r border-gray-200 shadow-lg">
      <div className="space-y-4">
        <Link 
          to="/tools" 
          className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-xl transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <Settings className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-gray-700">EVA TOOLS</span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link 
          to="/share" 
          className="flex items-center justify-between p-3 hover:bg-green-50 rounded-xl transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <Share2 className="h-5 w-5 text-green-600" />
            <span className="font-medium text-gray-700">SHARE THE EVA</span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link 
          to="/intro" 
          className="flex items-center justify-between p-3 hover:bg-purple-50 rounded-xl transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <Info className="h-5 w-5 text-purple-600" />
            <span className="font-medium text-gray-700">EVA INTRO</span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link 
          to="/upgrade" 
          className="flex items-center justify-between p-3 mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-5 w-5" />
            <span className="font-medium">UPGRADE</span>
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;