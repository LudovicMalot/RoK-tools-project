/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("Menu").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("Menu").style.width = "0";
}

//gère les sousmenus========================================================================================================
function handleMenu1() {
    var x = document.getElementById("sousmenu1");
    if (x.style.display === 'inline') {
        closeM(x);
    } else {
        openM(x);
    }
}

function handleMenu2() {
    var x = document.getElementById("sousmenu2");
    if (x.style.display === 'inline') {
        closeM(x);
    } else {
        openM(x);
    }
}

function handleMenu3() {
    var x = document.getElementById("sousmenu3");
    if (x.style.display === 'inline') {
        closeM(x);
    } else {
        openM(x);
    }
}

function closeAllMenu() {
    var x = document.getElementById("sousmenu1");
    closeM(x);
    var x = document.getElementById("sousmenu2");
    closeM(x);
    var x = document.getElementById("sousmenu3");
    closeM(x);
}
/* permet de masquer un élément */
function closeM(x) {
    x.style.display = 'none';
}
/* permet d'afficher un élément */
function openM(x) {
    x.style.display = 'inline';
}

function openLangue() {
    var x = document.getElementById('non_selected_langue');
    x.style.display = 'grid';
}

function closeLangue() {
    var x = document.getElementById('non_selected_langue');
    x.style.display = 'none';
}

//permet de changer la forme des unités ==================================================================================
var x = document.getElementById("changer_unite");


function changeUnite() {
    // bois et nourriture
    change1k();
    change10k();
    change50k_fb();
    change150k();
    change500k();
    change1_5m();
    change5m();

    //pierre
    change7k();
    change37k();
    change112K();
    change375k();
    change1_125m();
    change3_75m();

    //or
    change3k();
    change15k();
    change50k();
    change200k();
    change600k();
    change2m();
}

function change1k() {
    var y = document.getElementById("1k_f");
    var z = document.getElementById("1k_b");
    if (x.checked) {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/1 000/g, "1k");
        z.innerHTML = tx.replace(/1 000/g, "1k");

    } else {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/1k/g, "1 000");
        z.innerHTML = tx.replace(/1k/g, "1 000");
    }
}

function change10k() {
    var y = document.getElementById("10k_f");
    var z = document.getElementById("10k_b");
    if (x.checked) {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/10 000/g, "10k");
        z.innerHTML = tx.replace(/10 000/g, "10k");

    } else {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/10k/g, "10 000");
        z.innerHTML = tx.replace(/10k/g, "10 000");
    }
}

function change50k_fb() {
    var y = document.getElementById("50k_f");
    var z = document.getElementById("50k_b");
    if (x.checked) {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/50 000/g, "50k");
        z.innerHTML = tx.replace(/50 000/g, "50k");
    } else {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/50k/g, "50 000");
        z.innerHTML = tx.replace(/50k/g, "50 000");
    }
}

function change150k() {
    var y = document.getElementById("150k_f");
    var z = document.getElementById("150k_b");
    if (x.checked) {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/150 000/g, "150k");
        z.innerHTML = tx.replace(/150 000/g, "150k");
    } else {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/150k/g, "150 000");
        z.innerHTML = tx.replace(/150k/g, "150 000");
    }
}

function change500k() {
    var y = document.getElementById("500k_f");
    var z = document.getElementById("500k_b");
    if (x.checked) {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/500 000/g, "500k");
        z.innerHTML = tx.replace(/500 000/g, "500k");
    } else {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/500k/g, "500 000");
        z.innerHTML = tx.replace(/500k/g, "500 000");
    }
}

function change1_5m() {
    var y = document.getElementById("1.5m_f");
    var z = document.getElementById("1.5m_b");
    if (x.checked) {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/1 500 000/g, "1.5m");
        z.innerHTML = tx.replace(/1 500 000/g, "1.5m");
    } else {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/1.5m/g, "1 500 000");
        z.innerHTML = tx.replace(/1.5m/g, "1 500 000");
    }
}

function change5m() {
    var y = document.getElementById("5m_f");
    var z = document.getElementById("5m_b");
    if (x.checked) {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/5 000 000/g, "5m");
        z.innerHTML = tx.replace(/5 000 000/g, "5m");
    } else {
        let text = y.innerHTML;
        let tx = z.innerHTML;
        y.innerHTML = text.replace(/5m/g, "5 000 000");
        z.innerHTML = tx.replace(/5m/g, "5 000 000");
    }
}

function change7k() {
    var y = document.getElementById("7k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/7 500/g, "7.5k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/7.5k/g, "7 500");
    }
}

function change37k() {
    var y = document.getElementById("37k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/37 500/g, "37.5k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/37.5k/g, "37 500");
    }
}

function change112K() {
    var y = document.getElementById("112k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/112 500/g, "112.5k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/112.5k/g, "112 500");
    }
}

function change375k() {
    var y = document.getElementById("375k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/375 000/g, "375k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/375k/g, "375 000");
    }
}

function change1_125m() {
    var y = document.getElementById("1m");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/1 125 000/g, "1.125m");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/1.125m/g, "1 125 000");
    }
}

function change3_75m() {
    var y = document.getElementById("3m");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/3 750 000/g, "3.75m");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/3.75m/g, "3 750 000");
    }
}

function change3k() {
    var y = document.getElementById("3k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/3 000/g, "3k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/3k/g, "3 000");
    }
}

function change15k() {
    var y = document.getElementById("15k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/15 000/g, "15k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/15k/g, "15 000");
    }
}

function change50k() {
    var y = document.getElementById("50k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/50 000/g, "50k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/50k/g, "50 000");
    }
}

function change200k() {
    var y = document.getElementById("200k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/200 000/g, "200k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/200k/g, "200 000");
    }
}

function change600k() {
    var y = document.getElementById("600k");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/600 000/g, "600k");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/600k/g, "600 000");
    }
}

function change2m() {
    var y = document.getElementById("2m");
    if (x.checked) {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/2 000 000/g, "2m");
    } else {
        let text = y.innerHTML;
        y.innerHTML = text.replace(/2m/g, "2 000 000");
    }
}
//=====================================CALCULER TOTAL RSS====================================================================
function totalRess() {
    calcRessNourriture();
    calcResBois();
    calcResPierre();
    calcResOr();
}

function calcRessNourriture() {
    var x = document.getElementById("rss_pack_f_1k").value * 1000;
    x += document.getElementById("rss_pack_f_10k").value * 10000;
    x += document.getElementById("rss_pack_f_50k").value * 50000;
    x += document.getElementById("rss_pack_f_150k").value * 150000;
    x += document.getElementById("rss_pack_f_500k").value * 500000;
    x += document.getElementById("rss_pack_f_15m").value * 1500000;
    x += document.getElementById("rss_pack_f_5m").value * 5000000;

    x += Math.ceil(document.getElementById("rss_al_1A").value / 2) * 1000;
    x += Math.ceil(document.getElementById("rss_al_1B").value * 10 / 27) * 1000;
    x += Math.ceil(document.getElementById("rss_al_1C").value * 10 / 28) * 1000;
    x += Math.ceil(document.getElementById("rss_al_2").value * 10 / 28) * 10000;
    x += Math.ceil(document.getElementById("rss_al_3").value * 10 / 28) * 150000;

    x+=document.getElementById('rss_cat_1_f').value *10000;
    x+=document.getElementById('rss_cat_2_f').value *50000;
    x+=document.getElementById('rss_cat_3_f').value *150000;
    x+=document.getElementById('rss_cat_4_f').value *500000;
    x+=document.getElementById('rss_cat_5_f').value *1500000;

    x+=document.getElementById('ville_f').value*1;

    document.getElementById("nouriture_result").innerHTML = espaceMilier(x);
}

function calcResBois() {
    var x = document.getElementById("rss_pack_b_1k").value * 1000;
    x += document.getElementById("rss_pack_b_10k").value * 10000;
    x += document.getElementById("rss_pack_b_50k").value * 50000;
    x += document.getElementById("rss_pack_b_150k").value * 150000;
    x += document.getElementById("rss_pack_b_500k").value * 500000;
    x += document.getElementById("rss_pack_b_15m").value * 1500000;
    x += document.getElementById("rss_pack_b_5m").value * 5000000;

    x += Math.floor(document.getElementById("rss_al_1A").value / 2) * 1000;
    x += Math.floor(document.getElementById("rss_al_1B").value * 10 / 27) * 1000;
    x += Math.floor(document.getElementById("rss_al_1C").value * 10 / 28) * 1000;
    x += Math.floor(document.getElementById("rss_al_2").value * 10 / 28) * 10000;
    x += Math.floor(document.getElementById("rss_al_3").value * 10 / 28) * 150000;

    x+=document.getElementById('rss_cat_1_b').value *10000;
    x+=document.getElementById('rss_cat_2_b').value *50000;
    x+=document.getElementById('rss_cat_3_b').value *150000;
    x+=document.getElementById('rss_cat_4_b').value *500000;
    x+=document.getElementById('rss_cat_5_b').value *1500000;

    x+=document.getElementById('ville_b').value*1;

    document.getElementById("bois_result").innerHTML = espaceMilier(x);
}

function calcResPierre() {
    var x = document.getElementById("rss_pack_p_750").value * 750;
    x += document.getElementById("rss_pack_p_7k").value * 7500;
    x += document.getElementById("rss_pack_p_37k").value * 37500;
    x += document.getElementById("rss_pack_p_112k").value * 112500;
    x += document.getElementById("rss_pack_p_375k").value * 375000;
    x += document.getElementById("rss_pack_p_1m").value * 1125000;
    x += document.getElementById("rss_pack_p_3m").value * 3750000;

    x += Math.round(document.getElementById("rss_al_1C").value * 5 / 12) * 750;
    x += Math.round(document.getElementById("rss_al_2").value * 5 / 12) * 7500;
    x += Math.round(document.getElementById("rss_al_3").value * 5 / 12) * 112000;

    x+=document.getElementById('rss_cat_1_p').value *7500;
    x+=document.getElementById('rss_cat_2_p').value *37500;
    x+=document.getElementById('rss_cat_3_p').value *112500;
    x+=document.getElementById('rss_cat_4_p').value *375000;
    x+=document.getElementById('rss_cat_5_p').value *1125000;

    x+=document.getElementById('ville_p').value*1;

    document.getElementById("pierre_result").innerHTML = espaceMilier(x);
}

function calcResOr() {
    var x = document.getElementById("rss_pack_o_500").value * 500;
    x += document.getElementById("rss_pack_o_3k").value * 3000;
    x += document.getElementById("rss_pack_o_15k").value * 15000;
    x += document.getElementById("rss_pack_o_50k").value * 50000;
    x += document.getElementById("rss_pack_o_200k").value * 200000;
    x += document.getElementById("rss_pack_o_600k").value * 600000;
    x += document.getElementById("rss_pack_o_2m").value * 2000000;

    x += Math.round(document.getElementById("rss_al_1C").value * 2 / 28) * 500;
    x += Math.round(document.getElementById("rss_al_2").value * 2 / 28) * 3000;
    x += Math.round(document.getElementById("rss_al_3").value * 4 / 28) * 50000;

    x+=document.getElementById('rss_cat_1_o').value *3000;
    x+=document.getElementById('rss_cat_2_o').value *15000;
    x+=document.getElementById('rss_cat_3_o').value *50000;
    x+=document.getElementById('rss_cat_4_o').value *200000;
    x+=document.getElementById('rss_cat_5_o').value *600000;

    x+=document.getElementById('ville_o').value*1;

    document.getElementById("or_result").innerHTML = espaceMilier(x);


}

function fill_value_choix_big_lv1(i) {
    var x = document.getElementById("rss_cat_1").value;
    var mod = x % 4;
    var div = Math.floor(x / 4);
    var o = 0;
    var p = 0;
    var b = 0;
    var f = 0;
    switch (mod) {
        case 0:
            o = div;
            p = div;
            b = div;
            f = div;
            break;
        case 1:
            o = div + 1;
            p = div;
            b = div;
            f = div;
            break;
        case 2:
            o = div + 1;
            p = div + 1;
            b = div;
            f = div;
            break;
        case 3:
            o = div + 1;
            p = div + 1;
            b = div + 1;
            f = div;
            break;
    }
    document.getElementById('rss_cat_1_o').value = o;
    document.getElementById('rss_cat_1_p').value = p;
    document.getElementById('rss_cat_1_b').value = b;
    document.getElementById('rss_cat_1_f').value = f;
}

function fill_value_choix_big_lv2(i) {
    var x = document.getElementById("rss_cat_2").value;
    var mod = x % 4;
    var div = Math.floor(x / 4);
    var o = 0;
    var p = 0;
    var b = 0;
    var f = 0;
    switch (mod) {
        case 0:
            o = div;
            p = div;
            b = div;
            f = div;
            break;
        case 1:
            o = div + 1;
            p = div;
            b = div;
            f = div;
            break;
        case 2:
            o = div + 1;
            p = div + 1;
            b = div;
            f = div;
            break;
        case 3:
            o = div + 1;
            p = div + 1;
            b = div + 1;
            f = div;
            break;
    }
    document.getElementById('rss_cat_2_o').value = o;
    document.getElementById('rss_cat_2_p').value = p;
    document.getElementById('rss_cat_2_b').value = b;
    document.getElementById('rss_cat_2_f').value = f;
}

function fill_value_choix_big_lv3(i) {
    var x = document.getElementById("rss_cat_3").value;
    var mod = x % 4;
    var div = Math.floor(x / 4);
    var o = 0;
    var p = 0;
    var b = 0;
    var f = 0;
    switch (mod) {
        case 0:
            o = div;
            p = div;
            b = div;
            f = div;
            break;
        case 1:
            o = div + 1;
            p = div;
            b = div;
            f = div;
            break;
        case 2:
            o = div + 1;
            p = div + 1;
            b = div;
            f = div;
            break;
        case 3:
            o = div + 1;
            p = div + 1;
            b = div + 1;
            f = div;
            break;
    }
    document.getElementById('rss_cat_3_o').value = o;
    document.getElementById('rss_cat_3_p').value = p;
    document.getElementById('rss_cat_3_b').value = b;
    document.getElementById('rss_cat_3_f').value = f;
}

function fill_value_choix_big_lv3(i) {
    var x = document.getElementById("rss_cat_3").value;
    var mod = x % 4;
    var div = Math.floor(x / 4);
    var o = 0;
    var p = 0;
    var b = 0;
    var f = 0;
    switch (mod) {
        case 0:
            o = div;
            p = div;
            b = div;
            f = div;
            break;
        case 1:
            o = div + 1;
            p = div;
            b = div;
            f = div;
            break;
        case 2:
            o = div + 1;
            p = div + 1;
            b = div;
            f = div;
            break;
        case 3:
            o = div + 1;
            p = div + 1;
            b = div + 1;
            f = div;
            break;
    }
    document.getElementById('rss_cat_3_o').value = o;
    document.getElementById('rss_cat_3_p').value = p;
    document.getElementById('rss_cat_3_b').value = b;
    document.getElementById('rss_cat_3_f').value = f;
}

function fill_value_choix_big_lv4(i) {
    var x = document.getElementById("rss_cat_4").value;
    var mod = x % 4;
    var div = Math.floor(x / 4);
    var o = 0;
    var p = 0;
    var b = 0;
    var f = 0;
    switch (mod) {
        case 0:
            o = div;
            p = div;
            b = div;
            f = div;
            break;
        case 1:
            o = div + 1;
            p = div;
            b = div;
            f = div;
            break;
        case 2:
            o = div + 1;
            p = div + 1;
            b = div;
            f = div;
            break;
        case 3:
            o = div + 1;
            p = div + 1;
            b = div + 1;
            f = div;
            break;
    }
    document.getElementById('rss_cat_4_o').value = o;
    document.getElementById('rss_cat_4_p').value = p;
    document.getElementById('rss_cat_4_b').value = b;
    document.getElementById('rss_cat_4_f').value = f;
}

function fill_value_choix_big_lv5(i) {
    var x = document.getElementById("rss_cat_5").value;
    var mod = x % 4;
    var div = Math.floor(x / 4);
    var o = 0;
    var p = 0;
    var b = 0;
    var f = 0;
    switch (mod) {
        case 0:
            o = div;
            p = div;
            b = div;
            f = div;
            break;
        case 1:
            o = div + 1;
            p = div;
            b = div;
            f = div;
            break;
        case 2:
            o = div + 1;
            p = div + 1;
            b = div;
            f = div;
            break;
        case 3:
            o = div + 1;
            p = div + 1;
            b = div + 1;
            f = div;
            break;
    }
    document.getElementById('rss_cat_5_o').value = o;
    document.getElementById('rss_cat_5_p').value = p;
    document.getElementById('rss_cat_5_b').value = b;
    document.getElementById('rss_cat_5_f').value = f;
}
//
function fill_value_choix_or_lv1() {
    var x = 0,
        p = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_1').value) {
        x = Number(document.getElementById('rss_cat_1').value);
    }
    if (document.getElementById('rss_cat_1_p').value) {
        p = document.getElementById('rss_cat_1_p').value;
    }
    if (document.getElementById('rss_cat_1_b').value) {
        b = document.getElementById('rss_cat_1_b').value;
    }
    if (document.getElementById('rss_cat_1_f').value) {
        f = Number(document.getElementById('rss_cat_1_f').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var o = document.getElementById('rss_cat_1_o').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_1').value = x;
    document.getElementById('rss_cat_1_p').value = p;
    document.getElementById('rss_cat_1_b').value = b;
    document.getElementById('rss_cat_1_f').value = f;
}
function fill_value_choix_or_lv2() {
    var x = 0,
        p = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_2').value) {
        x = Number(document.getElementById('rss_cat_2').value);
    }
    if (document.getElementById('rss_cat_2_p').value) {
        p = document.getElementById('rss_cat_2_p').value;
    }
    if (document.getElementById('rss_cat_2_b').value) {
        b = document.getElementById('rss_cat_2_b').value;
    }
    if (document.getElementById('rss_cat_2_f').value) {
        f = Number(document.getElementById('rss_cat_2_f').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var o = document.getElementById('rss_cat_2_o').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_2').value = x;
    document.getElementById('rss_cat_2_p').value = p;
    document.getElementById('rss_cat_2_b').value = b;
    document.getElementById('rss_cat_2_f').value = f;
}
function fill_value_choix_or_lv3() {
    var x = 0,
        p = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_3').value) {
        x = Number(document.getElementById('rss_cat_3').value);
    }
    if (document.getElementById('rss_cat_3_p').value) {
        p = document.getElementById('rss_cat_3_p').value;
    }
    if (document.getElementById('rss_cat_3_b').value) {
        b = document.getElementById('rss_cat_3_b').value;
    }
    if (document.getElementById('rss_cat_3_f').value) {
        f = Number(document.getElementById('rss_cat_3_f').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var o = document.getElementById('rss_cat_3_o').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_3').value = x;
    document.getElementById('rss_cat_3_p').value = p;
    document.getElementById('rss_cat_3_b').value = b;
    document.getElementById('rss_cat_3_f').value = f;
}
function fill_value_choix_or_lv4() {
    var x = 0,
        p = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_4').value) {
        x = Number(document.getElementById('rss_cat_4').value);
    }
    if (document.getElementById('rss_cat_4_p').value) {
        p = document.getElementById('rss_cat_1_p').value;
    }
    if (document.getElementById('rss_cat_4_b').value) {
        b = document.getElementById('rss_cat_1_b').value;
    }
    if (document.getElementById('rss_cat_4_f').value) {
        f = Number(document.getElementById('rss_cat_4_f').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var o = document.getElementById('rss_cat_4_o').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_4').value = x;
    document.getElementById('rss_cat_4_p').value = p;
    document.getElementById('rss_cat_4_b').value = b;
    document.getElementById('rss_cat_4_f').value = f;
}
function fill_value_choix_or_lv5() {
    var x = 0,
        p = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_5').value) {
        x = Number(document.getElementById('rss_cat_5').value);
    }
    if (document.getElementById('rss_cat_5_p').value) {
        p = document.getElementById('rss_cat_5_p').value;
    }
    if (document.getElementById('rss_cat_5_b').value) {
        b = document.getElementById('rss_cat_5_b').value;
    }
    if (document.getElementById('rss_cat_5_f').value) {
        f = Number(document.getElementById('rss_cat_5_f').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var o = document.getElementById('rss_cat_5_o').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_5').value = x;
    document.getElementById('rss_cat_5_p').value = p;
    document.getElementById('rss_cat_5_b').value = b;
    document.getElementById('rss_cat_5_f').value = f;
}

function fill_value_choix_n_lv1() {
    var x = 0,
        p = 0,
        b = 0,
        o = 0;
    if (document.getElementById('rss_cat_1').value) {
        x = Number(document.getElementById('rss_cat_1').value);
    }
    if (document.getElementById('rss_cat_1_p').value) {
        p = document.getElementById('rss_cat_1_p').value;
    }
    if (document.getElementById('rss_cat_1_b').value) {
        b = document.getElementById('rss_cat_1_b').value;
    }
    if (document.getElementById('rss_cat_1_o').value) {
        o = Number(document.getElementById('rss_cat_1_o').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var f = document.getElementById('rss_cat_1_f').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < o) {
        o -= dif;
    } else {
        dif -= o;
        o = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_1').value = x;
    document.getElementById('rss_cat_1_p').value = p;
    document.getElementById('rss_cat_1_b').value = b;
    document.getElementById('rss_cat_1_o').value = o;
}
function fill_value_choix_n_lv2() {
    var x = 0,
        p = 0,
        b = 0,
        o = 0;
    if (document.getElementById('rss_cat_2').value) {
        x = Number(document.getElementById('rss_cat_2').value);
    }
    if (document.getElementById('rss_cat_2_p').value) {
        p = document.getElementById('rss_cat_2_p').value;
    }
    if (document.getElementById('rss_cat_2_b').value) {
        b = document.getElementById('rss_cat_2_b').value;
    }
    if (document.getElementById('rss_cat_2_o').value) {
        o = Number(document.getElementById('rss_cat_2_o').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var f = document.getElementById('rss_cat_2_f').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < o) {
        o -= dif;
    } else {
        dif -= o;
        o = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_2').value = x;
    document.getElementById('rss_cat_2_p').value = p;
    document.getElementById('rss_cat_2_b').value = b;
    document.getElementById('rss_cat_2_o').value = o;
}
function fill_value_choix_n_lv3() {
    var x = 0,
        p = 0,
        b = 0,
        o = 0;
    if (document.getElementById('rss_cat_3').value) {
        x = Number(document.getElementById('rss_cat_3').value);
    }
    if (document.getElementById('rss_cat_3_p').value) {
        p = document.getElementById('rss_cat_3_p').value;
    }
    if (document.getElementById('rss_cat_3_b').value) {
        b = document.getElementById('rss_cat_3_b').value;
    }
    if (document.getElementById('rss_cat_3_o').value) {
        o = Number(document.getElementById('rss_cat_3_o').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var f = document.getElementById('rss_cat_3_f').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < o) {
        o -= dif;
    } else {
        dif -= o;
        o = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_3').value = x;
    document.getElementById('rss_cat_3_p').value = p;
    document.getElementById('rss_cat_3_b').value = b;
    document.getElementById('rss_cat_3_o').value = o;
}
function fill_value_choix_n_lv4() {
    var x = 0,
        p = 0,
        b = 0,
        o = 0;
    if (document.getElementById('rss_cat_4').value) {
        x = Number(document.getElementById('rss_cat_4').value);
    }
    if (document.getElementById('rss_cat_4_p').value) {
        p = document.getElementById('rss_cat_4_p').value;
    }
    if (document.getElementById('rss_cat_4_b').value) {
        b = document.getElementById('rss_cat_4_b').value;
    }
    if (document.getElementById('rss_cat_4_o').value) {
        o = Number(document.getElementById('rss_cat_4_o').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var f = document.getElementById('rss_cat_4_f').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < o) {
        o -= dif;
    } else {
        dif -= o;
        o = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_4').value = x;
    document.getElementById('rss_cat_4_p').value = p;
    document.getElementById('rss_cat_4_b').value = b;
    document.getElementById('rss_cat_4_o').value = o;
}
function fill_value_choix_n_lv5() {
    var x = 0,
        p = 0,
        b = 0,
        o = 0;
    if (document.getElementById('rss_cat_5').value) {
        x = Number(document.getElementById('rss_cat_5').value);
    }
    if (document.getElementById('rss_cat_5_p').value) {
        p = document.getElementById('rss_cat_5_p').value;
    }
    if (document.getElementById('rss_cat_5_b').value) {
        b = document.getElementById('rss_cat_5_b').value;
    }
    if (document.getElementById('rss_cat_5_o').value) {
        o = Number(document.getElementById('rss_cat_5_o').value);
    }
    console.log("p=",p);
    console.log("f=",f);
    console.log("b=",b);
    console.log("tot=",x);
    var f = document.getElementById('rss_cat_5_f').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    console.log("sum=",sum);
    console.log("dif=",dif);
    if (dif < o) {
        o -= dif;
    } else {
        dif -= o;
        o = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_5').value = x;
    document.getElementById('rss_cat_5_p').value = p;
    document.getElementById('rss_cat_5_b').value = b;
    document.getElementById('rss_cat_5_o').value = o;
}

function fill_value_choix_b_lv1() {
    var x = 0,
        p = 0,
        o = 0,
        f = 0;
    if (document.getElementById('rss_cat_1').value) {
        x = Number(document.getElementById('rss_cat_1').value);
    }
    if (document.getElementById('rss_cat_1_p').value) {
        p = document.getElementById('rss_cat_1_p').value;
    }
    if (document.getElementById('rss_cat_1_o').value) {
        b = document.getElementById('rss_cat_1_o').value;
    }
    if (document.getElementById('rss_cat_1_f').value) {
        f = Number(document.getElementById('rss_cat_1_f').value);
    }
    var b = document.getElementById('rss_cat_1_b').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < o) {
            o -= dif;
        } else {
            dif -= o;
            o = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_1').value = x;
    document.getElementById('rss_cat_1_p').value = p;
    document.getElementById('rss_cat_1_o').value = o;
    document.getElementById('rss_cat_1_f').value = f;
}
function fill_value_choix_b_lv2() {
    var x = 0,
        p = 0,
        o = 0,
        f = 0;
    if (document.getElementById('rss_cat_2').value) {
        x = Number(document.getElementById('rss_cat_2').value);
    }
    if (document.getElementById('rss_cat_2_p').value) {
        p = document.getElementById('rss_cat_2_p').value;
    }
    if (document.getElementById('rss_cat_2_o').value) {
        b = document.getElementById('rss_cat_2_o').value;
    }
    if (document.getElementById('rss_cat_2_f').value) {
        f = Number(document.getElementById('rss_cat_2_f').value);
    }
    var b = document.getElementById('rss_cat_2_b').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < o) {
            o -= dif;
        } else {
            dif -= o;
            o = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_2').value = x;
    document.getElementById('rss_cat_2_p').value = p;
    document.getElementById('rss_cat_2_o').value = o;
    document.getElementById('rss_cat_2_f').value = f;
}
function fill_value_choix_b_lv3() {
    var x = 0,
        p = 0,
        o = 0,
        f = 0;
    if (document.getElementById('rss_cat_3').value) {
        x = Number(document.getElementById('rss_cat_3').value);
    }
    if (document.getElementById('rss_cat_3_p').value) {
        p = document.getElementById('rss_cat_3_p').value;
    }
    if (document.getElementById('rss_cat_3_o').value) {
        b = document.getElementById('rss_cat_3_o').value;
    }
    if (document.getElementById('rss_cat_3_f').value) {
        f = Number(document.getElementById('rss_cat_3_f').value);
    }
    var b = document.getElementById('rss_cat_3_b').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < o) {
            o -= dif;
        } else {
            dif -= o;
            o = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_3').value = x;
    document.getElementById('rss_cat_3_p').value = p;
    document.getElementById('rss_cat_3_o').value = o;
    document.getElementById('rss_cat_3_f').value = f;
}
function fill_value_choix_b_lv4() {
    var x = 0,
        p = 0,
        o = 0,
        f = 0;
    if (document.getElementById('rss_cat_4').value) {
        x = Number(document.getElementById('rss_cat_4').value);
    }
    if (document.getElementById('rss_cat_4_p').value) {
        p = document.getElementById('rss_cat_4_p').value;
    }
    if (document.getElementById('rss_cat_4_o').value) {
        b = document.getElementById('rss_cat_4_o').value;
    }
    if (document.getElementById('rss_cat_4_f').value) {
        f = Number(document.getElementById('rss_cat_4_f').value);
    }
    var b = document.getElementById('rss_cat_4_b').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < o) {
            o -= dif;
        } else {
            dif -= o;
            o = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_4').value = x;
    document.getElementById('rss_cat_4_p').value = p;
    document.getElementById('rss_cat_4_o').value = o;
    document.getElementById('rss_cat_4_f').value = f;
}
function fill_value_choix_b_lv5() {
    var x = 0,
        p = 0,
        o = 0,
        f = 0;
    if (document.getElementById('rss_cat_5').value) {
        x = Number(document.getElementById('rss_cat_5').value);
    }
    if (document.getElementById('rss_cat_5_p').value) {
        p = document.getElementById('rss_cat_5_p').value;
    }
    if (document.getElementById('rss_cat_5_o').value) {
        b = document.getElementById('rss_cat_5_o').value;
    }
    if (document.getElementById('rss_cat_5_f').value) {
        f = Number(document.getElementById('rss_cat_5_f').value);
    }
    var b = document.getElementById('rss_cat_5_b').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < o) {
            o -= dif;
        } else {
            dif -= o;
            o = 0;
            if (dif < p) {
                p -= dif;
            } else {
                dif -= p;
                p = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_5').value = x;
    document.getElementById('rss_cat_5_p').value = p;
    document.getElementById('rss_cat_5_o').value = o;
    document.getElementById('rss_cat_5_f').value = f;
}

function fill_value_choix_p_lv1() {
    var x = 0,
        o = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_1').value) {
        x = Number(document.getElementById('rss_cat_1').value);
    }
    if (document.getElementById('rss_cat_1_o').value) {
        p = document.getElementById('rss_cat_1_o').value;
    }
    if (document.getElementById('rss_cat_1_b').value) {
        b = document.getElementById('rss_cat_1_b').value;
    }
    if (document.getElementById('rss_cat_1_f').value) {
        f = Number(document.getElementById('rss_cat_1_f').value);
    }
    var p = document.getElementById('rss_cat_1_p').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < o) {
                o -= dif;
            } else {
                dif -= o;
                o = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_1').value = x;
    document.getElementById('rss_cat_1_o').value = o;
    document.getElementById('rss_cat_1_b').value = b;
    document.getElementById('rss_cat_1_f').value = f;
}
function fill_value_choix_p_lv2() {
    var x = 0,
        o = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_2').value) {
        x = Number(document.getElementById('rss_cat_2').value);
    }
    if (document.getElementById('rss_cat_2_o').value) {
        p = document.getElementById('rss_cat_2_o').value;
    }
    if (document.getElementById('rss_cat_2_b').value) {
        b = document.getElementById('rss_cat_2_b').value;
    }
    if (document.getElementById('rss_cat_2_f').value) {
        f = Number(document.getElementById('rss_cat_2_f').value);
    }
    var p = document.getElementById('rss_cat_2_p').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < o) {
                o -= dif;
            } else {
                dif -= o;
                o = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_2').value = x;
    document.getElementById('rss_cat_2_o').value = o;
    document.getElementById('rss_cat_2_b').value = b;
    document.getElementById('rss_cat_2_f').value = f;
}
function fill_value_choix_p_lv3() {
    var x = 0,
        o = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_3').value) {
        x = Number(document.getElementById('rss_cat_3').value);
    }
    if (document.getElementById('rss_cat_3_o').value) {
        p = document.getElementById('rss_cat_3_o').value;
    }
    if (document.getElementById('rss_cat_3_b').value) {
        b = document.getElementById('rss_cat_3_b').value;
    }
    if (document.getElementById('rss_cat_3_f').value) {
        f = Number(document.getElementById('rss_cat_3_f').value);
    }
    var p = document.getElementById('rss_cat_3_p').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < o) {
                o -= dif;
            } else {
                dif -= o;
                o = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_3').value = x;
    document.getElementById('rss_cat_3_o').value = o;
    document.getElementById('rss_cat_3_b').value = b;
    document.getElementById('rss_cat_3_f').value = f;
}
function fill_value_choix_p_lv4() {
    var x = 0,
        o = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_4').value) {
        x = Number(document.getElementById('rss_cat_4').value);
    }
    if (document.getElementById('rss_cat_4_o').value) {
        p = document.getElementById('rss_cat_4_o').value;
    }
    if (document.getElementById('rss_cat_4_b').value) {
        b = document.getElementById('rss_cat_4_b').value;
    }
    if (document.getElementById('rss_cat_4_f').value) {
        f = Number(document.getElementById('rss_cat_4_f').value);
    }
    var p = document.getElementById('rss_cat_4_p').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < o) {
                o -= dif;
            } else {
                dif -= o;
                o = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_4').value = x;
    document.getElementById('rss_cat_4_o').value = o;
    document.getElementById('rss_cat_4_b').value = b;
    document.getElementById('rss_cat_4_f').value = f;
}
function fill_value_choix_p_lv5() {
    var x = 0,
        o = 0,
        b = 0,
        f = 0;
    if (document.getElementById('rss_cat_5').value) {
        x = Number(document.getElementById('rss_cat_5').value);
    }
    if (document.getElementById('rss_cat_5_o').value) {
        p = document.getElementById('rss_cat_5_o').value;
    }
    if (document.getElementById('rss_cat_5_b').value) {
        b = document.getElementById('rss_cat_5_b').value;
    }
    if (document.getElementById('rss_cat_5_f').value) {
        f = Number(document.getElementById('rss_cat_5_f').value);
    }
    var p = document.getElementById('rss_cat_5_p').value;
    var sum = Number(o) + Number(p) + Number(b) + Number(f);
    var dif = Math.abs(x - sum);
    if (dif < f) {
        f -= dif;
    } else {
        dif -= f;
        f = 0;
        if (dif < b) {
            b -= dif;
        } else {
            dif -= b;
            b = 0;
            if (dif < o) {
                o -= dif;
            } else {
                dif -= o;
                o = 0;
                x += dif;
            }
        }
    }
    document.getElementById('rss_cat_5').value = x;
    document.getElementById('rss_cat_5_o').value = o;
    document.getElementById('rss_cat_5_b').value = b;
    document.getElementById('rss_cat_5_f').value = f;
}

// fonction d'utilitaire  ==============================================================================================
//======================================================================================================================
function reverseString(str) {
    return str
        .split('')
        .reverse('')
        .join('')
}

function espaceMilier(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

/* For example, if you pass it 123456789.01, the positive assertion will match every 
spot to the left of the 7 (since 789 is a multiple of 3 digits, 678 is a multiple of 3 digits, 
    567, etc.). The negative assertion checks that the multiple of 3 digits does not have any digits 
    after it. 789 has a period after it so it is exactly a multiple of 3 digits, so a comma goes there. 
    678 is a multiple of 3 digits but it has a 9 after it, so those 3 digits are part of a group of 4, and 
    a comma does not go there. Similarly for 567. 456789 is 6 digits, which is a multiple of 3, so a comma 
    goes before that. 345678 is a multiple of 3, but it has a 9 after it, so no comma goes there. And so on. 
    The \B keeps the regex from putting a comma at the beginning of the string.*/