import React,{ useState } from 'react';
import Logo from '../Images/PNG Blue Horizontal.png';
import { Link } from 'react-scroll';
import { BsGift } from "react-icons/bs";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="z-10 bg-white fixed shadow-md top-0 w-full">
      <nav aria-label="Global" className="mx-auto px-2 flex max-w-7xl items-center justify-between p-1 lg:px-8">
        <div className="flex lg:flex-1">
          <a href='/' className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={Logo} className="h-16 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href='/' className="cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            Home
          </a>
          <Link  spy={true} smooth={true} offset={50} duration={500} to="heroSection" className=" cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            About Us
          </Link>
          <Link spy={true} smooth={true} offset={50} duration={500} to='programsSection' className="cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            Our Programs
          </Link>
          <Link spy={true} smooth={true} offset={-250} duration={500} to='ourTeam' className="cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            Register Now
          </Link>
          <Link spy={true} smooth={true} offset={50} duration={500} to='footerSection' className="cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            Contact Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="py-3 px-6 flex gap-2 items-center text-sm leading-6 font-poppins border bg-navbar-blue text-white rounded-2xl">
            <BsGift className='text-base'/> 
            <p className='text-base'>Gift</p>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={Logo}
                className="h-16 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <a
                  href='/'
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer -mx-3 tracking-wider block font-poppins rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navbar-blue hover:bg-gray-50"
                >
                  Home
                </a>
                <Link
                  smooth={true}
                  spy={true} 
                  offset={-200}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  to='heroSection'
                  className="cursor-pointer -mx-3 tracking-wider block font-poppins rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navbar-blue hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to='programsSection'
                  onClick={() => setMobileMenuOpen(false)}
                  smooth={true}
                  spy={true} 
                  offset={-50}
                  duration={500}
                  className="cursor-pointer -mx-3 tracking-wider block font-poppins rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navbar-blue hover:bg-gray-50"
                >
                  Our Programs
                </Link>
                <Link
                  to='ourTeam'
                  onClick={() => setMobileMenuOpen(false)}
                  smooth={true}
                  spy={true} 
                  offset={-200}
                  duration={500}
                  className="cursor-pointer -mx-3 tracking-wider block font-poppins rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navbar-blue hover:bg-gray-50"
                >
                  Register Now
                </Link>
                <Link
                  to='footerSection'
                  onClick={() => setMobileMenuOpen(false)}
                  smooth={true}
                  spy={true} 
                  offset={-200}
                  duration={500}
                  className="cursor-pointer -mx-3 tracking-wider block font-poppins rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navbar-blue hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar;
// return (
//   <header>
//     <img src={Logo} alt="logo" />
//     <nav>
//       <NavLink>Home</NavLink>
//       <NavLink>About</NavLink>
//       <NavLink>Programs</NavLink>
//       <NavLink>Contact Us</NavLink>
//     </nav>
//   </header>
  
// )
