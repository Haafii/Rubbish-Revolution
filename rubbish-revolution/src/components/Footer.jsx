import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='bg-secondary h-[232px]'>
      <div className='pt-14 pl-8'>
        LOGO
      </div>
      <div className='text-gray-400 pt-8 pl-8'>
        Join our community
      </div>
      <div className='text-gray-400 pl-8 pt-2'>
        <a href="#">
          <InstagramIcon className='mr-2' />
        </a>
        <a href="#">
          <TwitterIcon className='mr-2' />
        </a>
        <a href="#">
          <FacebookIcon className='mr-2' />
        </a>
        <a href="#">
          <YouTubeIcon className='mr-2' />
        </a>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Footer
