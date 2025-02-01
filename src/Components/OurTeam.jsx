import React from 'react';
import image1 from '../Images/Moaz.webp';
import image2 from '../Images/drHala.webp';
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter  } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
export const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ustatha. Hala Charif",
      title: "Al-Arqam Academy Director",
      image: image2,
      delay: 500,
      social: [
        { platform: "Facebook", link: "#", icon: <CiFacebook className='text-blue-600' /> },
        { platform: "Instagram", link: "https://www.instagram.com/h1ashraafhotmailcom", icon: <CiInstagram className='text-violet-600' /> },
        { platform: "LinkedIn", link: "#", icon: <CiLinkedin className='text-blue-600' /> },
      ],
    },
    {
      id: 2,
      name: "Imam. Moaz Raof",
      title: "Imam of Islamic Center of TN",
      image: image1,
      delay: 1000,
      social: [
        { platform: "Facebook", link: "https://www.facebook.com/Moazraof101", icon: <CiFacebook className='text-blue-600' /> },
        { platform: "Instagram", link: "https://www.instagram.com/moazraof", icon: <CiInstagram className='text-violet-600' /> },
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/moaz-raof-6742041b2", icon: <CiLinkedin className='text-blue-600' /> },
        { platform: "X", link: "https://x.com/moaz_abdelraof", icon: <CiTwitter className='text-blue-600' /> },
        { platform: "TikTok", link: "https://www.tiktok.com/@moazraof101", icon: <PiTiktokLogoThin className='text-red-600' /> },
      ],
    },
  ];
  return (
    <div id='OurTeam' className="bg-white pt-12 py-24 sm:py-16 objectives items-center flex flex-col gap-10">
      <header className='header'>
        <h1 className='font-poppins'>
          Our Team
          <span></span>
          <span></span>
        </h1>
      </header>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ourTeam">
        <dl className="grid grid-cols-1 gap-x-16 gap-y-16 text-center lg:grid-cols-2">
          {teamMembers.map(member => (
            <div
              key={member.id}
              className='teammate p-4 sm:p-10 flex flex-col gap-6 items-start'
              data-aos="fade-right"
              data-aos-delay={member.delay}
              data-aos-duration="1000"
            >
              <div className="imgContainer">
                <img src={member.image} alt={`${member.name} Image`} className='teammateImage' />
              </div>
              <h1 className='font-poppins text-2xl font-bold'>{member.name}</h1>
              <p className='description text-zinc-500'>{member.title}</p>
              <div className='social-media '>
                {member.social.map((social, index) => (
                  <a key={index} href={social.link} aria-label={social.platform}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};