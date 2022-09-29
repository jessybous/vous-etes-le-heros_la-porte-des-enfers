let chaptersObj= {
   resetPage: {
    subtitle: "La porte mystérieuse",
    text: "Luka, une jeune personne non-binaire se promenait dans une forêt pour prendre l'air, à minuit. Juste avant cela, Luka se trouvait à deux feux de camp avec ses amis. Au bout d'une trentaine de minutes de marche, Luka Appercois une maison entourait d'arbres. cette maison   avait une porte rouge flamboyant, ce qui était très bizarre pour une maison en plein milieu d'une forêt. Curieux, il se demande s'il devrait ouvrir la porte, ou faire demi tour. Quel choix devrait-il faire?",
    img:"porte.png",
    options:{ option1:{optionText:"ouvrir la porte", action: "goToChapter('open')"},
             option2:{optionText:"Ne pas ouvrir", action:"goToChapter('dontOpen')"}}
},

open: {
    subtitle: "Le délire",
    text: "Luka se dirige vers la fameuse porte. À son contact, un frisson parcourt son corps et glace son sang. Au bout de quelques secondes d’hésitation, il fini par ouvrir la porte et rentrer dans la maison abandonnée. Au bout de quelques pas à l’intérieur de la maison, la porte claque derrière lui, le faisant sursauter. Il regarde autour de lui et se rend compte d’une soudaine odeur de pourriture. Il ignore l’odeur, se disant que c’était tout simplement dû à la vieillesse de la maison. Luka plisse les yeux pour essayer de voir quelque chose dans cette baraque, mais tout était trop sombre. Il sort la lampe de son téléphone pour mieux voir, mais sa vision était double. Plus les secondes passaient, plus il était étourdi, et il finit par s’évanouir. Lors de son réveil, Luka entend des bruits étranges, un peu comme des cliquettements de monstre. Malheureusement, il était dans le noir totale et ne pouvait pas voir la source de l’objet. Doit-il se diriger vers les bruits, ou rester sur place?",
    img:"porte.png",
    options:{ option1:{optionText:"Ressortir", action: "goToChapter('sortir')"},
    option2:{optionText:"Aller vers le bruit", action:"goToChapter('goToNoise')"},
    option3:{optionText:"Attendre", action:"goToChapter('wait')"}}
},
dontOpen: {
    subtitle: "GameOver",
    text: "Luka decide de faire demi-tour. Soudainement, il se fait attaquer par des loup et meurt.",
    img:"porte.png",
    options:{ option1:{optionText:"Recommencer", action: "goToChapter('resetPage')"},}
},

sortir: {
    subtitle: "GameOver",
    text: "Luka decide de sortir par la porte. Soudainement, il se fait attaquer par des loup et meurt.",
    img:"porte.png",
    options:{ option1:{optionText:"Recommencer", action: "goToChapter('resetPage')"},}
},

goToNoise: {
    subtitle: "GameOver",
    text: "Luka décide de se lever et marcher vers les bruits. Malheureusement, la créature lui saute dessus et le tue. Vous avez récupérer un bout de vitre pointu.",
    img:"porte.png",
    options:{ option1:{optionText:"Recommencer", action: "goToChapter('resetPage')"},}
},
wait: {
    subtitle: "L'affrontement",
    text: "Luka décide de ne rien tempêter et d’attendre. Plus le temps passe, plus les bruits se rapproche. La créature était tellement proche de lui qu’il arrêta de respirer. Au bout de 10 secondes, le silence était complet. Luka regarde autour de lui pour essayer de voir quelque-chose mais en vain. Soudain, quelque chose d’énorme saute sur lui et lui hurle dessus, ce qui fait Luka hurler de peur il essaie de se débattre, mais la créature le tient fermement. C’était lui ou la créature. Il tape à coter de lui pour essayer de trouver quelque chose de pointu pour attaquer la créature. Luka a-t-il un objet pointu en sa possession?",
    img:"porte.png",
    options:{ option1:{optionText:"Oui", action: "goToChapter('glass')"},
    option1:{optionText:"Non", action: "goToChapter('death')"}
}
},

death: {
    subtitle: "GameOver",
    text: "Luka décide de se lever et marcher vers les bruits. Malheureusement, la créature lui saute dessus et le tue. Vous avez récupérer un bout de vitre pointu.",
    img:"porte.png",
    options:{ option1:{optionText:"Recommencer", action: "goToChapter('resetPage')"},}
},

glass: {
    subtitle: "vie ou mort",
    text: "Lorsqu’il tape à coter de lui, il sentit un objet lisse et pointu. Il l’attrape et poignarde la créature. Devrait-il essayer de bouger la chose et s’enfuir?",
    img:"porte.png",
    options:{ option1:{optionText:"S'enfuire", action: "goToChapter('run')"},
    option1:{optionText:"rester", action: "hemoragie"}
}
},
run: {
    subtitle: "Le lac enchanté",
    text: "Luka dégage la créature et se met à courir comme il n’as jamais couru dans sa vie. Il bouscule quelque chose qui ressemble à des escaliers et monte. Il voit au loin la forme d’une porte créer par la lumière provenant d’en dehors de la maison. Il défonce la porte, mais a sa surprise, il ne retrouve pas le foret qu’il attendait de voir. Autour de lui se trouvait des choses inexplicables. Des créatures de toutes sortes, des arbres déformés, etc. tout autour de lui bougeaient, et il sentit une soudaine envie de vomir. Les bruits de la créature se rapprochait de lui et il se remit à courir. Au bout d’une course de 20 minutes, Luka trébuche dans quelque chose qui ressemble à un lac. Il sort de l’eau pour respirer et soudainement tout devient plus clair autour de lui. Les arbres arrêtent de bouger, les créatures disparaissent et tout pris la forme de la forêt de ses souvenirs. Les bruits de monstres se transforma en la voix de ses amis qui l’appellent au loin. Après une enquête policière, la vérité sur ce qui s’est passé éclate. Dans la maison se trouvait un gaz hallucinogène propager dans la maison pas les membres d’un culte, qui ont pris Luka en hottage pour le sacrifier dans un rituel.",
    img:"porte.png",
    options:{ option1:{optionText:"Recommencer", action: "goToChapter('resetPage')"},}
},
hemoragie: {
    subtitle: "GameOver",
    text: "la créature est trop lourde pour vous. plus le temps passe plus Luka a une sensation de brûlure dans ses poumons et fini par mourir d'une hémoragie",
    img:"porte.png"
},
options:{ option1:{optionText:"Recommencer", action: "goToChapter('resetPage')"},}
}



function goToChapter(chapterName){
    console.log(chaptersObj[chapterName]["subtitle"])
    console.log(chaptersObj[chapterName]["text"])
}