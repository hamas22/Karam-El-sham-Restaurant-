import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;