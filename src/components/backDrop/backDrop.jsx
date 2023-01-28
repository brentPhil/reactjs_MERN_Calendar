import { motion } from "framer-motion";

const Backdrop = ({ children, onClick}) => {

    return (
        <motion.div 
        className="fixed top-0 flex justify-center items-center left-0 z-10 bg-black/30 w-full h-full"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;