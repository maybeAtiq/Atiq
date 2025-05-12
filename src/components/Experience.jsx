import JobList from "./JobList";

const Experience = () => {
    return (
        
        <div id="experience" className="bg-gray-900 min-h-[50vh] mx-auto w-full py-10 px-4 md:px-20 flex flex-col justify-center">
            <span className="text-[32px] font-semibold text-green-400 mb-4">/ experience</span>
            <JobList/>
        </div>

    );
}

export default Experience;