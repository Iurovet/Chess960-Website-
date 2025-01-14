import BlackEmptyRows from './BlackEmptyRows.js';

function BlackOrientation(props) {
    return (
        <>
            <div className="black"><img src={"/Images/white" + props.pieces[7] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/white" + props.pieces[6] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/white" + props.pieces[5] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/white" + props.pieces[4] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/white" + props.pieces[3] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/white" + props.pieces[2] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/white" + props.pieces[1] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/white" + props.pieces[0] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/whitepawn.png"} alt="" width="100" height="100"></img></div>

            <BlackEmptyRows />

            <div className="black"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/blackpawn.png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/black" + props.pieces[7] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/black" + props.pieces[6] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/black" + props.pieces[5] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/black" + props.pieces[4] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/black" + props.pieces[3] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/black" + props.pieces[2] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="white"><img src={"/Images/black" + props.pieces[1] + ".png"} alt="" width="100" height="100"></img></div>
            <div className="black"><img src={"/Images/black" + props.pieces[0] + ".png"} alt="" width="100" height="100"></img></div>
        </>
    );
}

export default BlackOrientation