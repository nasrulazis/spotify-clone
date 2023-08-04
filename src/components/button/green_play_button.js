const GreenButton = ({ children, onClick }) => {
    return (
    <button
        className="text-black bg-green-500 font-bold px-8 py-3 rounded-3xl hover:bg-green-400"
        onClick={onClick}
    >
        {children}
    </button>
    );
};

export default GreenButton;