import playIcon from "../img/play-button-icon.jpg"
import { GoTriangleRight } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";


const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-16 absolute bg-gradient-to-r from-black text-white">
            <h1 className="text-3xl font-bold">
                {title}
            </h1>
            <p className="py-6 text-lg w-1/3">
                {overview}
            </p>
            <div className="flex">
                <button className="bg-white text-black py-2 px-7 justify-center rounded-md items-center text-center flex mx-2 hover:bg-opacity-80">
                    <GoTriangleRight className="scale-[2]" /> Play
                </button>
                <button className="bg-gray-500 py-2 px-4 text-white justify-center bg-opacity-50 rounded-md items-center text-center flex hover:bg-opacity-80"> <IoIosInformationCircleOutline className=" m-1 scale-[1.3]" /> More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle