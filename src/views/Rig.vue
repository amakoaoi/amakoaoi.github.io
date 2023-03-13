<template>
    <section>
        <h2 v-tr>What is rig?|Le rig, c'est quoi ?</h2>
        <figure>
            <blockquote cite="https://fr.wikipedia.org/wiki/Rigging" v-if="isFrench()">
                <p v-tr>
                    Le squelettage ou rigging est un procédé en synthèse d'images 3D qui dote un objet à animer d'un
                    squelette profond mobile qui déformera son maillage (mesh) de surface. Il s'agit pour le rigger de
                    choisir les endroits où seront placés les axes de rotations, afin de permettre les mouvements désirés
                    (bielle de locomotive à vapeur, pistons d'un moteur à combustion interne, rotules et coudes d'un
                    personnage, etc.). Pour les personnages, la contraction des muscles et l'affleurement des os à la
                    surface de la peau lors des mouvements dépendent entièrement
                    du choix des axes de rotation et de l'amplitude que l'on leur accorde lors du rigging. La facilité
                    d'animer un objet en 3D dépend donc principalement de la qualité de son rigging.
                </p>
                <p v-tr>
                    L'objet à animer est représenté en deux parties : la surface de l'objet appelée mesh (maillage) et un
                    ensemble hiérarchisé d'os interconnectés appelé squelette ou rig. Chaque os a une transformation
                    tridimensionnelle (rotation, homothétie et translation) et éventuellement un os parent, formant un
                    ensemble hiérarchisé où la transformation complète d'un os enfant est le produit de la transformation
                    des os parents et de la sienne propre. Ainsi lorsque le fémur bouge, la jambe et le pied suivent le
                    mouvement. Quand un objet est animé, ses os changent de transformation au cours du temps, sous le
                    contrôle de l'animateur. Un squelette est composé de cinématique directe (en) et inverse qui
                    interagissent entre elles. L'animation squelettique travaille les parties en cinématique directe du
                    squelette, où une configuration donnée des os correspond à une pose unique.
                </p>
                <p v-tr>
                    Un processus de maillage (skinning) associe chaque os du squelette à une portion de la peau de l'objet à
                    animer, cependant une portion donnée de la peau peut être associée à plusieurs os, selon une pondération
                    précise.
                </p>
            </blockquote>
            <blockquote cite="https://en.wikipedia.org/wiki/Skeletal_animation" v-else>
                <p>Skeletal animation or rigging is a technique in computer animation in which a character (or other
                    articulated object) is represented in two parts: a surface representation used to draw the character
                    (called the mesh or skin) and a hierarchical set of interconnected parts (called bones, and collectively
                    forming the skeleton or rig), a virtual armature used to animate (pose and keyframe) the mesh.[1] While
                    this technique is often used to animate humans and other organic figures, it only serves to make the
                    animation process more intuitive, and the same technique can be used to control the deformation of any
                    object—such as a door, a spoon, a building, or a galaxy. When the animated object is more general than,
                    for example, a humanoid character, the set of "bones" may not be hierarchical or interconnected, but
                    simply represent a higher-level description of the motion of the part of mesh it is influencing.
                </p>
                <p>As described in an instructional article by Josh Petty: <br>

                    Rigging is making our characters able to move. The process of rigging is we take that digital sculpture,
                    and we start building the skeleton, the muscles, and we attach the skin to the character, and we also
                    create a set of animation controls, which our animators use to push and pull the body around.
                </p>
                <p>
                    This technique constructs a series of bones (which need not correspond to any real-world anatomical
                    feature), sometimes also referred to as rigging in the noun sense. Each bone has a three-dimensional
                    transformation from the default bind pose (which includes its position, scale and orientation), and an
                    optional parent bone. The bones therefore form a hierarchy. The full transform of a child node is the
                    product of its parent transform and its own transform. So moving a thigh-bone will move the lower leg
                    too. As the character is animated, the bones change their transformation over time, under the influence
                    of some animation controller. A rig is generally composed of both forward kinematics and inverse
                    kinematics parts that may interact with each other. Skeletal animation is referring to the forward
                    kinematics part of the rig, where a complete set of bone configurations identifies a unique pose.
                </p>
                <p>
                    Each bone in the skeleton is associated with some portion of the character's visual representation (the
                    mesh) in a process called skinning. In the most common case of a polygonal mesh character, the bone is
                    associated with a group of vertices; for example, in a model of a human being, the bone for the thigh
                    would be associated with the vertices making up the polygons in the model's thigh. Portions of the
                    character's skin can normally be associated with multiple bones, each one having a scaling factors
                    called vertex weights, or blend weights. The movement of skin near the joints of two bones, can
                    therefore be influenced by both bones. In most state-of-the-art graphical engines, the skinning process
                    is done on the GPU thanks to a shader program.
                </p>
            </blockquote>
            <figcaption>—<cite>Wikipedia</cite></figcaption>
        </figure>
    </section>
    <section class="img-section">
        <sl-image-comparer>
            <img slot="before" src="../assets/img/rig/armchair2.webp" alt="Armchair with rig" />
            <img slot="after" src="../assets/img/rig/armchair.webp" alt="Armchair mesh only" />
        </sl-image-comparer>
    </section>


    <section>
        <h2 v-tr>Presentation of my graduation project|Présentation de mon projet de fin d'étude</h2>
        <p v-tr>
            As part of my studies, I was asked to work with a team to create a short film on the theme of " Not so stupid".
            The artistic direction was free, while taking care however to respect the royalties and not to not to
            plagiarize. So we went for a style inspired by Tim Burton's to bring a dark and terrifying to bring a dark and
            terrifying atmosphere to our short film. Each person on the team had the opportunity to the opportunity to focus
            on the areas that interested them the most. So I created created all the rigs for our film, plus I did the video
            editing and the poster.
            |
            Dans le cadre de mes études, j'ai été amenée à concevoir en équipe un court-métrage dont le thème était «
            Pas si bête ». La direction artistique était libre, en veillant cependant à respecter les droits d'auteur et
            ne pas faire de plagiat. Nous nous sommes donc dirigés vers un style inspiré de celui de Tim Burton pour
            apporter une ambiance sombre et terrifiante à notre court-métrage. Chaque personne de l'équipe a eu
            l'occasion de se pencher plus particulièrement sur les domaines qui les intéressaient le plus. Ainsi j'ai
            créé tous les rigs de notre film, de plus j'ai fait le montage vidéo et l'affiche.
        </p>
    </section>

    <iframe src="https://www.youtube.com/embed/dffoRmh3L_g" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

    <section>
        <h2 v-tr>Gallery|Galerie</h2>
        <div class="carousel">
            <div class="carousel-img">
                <div :style="{ transform: `translateX(-${i * 100}%)` }">
                    <img src="../assets/img/rig/clock.webp" alt="clock">
                    <img src="../assets/img/rig/josh-manteau.webp" alt="Josh manteau">
                    <img src="../assets/img/rig/armchair2.webp" alt="armchair">
                    <img src="../assets/img/rig/lantern.webp" alt="lantern">
                    <img src="../assets/img/rig/wardrobe.webp" alt="wardrobe">
                </div>
            </div>
            <div class="carousel-btn">
                <button @click="previous()"><sl-icon name="chevron-left"></sl-icon></button>
                <button @click="next()"><sl-icon name="chevron-right"></sl-icon></button>
            </div>

        </div>


    </section>

    <section>
        <h2 v-tr>After my studies|Après mes études</h2>
        <p v-tr>
            Once I finished my studies I started to learn scripting in Python in order to create scripts in maya. So I
            created two scripts :
            |
            Une fois mes études finies j'ai commencé à apprendre le scripting en Python afin de créer des scripts dans
            maya. J'ai donc créé deux scripts :
        <ul>
            <li v-tr>A tool that allows you to rename objects efficiently and to respect nomenclatures easily.
                |
                Un outil permettant de renommer les objets de manière efficace ainsi que de respecter les nomenclatures
                facilement.</li>
        </ul>
        </p>
        <div class="tools">
            <img src="../assets/img/rig/renamer2.webp" alt="Renamer">
            <div class="explanation">
                <div class="speech-bubble">
                    <p v-tr>Prefix: Adds a prefix to all selected elements.|Prefix : Ajoute un préfixe à tous les éléments
                        séléctionnés.</p>
                    <p v-tr>Suffix: Adds a suffix to all selected elements.|Suffix : Ajoute un suffixe à tous les éléments
                        séléctionnés.</p>
                </div>
                <div class="speech-bubble">
                    <p v-tr>Search for/Replace with : Allows to replace a part of the name.|Search for/Replace with : Permet
                        de remplacer une partie du nom.</p>
                </div>
                <div class="speech-bubble">
                    <p v-tr>Section for adding a predefined suffix to all selected elements.
                        |
                        Section permettant d'ajouter
                        sur tous les éléments sélectionnés un suffixe prédéfini.</p>
                </div>
                <div class="speech-bubble">
                    <p v-tr>Allows you to rename the selected elements with a numbering according to the number of number of
                        elements.
                        |
                        Permet de renommer les éléments sélectionnés avec une numérotation en fonction du nombre
                        d'éléments.</p>
                </div>
            </div>
        </div>
        <ul>
            <li v-tr>A tool to change the shape of the rig controllers and their color.
                |
                Un outil permettant de changer la forme des contrôleurs des rigs ainsi que leur couleur.</li>
        </ul>
        <div class="tools">
            <img src="../assets/img/rig/shapebox2.webp" alt="">
        </div>
    </section>
</template>

<script setup>
import { isFrench } from "../i18n"

let i = $ref(0)
function next() {
    if (i === 4) {
        i = 0
    } else {
        i++
    }
}
function previous() {
    if (i === 0) {
        i = 4
    } else {
        i--
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    position: relative;

    .carousel-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        button {
            background: rgba(255, 255, 255, 0.3);
            height: 30%;
            font-size: 1.3rem;
            border: none;
            cursor: pointer;

            &:first-child {
                padding-right: 10px;
                border-top-right-radius: 50%;
                border-bottom-right-radius: 50%;
            }

            &:last-child {
                padding-left: 10px;
                border-top-left-radius: 50%;
                border-bottom-left-radius: 50%;
            }
        }
    }

    .carousel-img {
        overflow-x: hidden;
        border-radius: 7px;

        div {
            display: flex;
            transition: transform 500ms;
        }
    }
}


.img-section {
    background: none;
    padding: 0;

    img {
        border-radius: 10px;
    }
}

section {
    margin: 20px auto;
    max-width: 50%;
    color: black;
    background: rgba(255, 255, 255, 0.7);
    padding: 30px;
    border-radius: 10px;

    h2 {
        margin-bottom: 1em;
    }

    p {
        text-indent: 30px;
        text-align: justify;
    }

    img {
        max-width: 100%;
    }
}

.speech-bubble {
    position: relative;
    background: #1d1624;
    border-radius: .4em;
    color: white;
    padding: 10px;
    margin-bottom: 10px;

    p {
        text-indent: 10px;
        text-align: left;
    }
}

.speech-bubble:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right-color: #1d1624;
    border-left: 0;
    margin-top: -12px;
    margin-left: -12px;
}

#maya-tools {
    display: flex;
    flex-direction: column;
}

.tools {
    display: flex;
    margin: 20px 0;
}

.explanation {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    font-size: .9rem;
    position: relative;

    .speech-bubble:nth-child(2) {
        top: 30px;
    }

    .speech-bubble:nth-child(3) {
        top: 50px;
    }

    .speech-bubble:nth-child(4) {
        top: 50px;
    }
}

iframe {
    margin: auto;
    display: block;
    width: 50vw;
    height: calc(50vw * 9 /16);
    border-radius: 10px;
}

figure {
    blockquote {
        border-left: 2px solid black;
        padding-left: 30px;
    }

    figcaption {
        text-align: right;
    }
}

@media screen and (max-width: 600px) {
    section {
        max-width: inherit;
        padding: 20px;
        border-radius: 0;

        &:first-child {
            margin-top: 0;
            padding-top: 50px;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    iframe {
        margin: auto;
        display: block;
        width: 100vw;
        height: calc(100vw * 9 /16);
        border-radius: 0;
    }

    .img-section {
        img {
            border-radius: 0;
        }

    }

    .tools {
        flex-direction: column;
        margin: 10px 0;

        .explanation {
            .speech-bubble:nth-child(2) {
                top: 0;
            }

            .speech-bubble:nth-child(3) {
                top: 0;
            }

            .speech-bubble:nth-child(4) {
                top: 0;
                margin-bottom: 0;
            }
        }

        .speech-bubble {
            background: transparent;
            color: black;
            padding: 10px 0;
            margin-bottom: 10px;
            text-align: justify;
            border-bottom: 1px solid black;
            border-radius: 0;
        }

        .speech-bubble:after {
            opacity: 0;
        }
    }
}
</style>