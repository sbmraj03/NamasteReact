const Shimmer = () => (
    
        <div className="parent">
            {
                Array(12).fill("").map((e,index) => (
                    <div className="shimmer" key={index} ></div>
                ))
            }
        </div>
    
    
);    
    
export default Shimmer;