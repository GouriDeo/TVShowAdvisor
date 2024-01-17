import {StarFill, StarHalf, Star as StarEmpty} from "react-bootstrap-icons"

export function FiveStarRating({rating}){

    //Declare icon array
    const starList = [];

    //Store number of filled stars
    const starFillCount = Math.floor(rating);

    //Store if yes or no there is half start
    const hasHalfStar = rating - parseInt(rating) >= 0.5;

    //Store the no. of empty starts
    const emptyStarCount = 5- starFillCount- (hasHalfStar ? 1 :0);
    //Push the filled star icon
    for(let i=1; i<=starFillCount; i++){
        starList.push(< StarFill key = {"star-fill"+i}/>);
    }

    //
    if (hasHalfStar){
        starList.push(<StarHalf key = {"star-half"}/>)
    }

    //
    for (let i=1; i<= emptyStarCount; i++){
        starList.push(<StarEmpty key = {"star-empty"+i}/>)
    }
    return <div>
        {starList}
    </div>
}