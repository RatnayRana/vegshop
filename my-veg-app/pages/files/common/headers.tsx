import { useState, useEffect } from 'react';
import Link from 'next/link';

function HeaderComponent() {
  const [navbarColor, setNavbarColor] = useState('bg-header'); // Initial background class

  useEffect(() => {
    const handleScroll = () => {
      // Change color when scrolled 50px down
      if (window.scrollY > 50) {
        setNavbarColor('bg-white shadow-lg'); // Change to white with shadow
      } else {
        setNavbarColor('bg-header'); // Reset to initial background color
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 p-4 flex justify-between items-center transition-colors duration-300 ${navbarColor}`}>
      <div>
        <h5 className="font-semibold text-stone-950 text-xl">Maya Tshongkhang</h5>
      </div>
      {/* Navigation Section */}
      <div className="flex space-x-4">
        <Link href="#" scroll={false} className="rounded-md md:px-3 py-2 text-base sm:text-lg font-medium text-white bg-green-600" aria-current="page">Home</Link>
        <Link href="#first-section" scroll={false} className="rounded-md md:px-3 py-2 text-base sm:text-lg font-medium text-white bg-green-600" aria-current="page">About Us</Link>
        <Link href="#second-section" scroll={false} className="rounded-md md:px-3 py-2 text-base sm:text-lg font-medium text-white bg-green-600" aria-current="page">Products</Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
