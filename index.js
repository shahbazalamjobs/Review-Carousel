
// index.js 

const userData = [
    {
        userImageSrc: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userName: 'Alice Johnson',
        userOccupation: 'Software Engineer',
        userReview: 'Exceptional experience! The product exceeded my expectations. The team was responsive and the quality of service was top-notch.'
    },
    {
        userImageSrc: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userName: 'Bob Smith',
        userOccupation: 'Graphic Designer',
        userReview: 'As a designer, attention to detail is crucial for me. Im happy to say that this product not only met but exceeded my expectations.Highly recommended!'
    },
    {
        userImageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userName: 'Charlie Davis',
        userOccupation: 'Marketing Manager',
        userReview: 'Our team had a fantastic experience working with this product. It streamlined our workflow and improved collaboration. 5 stars!'
    },
    {
        userImageSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userName: 'David Miller',
        userOccupation: 'Data Scientist',
        userReview: 'Being a data scientist, I appreciate tools that are both powerful and user-friendly. This product checked all the boxes for me. Great job!'
    },
    {
        userImageSrc: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        userName: 'Eva Martinez',
        userOccupation: 'UX Designer',
        userReview: 'The user experience of this product is outstanding. It made our design process much smoother, and the collaboration features are excellent.'
    },
    // Add more users as needed
];


const userImage = document.querySelector('.carousel__profileImage')
const userName = document.querySelector('.carousel__userName')
const userOccupation = document.querySelector('.carouse__userOccupation')
const userReview = document.querySelector('.carousel__userReview')
const leftSlide = document.querySelector('.carousel__leftSlide')
const rightSlide = document.querySelector('.carousel__rightSlide')
const button = document.querySelector('.carousel__submit')

let currentSlideIndex = 0;
// let randomSlideIndex = Math.floor(Math.random() * userData.length);


function currentSlider(currentSlideIndex) {
    userImage.src = userData[currentSlideIndex].userImageSrc;
    userName.innerHTML = userData[currentSlideIndex].userName;
    userOccupation.innerHTML = userData[currentSlideIndex].userOccupation;
    userReview.innerHTML = userData[currentSlideIndex].userReview;
}

currentSlider(currentSlideIndex);


leftSlide.addEventListener('click', () => {
    if (isFirstImage()) {
        currentSlideIndex = userData.length - 1;
        return currentSlider(currentSlideIndex);
    }

    currentSlideIndex -= 1;
    return currentSlider(currentSlideIndex);
});

rightSlide.addEventListener('click', () => {
    if (isLastImage()) {
        currentSlideIndex = 0;
        return currentSlider(currentSlideIndex);
    }

    currentSlideIndex += 1;
    return currentSlider(currentSlideIndex);
});

button.addEventListener('click', () => {
    let randomSlideIndex = Math.floor(Math.random() * userData.length);
    return currentSlider(randomSlideIndex);
});

function isFirstImage() {
    return (currentSlideIndex === 0);
}

function isLastImage() {
    return (currentSlideIndex === userData.length - 1);
}