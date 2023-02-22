<template>
    <section>
        <h2>Le rig, c’est quoi ?</h2>
        <figure>
            <blockquote cite="https://fr.wikipedia.org/wiki/Rigging">
                <p>
                    Le squelettage ou rigging est un procédé en synthèse d'images 3D qui dote un objet à animer d'un
                    squelette
                    profond
                    mobile qui déformera son maillage (mesh) de surface. Il s'agit pour le rigger de choisir les
                    endroits où
                    seront
                    placés les axes de rotations, afin de permettre les mouvements désirés (bielle de locomotive à
                    vapeur,
                    pistons
                    d'un
                    moteur à combustion interne, rotules et coudes d'un personnage, etc.). Pour les personnages, la
                    contraction des
                    muscles et l'affleurement des os à la surface de la peau lors des mouvements dépendent entièrement
                    du
                    choix des
                    axes
                    de rotation et de l'amplitude que l'on leur accorde lors du rigging. La facilité d'animer un objet
                    en 3D
                    dépend
                    donc
                    principalement de la qualité de son rigging.
                </p>
                <p>
                    L'objet à animer est représenté en deux parties : la surface de l'objet appelée mesh (maillage) et
                    un
                    ensemble
                    hiérarchisé d'os interconnectés appelé squelette ou rig. Chaque os a une transformation
                    tridimensionnelle
                    (rotation, homothétie et translation) et éventuellement un os parent, formant un ensemble
                    hiérarchisé où
                    la
                    transformation complète d'un os enfant est le produit de la transformation des os parents et de la
                    sienne
                    propre. Ainsi lorsque le fémur bouge, la jambe et le pied suivent le mouvement. Quand un objet est
                    animé, ses os
                    changent de transformation au cours du temps, sous le contrôle de l'animateur. Un squelette est
                    composé
                    de
                    cinématique directe (en) et inverse qui interagissent entre elles. L'animation squelettique
                    travaille
                    les
                    parties en cinématique directe du squelette, où une configuration donnée des os correspond à une
                    pose
                    unique.
                </p>
                <p>
                    Un processus de maillage (skinning) associe chaque os du squelette à une portion de la peau de
                    l'objet à
                    animer,
                    cependant une portion donnée de la peau peut être associée à plusieurs os, selon une pondération
                    précise.
                </p>
            </blockquote>
            <figcaption>—<cite>Wikipedia</cite></figcaption>
        </figure>
    </section>

    <section>
        <h2>Présentation de mon projet de fin d’étude </h2>
        <p>
            Dans le cadre de mes études, j’ai été amenée à concevoir en équipe un court-métrage dont le thème était «
            Pas si bête ». La direction artistique était libre, en veillant cependant à respecter les droits d’auteur et
            ne pas faire de plagiat. Nous nous sommes donc dirigés vers un style inspiré de celui de Tim Burton pour
            apporter une ambiance sombre et terrifiante à notre court-métrage. Chaque personne de l’équipe a eu
            l’occasion de se pencher plus particulièrement sur les domaines qui les intéressaient le plus. Ainsi j’ai
            créé tous les rigs de notre film, de plus j’ai fait le montage vidéo et l’affiche.
        </p>
    </section>
    <iframe src="https://www.youtube.com/embed/dffoRmh3L_g" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

    <section>
        <h2>Après mes études</h2>
        <p>
            Une fois mes études finies j’ai commencé à apprendre le scripting en Python afin de créer des scripts dans
            maya. J’ai donc créé deux scripts :
        <ul>
            <li>Un outil permettant de renommer les objets de manière efficace ainsi que de respecter les nomenclatures
                facilement.</li>
            <li>Un outil permettant de changer la forme des contrôleurs des rigs ainsi que leur couleur.</li>
        </ul>
        </p>
    </section>



</template>

<script setup>

</script>

<style lang="scss" scoped>
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
}

iframe {
    margin: auto;
    display: block;
    width: 50vw;
    height: calc(50vw * 9 /16);
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
</style>