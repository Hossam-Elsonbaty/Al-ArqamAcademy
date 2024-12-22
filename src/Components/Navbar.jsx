import React,{ useState } from 'react';
import Logo from '../Images/PNG Blue Horizontal.webp';
import { HashLink } from "react-router-hash-link"; // Import HashLink
import { BsGift } from "react-icons/bs";
import {Dialog,DialogPanel,PopoverGroup,Disclosure,DisclosureButton,DisclosurePanel,} from '@headlessui/react';
import { ChevronDownIcon} from '@heroicons/react/20/solid';
import {Bars3Icon,XMarkIcon,} from '@heroicons/react/24/outline';
import { HashLinkComponent } from './HashLinkComponent';
const Navbar = () => {
  const ourPrograms = [
    { name: 'Program 1', href: '/our-programs#program1'},
    { name: 'Program 2', href: '/our-programs#program2'},
    { name: 'Program 3', href: '/our-programs#program3'}
  ]
  const aboutUs = [
    { name: 'Objectives', href: '/about-us#Objectives'},
    { name: 'Tools We Use', href: '/about-us#Accomplish'},
    { name: 'Graduates', href: '/about-us#Graduates'},
    { name: 'Our team', href: '/about-us#OurTeam'}
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="z-10 bg-white fixed navbar top-0 w-full">
      <nav aria-label="Global" className="mx-auto px-2 flex max-w-7xl items-center justify-between p-1 lg:px-8">
        <div className="flex lg:flex-1">
          <a href='/' className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt='image' src={Logo} className="h-16 w-auto" />
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
          <div className="links-nav cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            <HashLink smooth to="/#about-section">
              About Us
            </HashLink>
            <div className="nav-menu">
              <HashLinkComponent name="Objectives" link="/about-us#Objectives"></HashLinkComponent>
              <HashLinkComponent name="Accomplish" link="/about-us#Accomplish"></HashLinkComponent>
              <HashLinkComponent name="Graduates" link="/about-us#Graduates"></HashLinkComponent>
              <HashLinkComponent name="Our team" link="/about-us#OurTeam"></HashLinkComponent>
            </div>
          </div>
          <div className="links-nav cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            <HashLink smooth to="/#programs-section">
              Our Programs
            </HashLink>
            <div className="nav-menu nav-menu2"> 
              <HashLinkComponent name="Program 1" link="/our-programs#program1"></HashLinkComponent>
              <HashLinkComponent name="Program 2" link="/our-programs#program2"></HashLinkComponent>
              <HashLinkComponent name="Program 3" link="/our-programs#program3"></HashLinkComponent>
            </div>
          </div>
          <a href= "/program-application" className="cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            Register Now
          </a>
          <a href='/contact-us' className="cursor-pointer tracking-wider text-sm font-poppins font-semibold leading-6 text-navbar-blue">
            Contact Us
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/support-our-journey" className="py-3 px-6 flex gap-2 items-center text-sm leading-6 font-poppins border bg-navbar-blue text-white rounded-2xl">
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
                alt='image'
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
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-navbar-blue hover:bg-gray-50">
                    About Us
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...aboutUs].map((item) => (
                      <HashLink
                        key={item.name}
                        smooth
                        to={item.href}
                        scroll={(el) => {
                          const yOffset = -60; // Adjust this value to match the height of your navbar
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-navbar-blue hover:bg-gray-50"
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-navbar-blue hover:bg-gray-50">
                    Our Programs
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...ourPrograms].map((item) => (
                      <HashLink
                        key={item.name}
                        smooth
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        scroll={(el) => {
                          const yOffset = -60; // Adjust this value to match the height of your navbar
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-navbar-blue hover:bg-gray-50"
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href='/program-application'
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer -mx-3 tracking-wider block font-poppins rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navbar-blue hover:bg-gray-50"
                >
                  Register Now
                </a>
                <a
                  href='/contact-us'
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer -mx-3 tracking-wider block font-poppins rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navbar-blue hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
              <a href="/support-our-journey" className="py-3 px-6 flex gap-2 w-fit items-center text-sm leading-6 font-poppins border bg-navbar-blue text-white rounded-2xl">
                <BsGift className='text-base'/> 
                <p className='text-base'>Gift</p>
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
