const SinglePlaylistButton = ({ playlistTitle,playlistSubTitle, onClick,imageUrl }) => {
    return (
    <div
        style={{
            backgroundColor: '#313131',
            padding: '15px 40px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            margin:'30px 30px',
            padding:'20px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',
            width:'250px',
        }}
        onClick={onClick}
    >
        <img src={imageUrl} alt="" 
        style={{
            width: '200px',
            height: '200px',
            borderRadius:'5px ',
        }}/>
        <h1
        style={{
            fontWeight:500,
            fontSize:'20px',
            color:'white',
            padding:'20px 8px',
            width:'100%',
            
        }}
        >{playlistTitle}</h1>
        <p
        style={{
            fontSize:'16px',
            color:'grey',
            padding:'0px 8px',
            width:'100%',
            
        }}
        >{playlistSubTitle}</p>
    </div>
    );
};

export default SinglePlaylistButton;