const TopPlaylistButton = ({ playlistTitle, onClick,imageUrl }) => {
    return (
    <div
        // style={{
        //     backgroundColor: '#313131',
        //     padding: '15px 40px',
        //     borderRadius: '10px',
        //     border: 'none',
        //     cursor: 'pointer',
        //     margin:'30px 30px',
        //     padding:'0px',
        //     display:'flex',
        //     justifyContent:'flex-start',
        //     alignItems:'center',
        //     width:'470px',
        // }}
        
        onClick={onClick}
    >
        <img src={imageUrl} alt="" 
        style={{
            width: '100px',
            height: '100px',
            marginRight:'20px',
            borderRadius:'10px 0px 0px 10px',
        }}/>
        <h1
        style={{
            marginRight:'20px',
            fontSize:'20px',
            color:'white'
            
        }}
        >{playlistTitle}</h1>
    </div>
    );
};

export default TopPlaylistButton;