document.addEventListener('DOMContentLoaded', function () {
    const studioSlider = {
        items: '.sliderPicture-item',
        next: '.slider-btn--prev',
        prev: '.slider-btn--next',
        dotsWrap: '#sliderNav',
        dots: '.sliderPicture-dots'
    };

    function Slider(template) {
        this.slidePicture = document.querySelectorAll(template.items);
        this.slideText = document.querySelectorAll(template.text);
        this.prevBtn = document.querySelector(template.prev);
        this.nextBtn = document.querySelector(template.next);
        this.dotsWrap = document.querySelector(template.dotsWrap);
        this.dotsCollection = document.querySelectorAll(template.dots);
        let slideIndex = 1;
        let dots = this.dotsCollection;

        if (document.body.querySelector(template.items)) {
            const showSlides = (n) => {
                if (n > this.slidePicture.length) {
                    slideIndex = 1;
                }
                if (n < 1) {
                    slideIndex = this.slidePicture.length;
                }
                this.slidePicture.forEach(item => item.classList.remove('active'));
                this.dotsCollection.forEach(item => item.classList.remove('active'));

                this.slidePicture[slideIndex - 1].classList.add('active');
                this.dotsCollection[slideIndex - 1].classList.add('active');
            };
            const swipeSlider = () => {
                this.slidePicture.forEach(item => {
                    item.addEventListener('click', function () {
                        if (item.classList.contains('active')) {
                            plusSlides(-1);
                        } else {
                            plusSlides(1);
                        }
                    });
                });
            };
            swipeSlider();

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function currentSlideStudio(n) {
                showSlides(slideIndex = n);
            }

            this.prevBtn.addEventListener('click', () => plusSlides(-1));

            this.nextBtn.addEventListener('click', () => plusSlides(1));

            showSlides(slideIndex);

            this.dotsWrap.addEventListener('click', function (event) {
                for (let i = 0; i < dots.length + 1; i++) {
                    if (event.target.classList.contains(template.dots.substr(1, template.dots.length)) && event.target === dots[i - 1]) {
                        currentSlideStudio(i);
                    }
                }
            });
        }
    }

    new Slider(studioSlider);
});
