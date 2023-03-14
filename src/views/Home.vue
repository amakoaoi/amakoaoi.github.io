<template>
    <div class="parallax design">
        <h1 v-tr>WEB DESIGN|DESIGN WEB</h1>
    </div>
    <section class="description">
        <div class="logo-shape shape-design">
            <img src="../assets/img/logo/html.svg" alt="HTML" title="HTML">
            <img src="../assets/img/logo/css.svg" alt="CSS" title="CSS">
        </div>
        <p v-tr>During my training in computer graphics, I had a course in web design. After my diploma in computer graphics, I
            wanted to continue the web. Therefore, I deepened my knowledge in self-taught thanks to the
            OpenClassrooms platform. This allowed me to learn HTML5 as well as CSS3 and JavaScript. Making
            CSS animations has particularly interested me.
            |
            Durant ma formation en infographie, j'ai eu un cours de web design. Après mon diplôme d'infographie, j'ai eu
            envie de continuer le web. Par conséquent, j'ai approfondi mes connaissances en autodidacte grâce à la
            plateforme OpenClassrooms. Cela m'a permis d'apprendre le HTML5 ainsi que le CSS3 et le JavaScript. Faire
            des animations CSS m'a particulièrement intéressée.
        </p>
        <p v-tr>In this section, I made several experiments with animations, including a card animation that I used later.
            There are also visual feedbacks for form validation.
            |
            Dans cette section, j'ai fait plusieurs expérimentations d'animations, notamment une animation de carte que
            j'ai utilisée plus tard. Il y a également des feedbacks visuels pour la validation de formulaires.
        </p>
        <div class="btn-placeholder">
            <RouterLink v-tr class="btn" to="/design">See experiments|Voir les expérimentations</RouterLink>
        </div>
    </section>

    <div class="parallax solitaire">
        <h1 v-tr>GAMES|JEUX</h1>
    </div>
    <section class="description">
        <div class="logo-shape shape-solitaire">
            <img src="../assets/img/logo/html.svg" alt="HTML" title="HTML">
            <img src="../assets/img/logo/css.svg" alt="CSS" title="CSS">
            <img src="../assets/img/logo/javascript.svg" alt="JS" title="JS">
            <img src="../assets/img/logo/vue.svg" alt="Vue JS" title="Vue JS">
            <img src="../assets/img/logo/nodejs.svg" alt="Node JS" title="Node JS">
        </div>
        <p v-tr>After my first experiments, I decided to launch myself into bigger projects. For that I needed need a JavaScript
            framework, on the advice of a friend I decided to learn Vue still on OpenClassrooms.
            |
            Après mes premières expérimentations, j'ai décidé de me lancer dans de plus gros projets. Pour cela j'ai eu
            besoin d'un framework JavaScript, sur les conseils d'un ami j'ai décidé d'apprendre Vue toujours sur
            OpenClassrooms.
        </p>
        <p v-tr>Solitaire seemed like a good project to start with, as I was very excited to use my map animation. However, the
            drag and drop was a bit too much to handle for a first project. So I coded a sudoku to get a little more
            familiar with Vue. Then I went back to the solitaire after I gained some experience.
            |
            Le solitaire m'a semblé être un bon projet pour commencer, car j'étais très enthousiaste à l'idée d'utiliser
            mon animation de carte. Cependant, le drag and drop était un peu trop difficile à gérer pour un premier
            projet. J'ai donc codé un sudoku pour me familiariser un peu plus avec Vue. Puis je suis retourné sur le
            solitaire après avoir gagné de l'expérience.
        </p>
        <div class="btn-placeholder">
            <RouterLink class="btn desktop-only" to="/solitaire">Solitaire</RouterLink>
            <RouterLink class="btn" to="/sudoku">Sudoku</RouterLink>
        </div>
    </section>

    <div class="parallax rig">
        <h1>RIG</h1>
    </div>
    <section class="description">
        <div class="logo-shape shape-rig">
            <img src="../assets/img/logo/maya.svg" alt="Maya" title="Maya">
            <img src="../assets/img/logo/python.svg" alt="Python" title="Python">
        </div>
        <p v-tr>During my studies, I had the choice between different fields of study, so I turned to 3D. I had the opportunity
            to learn how to model, animate, edit audio and video, however one particular field However, one particular field
            caught my attention: the rig. It's about preparing the modeling for the animation, by incorporating a skeleton
            into the modeling.
            |
            Durant mes études, j'ai eu le choix entre différentes filières, je me suis donc orientée vers l'animation
            3D. J'ai eu l'occasion d'apprendre à modéliser, animer, faire du montage audio ainsi que vidéo, cependant un
            domaine particulier a capté mon attention : le rig. Il s'agit de préparer la modélisation pour l'animation,
            en incorporant un squelette à la modélisation.
        </p>
        <p v-tr>For the creation of the rigs, I used the Maya software. It is very common in animation to use scripts, these can
            be coded in MEL which is specific to Maya or in Python. I had the opportunity to learn Python during my studies
            to do scripting in Maya. I used PySide which allows to use the Qt library in Python to make graphical
            interfaces.
            |
            Pour la création des rigs, j'ai utilisé le logiciel Maya. Il est très courant dans l'animation d'utiliser
            des scripts, ceux-ci peuvent être codés en MEL qui est propre à Maya ou encore en Python. J'ai eu l'occasion
            d'apprendre Python durant mes études pour faire du scripting dans Maya. J'ai notamment utilisé PySide qui
            permet d'utiliser la bibliothèque Qt en Python pour faire des interfaces graphiques.
        </p>
        <div class="btn-placeholder">
            <RouterLink v-tr class="btn" to="/rig">Read more|En savoir plus</RouterLink>
        </div>
    </section>

    <div class="parallax drawing">
        <h1 v-tr>DRAWING|DESSIN</h1>
    </div>
    <section class="description">
        <div class="logo-shape shape-drawing">
            <img src="../assets/img/logo/photoshop.svg" alt="Photoshop" title="Photoshop">
            <img src="../assets/img/logo/ai.svg" alt="Adobe Illustrator" title="Adobe Illustrator">
            <img src="../assets/img/logo/clip_studio_paint.svg" alt="Clip Studio Paint" title="Clip Studio Paint">
            <img src="../assets/img/logo/wacom.svg" alt="Wacom" title="Wacom">
        </div>
        <p v-tr>Passionate about drawing since childhood, my parents gave me my first graphic tablet at the age of 15 and my
            first drawing software Manga Studio. During my studies I had the opportunity to learn how to use Adobe suite,
            including Photoshop and Illustrator. I recently purchased a Wacom tablet with a screen, which Wacom tablet with
            a screen, which changes my life. Since I no longer have a Photoshop student license, I decided to move on to a
            part to move towards a software more adapted to the drawing which is Clip Studio Paint.
            |
            Passionnée de dessin depuis l'enfance, mes parents m'ont offert ma première tablette graphique vers 15 ans
            ainsi que mon premier logiciel de dessin Manga Studio. Durant mes études j'ai eu l'occasion d'apprendre à
            utiliser la suite Adobe, dont Photoshop et Illustrator. J'ai récemment fait l'acquisition d'une tablette
            Wacom avec un écran, ce qui me change la vie. N'ayant plus de licence étudiante Photoshop j'ai pris le
            partie de me diriger vers un logiciel plus adapté au dessin qui est Clip Studio Paint.
        </p>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.parallax {
    min-height: 500px;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
    clear: both;

    h1 {
        border-radius: 5px;
        padding: 15px 30px;
        background: rgba(41, 31, 51, 0.5);
        backdrop-filter: blur(6px);
    }

    &.drawing {
        background-image: url("../assets/img/drawings.webp");
    }

    &.rig {
        background-image: url("../assets/img/rig.webp");
    }

    &.design {
        background-image: url("../assets/img/design.webp");
    }

    &.solitaire {
        background-image: url("../assets/img/games.webp");
    }
}

$shape-size: 300px;

.description {
    padding: 15px 30px;
    min-height: $shape-size + 30px;
    max-width: 1200px;
    margin: 30px auto;
    color: white;
    position: relative;

    .btn-placeholder {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;

        .btn {
            font-size: 1.3rem;
            padding: 15px 30px;
            margin: 15px 10px;
        }
    }

    p {
        margin-top: 10px;
        text-align: justify;
        // max-width: 600px;
        text-indent: 30px;
        font-size: 1.3rem;
    }
}

.logo-shape {
    width: $shape-size;
    height: $shape-size;
    padding: 20px;
    position: relative;
    background: linear-gradient(to bottom left, #FF3CAC, #784BA0, #2B86C5);

    img {
        width: 100%;
        max-height: $shape-size;
    }

    &.shape-design {
        border-radius: 84% 16% 75% 25% / 76% 83% 17% 24%;
        shape-outside: polygon(55.67% 3.33%, 85% -2px, 11.33% 96.67%, 1% 84.33%, -1% 69.33%, 8% 41.67%, 29% 17.67%);
        float: right;
        position: relative;
        margin-left: 20px;

        img {
            position: absolute;
            width: 35%;

            &:nth-child(1) {
                left: 15%;
                bottom: 7%;
            }

            &:nth-child(2) {
                left: 55%;
                top: 15%;
            }
        }
    }

    &.shape-solitaire {
        border-radius: 86% 14% 87% 13% / 19% 85% 15% 81%;
        float: left;
        position: relative;
        margin-right: 20px;
        shape-outside: polygon(59.33% 0.67%, 89% 1px, 94.67% 18%, 99% 48.67%, 100% 75.33%, 99.33% 87.33%, 87.03% 93%, 56.38% 98.00%, 56.38% 98.00%);

        img {
            position: relative;
            width: 25%;

            &:nth-child(1) {
                left: 11%;
                top: 12%;
            }

            &:nth-child(2) {
                left: 20%;
                top: 41%;
            }

            &:nth-child(3) {
                left: -35%;
                top: 70%;
            }

            &:nth-child(4) {
                left: -10%;
                top: 0;
            }

            &:nth-child(5) {
                left: 65%;
                top: 50%;
            }
        }
    }

    &.shape-rig {
        border-radius: 79% 21% 21% 79% / 26% 18% 82% 74%;
        float: right;
        position: relative;
        margin-left: 20px;
        shape-outside: polygon(31% 5.01%, 46% 7px, 60.66% 97.34%, 39.66% 91.33%, 21.34% 76.67%, 10.33% 63.33%, 2.67% 46%, 0.34% 29.66%, 1.33% 19.66%, 13.34% 11.32%);

        img {
            position: relative;
            width: 40%;

            &:nth-child(1) {
                left: 45%;
                top: 52%;
            }

            &:nth-child(2) {
                left: -10%;
                top: 5%;
            }
        }
    }

    &.shape-drawing {
        border-radius: 88% 12% 75% 25% / 35% 85% 15% 65%;
        float: left;
        position: relative;
        margin-right: 20px;
        shape-outside: polygon(97.67% 30.67%, 99.67% 170px, 100.33% 87%, 86% 94%, 68.33% 0.67%, 88.67% 0.00%, 92.67% 5.67%);

        img {
            position: relative;
            width: 25%;

            &:nth-child(1) {
                left: 15%;
                top: 25%;
            }

            &:nth-child(2) {
                left: 40%;
                top: 55%;
            }

            &:nth-child(3) {
                width: 40%;
                left: 5%;
                top: 5%;
            }

            &:nth-child(4) {
                width: 35%;
                left: 20%;
                top: 55%;
            }
        }
    }

}

@media screen and (max-width: 1200px) {
    .description {
        margin: 0;
    }

    .btn-placeholder {
        position: relative !important;
    }

    .logo-shape {
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 600px) {
    .logo-shape {
        width: calc($shape-size/2);
        height: calc($shape-size/2);
        float: none !important;
        margin: auto !important;
    }

    .description {
        margin: 0;
    }

    .btn-placeholder {
        position: relative !important;
    }
    .design {
        background-position: right;
    
    }
    .drawing {
        background-image: url("../assets/img/drawings_mobile.webp") !important;
    }
}
</style>
