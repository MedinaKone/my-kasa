import BannerHome from '../assets/BannerHome.svg';
import BannerAbout from '../assets/BannerAbout.svg'
import BannerHomeMobile from '../assets/bannerHomeMobile.svg'

const Banner = ({type}) => {
  const bannerSrc = type === 'home' ? BannerHome : BannerAbout;
  const altText = type === 'home' ? "Bannière Home" : "Bannière About";

  return (
    <>
    <div className='bannerDesktop'>
      <img src={bannerSrc} alt={altText} className='Banner-image' />
    </div>
    <div className='bannerMobile'>
    <img src={BannerHomeMobile} alt={altText} className='Banner-Home-Mobile' />
    </div>
    </>
  )
}

export default Banner;
