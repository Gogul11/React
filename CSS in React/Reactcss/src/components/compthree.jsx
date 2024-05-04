//Styling card3 using java script objects method

function Card3(){

    const three = {
        height: "250px",
        maxWidth: "280px",
        padding: "20px",
        backgroundColor: "rgba(180, 180, 180, 0.652)",
        color: "rgba(0, 0, 0, 0.585)",
        borderRadius: "15px",
    }

    return(
        <div style={three}>
            <h1>Card three</h1>

            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae fugit laboriosam facere omnis ipsum rerum 
                odio temporibus blanditiis aliquam mollitia 
                ab repudiandae nulla consequuntur sequi,
                soluta ducimus commodi, qui quia.</p>
        </div>
    )
}

export default Card3;