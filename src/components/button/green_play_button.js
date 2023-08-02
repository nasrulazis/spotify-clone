const GreenButton = ({ children, onClick }) => {
    return (
    <button
        style={{
            backgroundColor: '#4CAF50',
            fontWeight:600,
            color: 'black',
            padding: '15px 40px',
            borderRadius: '40px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            margin:'20px 10px',
            width:'150px'
        }}
        onClick={onClick}
    >
        {children}
    </button>
    );
};

export default GreenButton;