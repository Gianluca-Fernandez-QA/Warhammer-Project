let armyString = [];
armyString[2] = 0;
let ma = 2;
window.onload = function webstorage() {
    if (localStorage.getItem("army") !== null) {

        str = localStorage.getItem("army");
        armyString = [];
        stringdiv(str);
    }
}
function stringdiv(a) {
    let b;
    let part = a.substring(
        a.indexOf("¤"),
        a.indexOf("¤", str.indexOf("¤") + 1) + 1)
    console.log(part);
    a = a.replace(part, "");
    armyselector(part);
    armyString[1] = a.substring(
        a.indexOf("¥"),
        a.indexOf("¥", str.indexOf("¥") + 1) + 1)
    part = a.substring(
        a.indexOf("¥") + 1,
        a.indexOf("¥", str.indexOf("¥") + 1))
    jsonImp(`${part}`);
    a = a.replace(armyString[1], "");

    console.log(a);



    let itemNum = (a.split("¬").length - 1);

    console.log(itemNum);

    for (let i = 0; i < itemNum; i++) {
        armyString[ma] = a.charAt(0);
        console.log(armyString[ma]);
        a = a.replace(armyString[2], "");
        armyString[ma + 1] = a.substring(a.indexOf("¬"), a.indexOf("#") + 1);
        nameof = a.substring(a.indexOf("¬") + 1, a.indexOf("#"));
        console.log(armyString[ma + 1]);
        a = a.replace(`${armyString[ma + 1]}`, "");

        armyString[ma + 2] = a.substring(
            a.indexOf("@"),
            a.indexOf("@", a.indexOf("@") + 1) + 1);
        let value1 = a.substring(
            a.indexOf("@") + 1,
            a.indexOf("@", a.indexOf("@") + 1));
        console.log(a);
        a = a.replace(`${armyString[ma + 2]}`, "");
        console.log(a);
        tablePopulator(armyString[ma], nameof, value1);
        console.log(a);
        ma = ma + 3;

    }

}

function armyselector(a) {
    switch (a) {
        case "¤Aeldari¤":
            Aeldari();
            break;
        case "¤Chaos¤":
            Chaos();
            break;
        case "¤Imperium¤":
            Imperium();
            break;
        case "¤Fallen¤":
            Fallen();
            break;
        case "¤Necrons¤":
            Necrons();
            break;
        case "¤Orks¤":
            Orks();
            break;
        case "¤Tau¤":
            TauEmpire();
            break;
        case "¤Tyranids¤":
            Tyranids();
            break;

        default:
        // code block
    }
}
function clearDropbox() {
    let select = document.getElementById("dropDownBtn");
    select.innerHTML = "";
    let table = document.getElementById("armyTable");
    table.innerHTML = "";
}
function Aeldari() {
    armyString[0] = "¤Aeldari¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Craftworld", link: 'Aeldari-Craftworld.json' },
            { Army: "FW Corsairs", link: "Aeldari-Corsairs.json" },
            { Army: "Harlequins", link: "Aeldari-Harleyquins.json" },
            { Army: "Ynnari", link: "Aeldari-Ynnari.json" },
        ]
    };
    buttonFiller(myJSONObject);


}
function Chaos() {
    armyString[0] = "¤Chaos¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Chaos Knights", link: "Chaos-Knights.json" },
            { Army: "Chaos Space Marines", link: "ChaosSpaceMarines.json" },
            { Army: "Daemons", link: "ChaosDaemons.json" },
            { Army: "Dark Mechanicum", link: "ChaosDarkMechanicus.json" },
            { Army: "Death Guard", link: "ChaosDeathGuard.json" },
            { Army: "FW Heretic Astartes", link: "ChaosFWHereticAstartes.json" },
            { Army: "FW Renegade and Heretics", link: "ChaosRenegades.json" },
            { Army: "Gellerpox Infected", link: "Chaos-GellerpoxInfected.json" },
            { Army: "Thousand Sons", link: "Chaos-ThousandSons.json" },
            { Army: "Titanicus Traitoris", link: "ChaosTitanicus.json" },
        ]
    };
    buttonFiller(myJSONObject);


}
function Fallen() {
    armyString[0] = "¤Fallen¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Fallen", link: "Fallen.json" },
        ]
    };
    buttonFiller(myJSONObject);


}
function Imperium() {
    armyString[0] = "¤Imperium¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Adepta Sororitas", link: "AdeptaSororitas.json" },
            { Army: "Adeptus Custodes", link: "Custodes.json" },
            { Army: "Adeptus Mechanicus", link: "AdeptusMechanicus.json" },
            { Army: "FW Adeptus Astartes", link: "AdeptusAstartes.json" },
            { Army: "Astra Militarum", link: "AstraMilitarum.json" },
            { Army: "Blackstone Fortress", link: "BlackFortress.json" },
            { Army: "Blood Angels", link: "BloodAngels.json" },
            { Army: "Dark Angels", link: "BloodAngels.json" },
            { Army: "Deathwatch", link: "Deathwatch.json" },
            { Army: "Elucidian Starstriders", link: "Elucidian StarStriders.json" },
            { Army: "FW Death Korps of Krieg", link: "DeathKorps.json" },
            { Army: "Grey Knights", link: "GreyKnights.json" },
            { Army: "FW Elysians", link: "Elysian.json" },
            { Army: "Imperial Knights", link: "ImpKnights.json" },
            { Army: "Inquisition", link: "Inquisition.json" },
            { Army: "Legion of the Damned", link: "LegionDamned.json" },
            { Army: "Officio Assassinorum", link: "OfficioAssassinorum.json" },
            { Army: "Sisters of Silence", link: "SIS.json" },
            { Army: "Space Marines", link: "Space Marines.json" },
            { Army: "Space Wolves", link: "SpaceWolves.json" },
            { Army: "Titan Legions", link: "Titans.json" },
        ]
    };
    buttonFiller(myJSONObject);


}
function Necrons() {
    armyString[0] = "¤Necrons¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Necrons", link: "Necrons.json" },

        ]
    };
    buttonFiller(myJSONObject);


}
function Orks() {
    armyString[0] = "¤Orks¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Orks", link: "Orc.json" },

        ]
    };
    buttonFiller(myJSONObject);

}
function TauEmpire() {
    armyString[0] = "¤Tau¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "T'au Empire", link: "TAU.json" },

        ]
    };
    buttonFiller(myJSONObject);


}
function Tyranids() {
    armyString[0] = "¤Tyranids¤";
    clearDropbox();
    let myJSONObject = {
        "searchResults": [
            { Army: "Genestealer Cults", link: "GenestealerCult.json" },
            { Army: "Tyranids", link: "Tyranids.json" },
        ]
    };
    buttonFiller(myJSONObject);


}
function jsonImp(a1) {
    console.log(armyString);
    let tempBox = document.getElementById("Temp");
    if (document.getElementById("Del") !== null) {
        let d = document.getElementById("Del");
        d.parentNode.removeChild(d);
    };
    let dpDwn = document.createElement("div");
    dpDwn.className = "dropdown show";
    dpDwn.id = "Del";
    let atoggle = document.createElement("BUTTON");
    atoggle.className = "btn btn-secondary btn-lg dropdown-toggle";
    atoggle.setAttribute("type", "button");
    atoggle.id = "dropdownMenuLink";
    atoggle.setAttribute("data-toggle", "dropdown");
    atoggle.setAttribute("aria-haspopup", "true");
    atoggle.setAttribute("aria-expanded", "false");
    atoggle.innerHTML = "UNITS";
    dpDwn.appendChild(atoggle);
    let menu = document.createElement("div");
    menu.className = "dropdown-menu";
    menu.setAttribute("aria-labelledby", "dropdownMenuButton");
    fetch(`../JsonFiles/${a1}`)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("Looks like there is an issue!!!" + response.status);
                    return;
                }
                response.json().then(function (data) {
                    console.log(response.status);
                    let pointValueSelector;
                    for (let i = 0; i < 3; i++) {

                        if (data.catalogue.sharedSelectionEntries.selectionEntry[1].costs.cost[i]._name == "pts") {
                            pointValueSelector = i;

                        };
                    }
                    for (let i = 0; i <= Object.keys(data.catalogue.sharedSelectionEntries.selectionEntry).length - 1; i++) {
                        let a = document.createElement("a");
                        a.className = "dropdown-item";

                        if (data.catalogue.sharedSelectionEntries.selectionEntry[i]._name !== null) {
                            a.innerHTML = `NAME : ${data.catalogue.sharedSelectionEntries.selectionEntry[i]._name}   POINT VALUE: ${data.catalogue.sharedSelectionEntries.selectionEntry[i].costs.cost[pointValueSelector]._value}`;
                            let lol = 0;
                            a.onclick = function a() {
                                console.log(armyString[ma]);
                                console.log(lol);
                                let asd = 0;
                                console.log(asd);

                                lol = lol + 1;
                                armyString[ma] = lol;
                                armyString[ma + 1] = `¬${data.catalogue.sharedSelectionEntries.selectionEntry[i]._name}#`;
                                armyString[ma + 2] = `@${data.catalogue.sharedSelectionEntries.selectionEntry[i].costs.cost[pointValueSelector]._value}@`
                                console.log(lol);

                                tablePopulator(lol, data.catalogue.sharedSelectionEntries.selectionEntry[i]._name, data.catalogue.sharedSelectionEntries.selectionEntry[i].costs.cost[pointValueSelector]._value);
                                save();
                                ma = armyString.length;



                            };
                        }
                        menu.appendChild(a);
                    }

                });
            }
        )
        .catch(function (err) {
            console.log("Fetch went wrong");
        })

    dpDwn.appendChild(menu);

    tempBox.appendChild(dpDwn);
}
function buttonFiller(myJSONObject) {

    let z = document.getElementById("dropDownBtn");
    for (var i = 0; i <= Object.keys(myJSONObject.searchResults).length - 1; i++) {
        let a = document.createElement("a");
        a.className = "dropdown-item";
        let bubble = myJSONObject.searchResults[i].link;
        let ds = myJSONObject.searchResults[i].Army;
        a.onclick = function a() {
            armyString[1] = `¥${bubble}¥`;
            jsonImp(`${bubble}`);
        };
        a.innerHTML = ds;
        z.appendChild(a);
    }
}
function tablePopulator(a, b, c) {
    if (document.getElementById(`row${b}`) === null) {
        let table = document.getElementById("armyTable");
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        row.id = `row${b}`;
        console.log(armyString[a]);
        td1.innerHTML = a;
        td1.id = `quan${b}`;
        let td2 = document.createElement("td");
        td2.innerHTML = b;
        let td3 = document.createElement("td");
        td3.className = "total";
        td3.innerHTML = c;
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        table.appendChild(row);
        save();
        console.log("HELLO!");
    }
    else {

        let table = document.getElementById("armyTable");
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        row.id = `row${b}`;
        console.log(armyString[a]);
        td1.innerHTML = a;
        td1.id = `quan${b}`;
        let td2 = document.createElement("td");
        td2.innerHTML = b;
        let td3 = document.createElement("td");
        td3.className = "total";
        td3.innerHTML = c;
        let rower = document.getElementById(`row${b}`)
        rower.parentNode.removeChild(rower);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        table.appendChild(row);


        console.log(armyString);

    }
}
function quantity(a, b) {
    let dat = document.getElementById(`quan${a}`);
    console.log(`quan${a}`);
    dat.innerHTML = `${b}`;
}
function save() {
    let op = document.getElementById("table1");

    if (document.getElementById("btnsave") === undefined) {
        op.appendChild(btnsaveF());
    } else {
        op.innerHTML = "";
        op.appendChild(btnsaveF());
    }
}
function btnsaveF() {
    let atoggle = document.createElement("BUTTON");
    atoggle.className = "btn btn-success";
    atoggle.setAttribute("type", "button");
    atoggle.innerHTML = "SAVE";
    atoggle.id = "btnsave";
    atoggle.onclick = function a() {
        let armyarray = "";
        for (let i = 0; i < armyString.length; i++) {

            armyarray = armyarray + armyString[i];

        }
        localStorage.setItem('army', armyarray);
        armyStorer()
    }
    return atoggle;
}


function armyStorer() {
    let usercookie = getCookie("username")
    let passCookie = getCookie("password")
    if (usercookie.length != 0) {
        //redirect somewhere 

        let armyarray = "";
        for (let i = 0; i < armyString.length; i++) {

            armyarray = armyarray + armyString[i];

        }
        let data = {
            "userName": `${usercookie}`,
            "password": `${passCookie}`,
            "armyName": `${document.getElementById("armyname").value}`,
            "armyBody": `${armyarray}`
        };

        fetch('http://localhost:9001/ArmyCreate', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response)
            .then(data => {
                if (data.ok === true) {
                    console.log(data)
                    alert("ARMY CREATED")
                }
                else {
                    alert("ENTER CREDITIALS AGAIN")
                }
            })
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
