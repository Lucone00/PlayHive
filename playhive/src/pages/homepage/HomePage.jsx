import Navbar from "./navbar/Navbar";
import NewPost from "./newpost/NewPost";
import NewsSection from "./news/NewsSection";
import ProfileCard from "./profilecard/ProfileCard";

function HomePage(){
return <>
        <div className="bg-[#1D222D]">
                <Navbar/>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-0">
                        <ProfileCard/>
                        <NewPost/>
                        <div>Ciao</div>
                <div className="flex gap-x-3 mx-6">
                        <div className="max-w-sm py-4 px-8 bg-gray-800 shadow-lg rounded-lg my-10 text-slate-300">
                                <h3>NEWS</h3>
                                <hr />
                                <NewsSection/>
                                <NewsSection/>
                        </div>
                </div>
                </div>
        </div>
        </>
}

export default HomePage;