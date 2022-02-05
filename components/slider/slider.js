const slider = document.querySelector(".slider");
const sliderValueOutput = document.querySelector(".slider-value");
sliderValueOutput.innerText = slider.value;

slider.oninput = (e) => {
    sliderValueOutput.innerText = e.target.value;
}