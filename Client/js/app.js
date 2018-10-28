let dev1 = {
    name: "",
    live: 0,
    languageT1: "",
    languageP1: 0,
    languageT2: "",
    languageP2: 0,
    languageT3: "",
    languageP3: 0,
    languageT4: "",
    languageP4: 0,
    languageT5: "",
    languageP5: 0,
    avatarurl: "src/avatar_default.png"
};

let dev2 = {
    name: "",
    live: 0,
    languageT1: "",
    languageP1: 0,
    languageT2: "",
    languageP2: 0,
    languageT3: "",
    languageP3: 0,
    languageT4: "",
    languageP4: 0,
    languageT5: "",
    languageP5: 0,
    avatarurl: "src/avatar_default.png"
};

//Attention aux Accents de merdes 
let wallOfFame = {
    pl1: "",
    pl2: "",
    pl3: "",
    pl4: "",
    pl5: "",
    pl6: "",
    pl7: "",
    pl8: ""
};

function getDevLvl(totalCommits){
    return totalCommits/20000;
}

function createStatChart (htmlID, labels, datas, devLvl){

    let ctx = document.getElementById(htmlID).getContext("2d");
    let myChart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
            labels: labels,
            datasets: [{
                label : "Niv "+devLvl,
                //c'est moche mais pour commencer à zero ça marche le zéro tout seul sans barre
                data: datas,
                backgroundColor: [
                    'rgba(255, 0, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)'
                ],
                borderColor: [
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)'
                ],
                borderWidth: 1,
            }]
        },
        options: {
            legend: {
                labels: {
                    fontSize: 15,
                    fontColor: 'white'   
                }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        color: 'rgba(171,171,171,1)',
                        lineWidth: 1
                    },
                    ticks: {
                        beginAtZero:true,
                        fontColor: 'white'
                    }
                }],
                xAxes:[{
                    ticks: {
                        fontColor: 'white',
                    }
                }] 
            }
            
        }
    });

}

function setAvatar(id,url){
    let img = document.getElementById(id);
    img.src = url;
}


function setDevLanguages(dev, languages){
    dev.languageT1 = languages[0].name;
    dev.languageP1 = languages[0].lines;
    dev.languageT2 = languages[1].name;
    dev.languageP2 = languages[1].lines;
    dev.languageT3 = languages[2].name;
    dev.languageP3 = languages[2].lines;
    dev.languageT4 = languages[3].name;
    dev.languageP4 = languages[3].lines;
    dev.languageT5 = languages[4].name;
    dev.languageP5 = languages[4].lines;
    dev.live = dev.languageP1 + dev.languageP2 + dev.languageP3 + dev.languageP4 + dev.languageP5;

}

function updateWOFDisplay (wallOfFame){
    document.getElementById('place1').innerHTML = wallOfFame.pl1;
    document.getElementById('place2').innerHTML = wallOfFame.pl2;
    document.getElementById('place3').innerHTML = wallOfFame.pl3;
    document.getElementById('place4').innerHTML = wallOfFame.pl4;
    document.getElementById('place5').innerHTML = wallOfFame.pl5;
    document.getElementById('place6').innerHTML = wallOfFame.pl6;
    document.getElementById('place7').innerHTML = wallOfFame.pl7;
    document.getElementById('place8').innerHTML = wallOfFame.pl8;
}


function getStatTable (dev){
    let table = [dev.live, dev.languageP1, dev.languageP2, dev.languageP3, dev.languageP4, dev.languageP5];
    return table;
}

function getLanguageTable(dev){
    let table = ["live",dev.languageT1 , dev.languageT2, dev.languageT3, dev.languageT4, dev.languageT5];
    return table;
}

function fight(){
    
}

document.getElementById('fbutton').onclick = function(){
    getUser(document.getElementById('nameDev1').value).then(user => {
        dev1.avatarurl = user.avatar_url;
        setAvatar('avatar1', dev1.avatarurl);
    })

    getUser(document.getElementById('nameDev2').value).then(user => {
        dev2.avatarurl = user.avatar_url;
        setAvatar('avatar2', dev2.avatarurl);
    })
    getBestLanguages(document.getElementById('nameDev1').value).then(languages => {
        setDevLanguages (dev1,languages);
        
    }) 
    getBestLanguages(document.getElementById('nameDev2').value).then(languages => {
        setDevLanguages (dev2,languages);
        
    }) 

    createStatChart("statChartDev1", getLanguageTable(dev1), getStatTable(dev1), getDevLvl(dev1.live));
    createStatChart("statChartDev2",  getLanguageTable(dev2),  getStatTable(dev2), getDevLvl(dev2.live));
    updateWOFDisplay (wallOfFame);
}

updateWOFDisplay (wallOfFame)








