import ClientNavigation from "../role/Client/ClientHeader/ClientNavigation";
import Footer from "../role/Client/Footer";
import PageNotFoundImage from "../images/concept-of-broken-links.png";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <ClientNavigation />
      <div className="flex items-center justify-center flex-col py-[5%]">
        <img
          src={PageNotFoundImage}
          alt="page not found"
          className="w-3/5 h-3/5 object-contain"
        />
        <div className="text-3xl active font-semibold my-2">Error 404</div>
        <div className="text-3xl font-semibold my-2">Something went wrong!</div>
        <div className="text-gray-400 my-2">
          Sorry, but we are unable to open this page.
        </div>
        <Link
          to="/"
          className="bg-purple-gradient px-6 py-2 rounded text-white"
        >
          Go back to Homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default PageNotFound;
