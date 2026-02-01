import { easeOut, motion } from "motion/react"
import team from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96 my-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   <div className="flex-1">
                     <motion.img
                        src={team}
                        className="w-80 rounded-t-[30px] rounded-br-[30px] border-l-4 border-b-4 border-blue-400"
                        animate={{y: [0, 50,0]}}
                        transition={{duration:10, delay:0.5, repeat:Infinity}}
                    />
                     <motion.img
                        src={team2}
                        className="w-80 rounded-t-[30px] rounded-br-[30px] border-l-4 border-b-4 border-blue-400"
                        animate={{x: [100, 150,100]}}
                        transition={{duration:10, delay:0.5, repeat:Infinity}}
                    />
                   </div>
                    <div className="flex-1">
                        <motion.h1 
                        animate={{ x: [0, 50, 0] }}
                        transition={{duration:5, delay:0.5, repeat:Infinity, ease:easeOut}}
                        className="text-5xl font-bold">Latest <motion.span 
                        animate={{color:['#CD99FF', '#A545FF', '#6B00CF']}}
                        transition={{duration:1.5, repeat:Infinity}}
                        >Job</motion.span> For You</motion.h1>

                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;