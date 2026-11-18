import {useState} from "react";
function LikeButton(){
    const [isToggle, setIsToggle] = useState(false);
    const [clicks, setClicks] = useState(0);
    let toggle=()=>{
        setIsToggle(!isToggle);
        setClicks(clicks+1);
    };
    let likeStyle = {color: "red"};
    return(
        <div>
            <p>clicks = {clicks}</p>
            <p onClick={toggle}>
                {isToggle ? 
                  (<i className="fa-solid fa-heart" style={likeStyle}></i>) 
                    : 
                  (<i className="fa-regular fa-heart"></i>)
                }
            </p>
        </div>
    )
}

export default LikeButton;