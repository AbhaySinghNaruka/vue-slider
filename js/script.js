const app = new Vue ({
    el: '.container-blur',
    data: {
        arrImages: [
            {
                image: '01.webp',
                title: "Marvel's Spiderman Miles Morale",
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            },
            {
                image: '02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            },
            {
                image: '03.webp',
                title: 'Fortnite',
                text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
            },
            {
                image: '04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            },
            {
                image: '05.webp',
                title: "Marvel's Avengers",
                text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            },
            /* {
                text: 'TEST',
            } */
        ],
        timeSlider: 1.5 * 1000,
        direction: 1,
        activeIndex: 0,
        idInterval: 0,
        isAutoplayActive: true,
        
        /* activeIndex: 0,
        a : 500000,*/
    }, 
    methods: {
        changeSlide(direction) {
            if (direction > 0) {
                this.activeIndex++;
                if (this.activeIndex === this.arrImages.length) {
                    this.activeIndex = 0;
                }
            } else {
                if (this.activeIndex === 0) {
                    this.activeIndex = this.arrImages.length;
                }
                this.activeIndex--;
            }
            
        },
        setActiveIndex(index) {
            this.activeIndex = index;
        },
        controlAutoplay() {
            if (this.isAutoplayActive) {
                this.isAutoplayActive
            } else {
                this.startAutoplay();
                this.isAutoplayActive = true;
            }
        },
        stopAutoplay() {
           clearInterval(this.idInterval);
           this.isAutoplayActive = false;
        },
        startAutoplay() {
            this.idInterval = setInterval(() => this.changeSlide(this.direction), this.timeSlider);
        },
        invertAutoplay() {
            this.direction *= -1;
        },
        stopAutoplay() {
            this.stopAutoplay();
        },
        resumeAutoplay() {
            if (this.isAutoplayActive) {
                this.startAutoplay();
            }
        }
    },
    mounted() {
        this.startAutoplay()
    }
    /* methods : {
        saySomething(str){
            console.log(str);
        }
    },

    mounted() {
        this.saySomething('CIAO');
    } */
    
});

