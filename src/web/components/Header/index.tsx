import { useNavigate } from 'react-router-dom';
import { TopHeader } from './style';
import Button from '@mui/material/Button';
const ButtonStyle = {
  backgroundColor: '#00AC55',
};

const Header = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    window.scrollTo({
      top: 10000,
      behavior: 'smooth',
    });
  };

  return (
    <TopHeader className="h-58 pl-20 pr-20 xl:pl-0 xl:pr-0">
      <div className="sm:w-full xl:w-1280 h-full flex items-center justify-between m-auto">
        <div className="h-full flex items-center ">
          <img className="w-32 mr-15" src="public/logo.png" />
          <div className="text-[16px] text-[#fff]">fcc-spa</div>
        </div>
        {/* <Button
          onClick={handleContactUs}
          className="w-144 h-42"
          variant="contained"
          style={ButtonStyle}
        >
          <div className="normal-case text-[16px]">Contact Us</div>
        </Button> */}
      </div>
    </TopHeader>
  );
};
export default Header;
