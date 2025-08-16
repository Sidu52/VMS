import React, { useEffect, useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import {navLinks} from '../../../data/navConfig'
const Menu = () => {
    const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  // Dynamically calculate visible tabs
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calculateVisibleTabs = () => {
      const containerWidth = container.offsetWidth;
      const children = Array.from(container.children);
      let totalWidth = 0;
      let count = 0;

      for (let i = 0; i < navLinks.length; i++) {
        const child = children[i];
        if (!child) break;

        totalWidth += child.offsetWidth + 16; // 16 = gap
        if (totalWidth > containerWidth - 80) break; // leave space for "Remember"
        count++;
      }

      setVisibleCount(count);
    };

    const resizeObserver = new ResizeObserver(calculateVisibleTabs);
    resizeObserver.observe(container);

    // Run once on mount
    calculateVisibleTabs();
    return () => resizeObserver.disconnect();
  }, []);

  const visibleTabs = navLinks.slice(0, visibleCount);
  const overflowTabs = navLinks.slice(visibleCount);

  return (
    <div className="flex items-center w-full ">
      {/* Icon Section */}
      <div className="text-xl cursor-pointer flex items-center justify-center gap-4 pr-4 border-r border-gray-300">
        <AiFillHome />
        <RiDashboardHorizontalFill />
      </div>

      {/* Navigation Tabs */}
      <ul
        ref={containerRef}
        className="flex gap-6 text-sm text-gray-700 font-medium whitespace-nowrap pl-4 relative flex-1"
      >
        {visibleTabs.map((item, index) => (
         <li>
           <a href={item.path} key={index} 
          className="hover:text-blue-600 cursor-pointer">
            {item.name}
          </a>
         </li>
        ))}

        {overflowTabs.length > 0 && (
          <div
            className="cursor-pointer relative"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
           <BsThreeDots />
            {showDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg border rounded w-max z-10">
                {overflowTabs.map((item, index) => (
                  <a href={item.path}
                    key={index}
                    onClick={()=>{navigate(item.path) }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Menu;
