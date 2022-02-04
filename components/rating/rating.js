const rating = document.querySelectorAll('.rating-form .rating');
const ratingItem = document.querySelector('.rating-form .rating-icn');
const ratingForm = document.querySelector('.rating-form');
const showRatingDiv = document.querySelector('.show-rating-given');

rating.forEach((rating, id) => {
    rating.addEventListener('change', () => checkStars(id));
});

const checkStars = id => {
    if(rating[id].checked){
        for(let i=id-1; i>=0; i--){
            rating[i].checked = true
            // ratingItem.classList.remove("far");
            // ratingItem.classList.add("fas");
        }
    }else{
        for(let i=id+1; i<rating.length; i++){
            rating[i].checked = false;
            // ratingItem.classList.remove('fas');
            // ratingItem.classList.add('far');
        }
    }
}

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let ratingGiven = 0;
    rating.forEach(rating => {
        if(rating.checked)
            ratingGiven+=1;
    })
    showRatingDiv.innerText = `Rating given: ${ratingGiven}`
});