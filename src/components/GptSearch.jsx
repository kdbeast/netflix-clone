import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
