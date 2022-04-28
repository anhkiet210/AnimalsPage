import { useState, useEffect } from "react";
import ClientNavigation from "../ClientHeader/ClientNavigation";
import Footer from "../Footer";
import AnimalsApi from ".././../../api/animalsApi";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import ExploreList from "./ExploreList";
import Pagination from "../../../components/UI/Pagination";
const Explore = () => {
  const [allAnimal, setAllAnimal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const animalByStatus = allAnimal.filter(item => item.postStatus === 1)
  const totalPage = Math.ceil(animalByStatus?.length / 8)

  useEffect(() => {
    const fetchAllAnimal = async () => {
      try {
        setIsLoading(true);
        const response = await AnimalsApi.getAll();
        setAllAnimal(response);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    fetchAllAnimal();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="">
          <ClientNavigation />
          <div className="mt-[5%] p-[5%]">
            <h1 className="font-semibold my-6 text-2xl">Danh sách động vật</h1>
            <Pagination
              data={animalByStatus}
              RenderComponent={ExploreList}
              pageLimit={totalPage}
              dataLimit={8}
            />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
export default Explore;
