import playIcon from "../img/play-button-icon.jpg"
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-36 px-16">
            <h1 className="text-3xl font-bold">
                {title}
            </h1>
            <p className="py-6 text-lg w-1/3">
                {overview}
            </p>
            <div className="">
                <button className="bg-gray-500 py-2 px-7 text-white justify-center bg-opacity-50 rounded-sm items-center text-center">
                    &#9654;
                    Play</button>
                <button className=" mx-2 bg-gray-500 py-2 px-7 text-white justify-center bg-opacity-50 rounded-sm items-center text-center">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle