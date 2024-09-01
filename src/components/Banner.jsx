import BannerHome from '../assets/BannerHome.svg';
import BannerAbout from '../assets/BannerAbout.svg'

const Banner = ({type}) => {
  const bannerSrc = type === 'home' ? BannerHome : BannerAbout;
  const altText = type === 'home' ? "Bannière Home" : "Bannière About";

  return (
    <div>
      <img src={bannerSrc} alt={altText} className='Banner-image' />
    </div>
  )
}

export default Banner;
