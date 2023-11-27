import bannerImg from '../../../public/banner.jpg'
const Header = () => {
    return (
        <div className=''>
            <img className='h-[90vh] w-full object-cover' src={bannerImg} alt="bannerImg" />
        </div>
    );
};

export default Header;