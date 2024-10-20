import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setisLiked] = useState(false);
    let toggleLike = () => {
        let newVal = !isLiked;
        console.log(newVal);
    }
    return (
        <div>
            <p onClick={toggleLike}>
                <i className="fa-regular fa-heart"></i>
            </p>
        </div>

    )
}