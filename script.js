let imagesData = [
    {
    "photo":"images/01.jpg",
    "title": "Forest",
    "description": "Forests are the largest terrestrial ecosystem of Earth by area, and are found around the globe.45 percent of forest land is in the tropical latitudes. The next largest share of forests are found in subarctic climates, followed by temperate, and subtropical zones"
    },
    {
    "photo":"images/02.jpg",
    "title": "Mountain",
    "description": "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. Although definitions vary, a mountain may differ from a plateau in having a limited summit area."
    },
    {
    "photo":"images/03.jpg",
    "title": "Pinus thunbergii",
    "description": "Black pines can reach the height of 40 metres (130 feet), but rarely achieves this size outside its natural range. The needles are in fascicles of two with a white sheath at the base, 7–12 centimetres long;"
    },
    {
    "photo":"images/04.jpg",
    "title": "Flammagenitus cloud",
    "description": "Phenomena such as volcanic eruptions and forest fires can induce formation of this cloud, by mechanisms similar to those that form homogenitus clouds. The presence of a low-level jet stream can enhance its formation."
    },
    {
    "photo":"images/05.jpg",
    "title": "Flower arrangement",
    "description": "Flowers were selected according to symbolic meaning, with emphasis on religious significance.  Many other flowers have been found in the tombs of the ancient Egyptians, and garlands of flowers were worn by loved ones and left at the tombs."
    },
    {
    "photo":"images/06.jpg",
    "title": "Lilith",
    "description": "Lilith was the daughter of Mephisto and the sister of Lucion. She was known to all of Sanctuary as the Queen of the Succubi. Once the lover of the archangel Inarius, her union with him led to the creation of the first nephalem."
    },
    {
    "photo":"images/07.jpg",
    "title": "Neo-Impressionism",
    "description": "Followers of Neo-Impressionism, in particular, were drawn to modern urban scenes as well as landscapes and seashores. Science-based interpretation of lines and colors influenced Neo-Impressionists' characterization of their own contemporary art."
    },
    {
    "photo":"images/08.jpg",
    "title": "Synthwave",
    "description": "Synthwave is a particular aesthetic that draws a lot of inspiration from the 1980s. While it is particularly regarded as a musical genre, there are examples of Synthwave in movies, TV shows, art, and video games. "
    }
];

let setactive = 0

$(document).ready(function() {  
    change(setactive)
    fill(setactive)

    $(".thumb").on("click", function (){
        let actualImg = $(this).attr("data-number")
        actualImg= parseInt(actualImg);
        setactive=actualImg
        change(setactive)
        console.log($(this).data("number"))
    }); 

    $("aside#left").on("click", function (){
        setactive--
        if (setactive>=0){
            change(setactive)
        }
        else{
            setactive= imagesData.length-1;
            change(setactive)
        }
    });

    $("aside#right").on("click", function (){
        setactive++
        if (setactive<=imagesData.length-1){
            change(setactive)
        }
        else{
            setactive = 0
            change(setactive)
        }
    })
})


 function change (set){
    $("#active").attr("src", imagesData[set].photo);
    $("h1#active").text(imagesData[set].title)
    $("#active-desc").text(imagesData[set].description)

    $(".thumb").css(
        {"border":"5px solid white",
        "box-shadow":"4px 9px 8px -7px rgba(0,0,0,0.6)"})
        $(".thumb[data-number="+set+"]").css(
        {"border":"8px solid white",
        "box-shadow":"4px 9px 8px -3px rgba(0,0,0,0.85)"})

    let poz= $(".thumb[data-number="+set+"]").position().left
    poz=poz+26
    $(".triangle").css("left",poz+"px")
}

function fill(set){
    $(".thumb").each(  
        function(index,item){
            $(item).attr("src", imagesData[set].photo)
            $(item).siblings().text(imagesData[set].title) 
            set++
    });
}