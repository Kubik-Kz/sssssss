var mql;
if ((mql = window.matchMedia("(max-width: 768px)")).matches && $("#wrap--mobile").ready(function() {
        var e = $(".first--queue"),
            t = $(".content--right");
        e.replaceWith(t.clone()), t.replaceWith(e)
    }), 
    (mql = window.matchMedia("(max-width: 768px)")).matches && $("#flex--footer").ready(function() {
        var e = $(".block--footer"),
            t = $(".adress");
        e.replaceWith(t.clone()), t.replaceWith(e)
    }), 
    (mql = window.matchMedia("(max-width: 480px)")).matches && $("#flex--footer").ready(function() {
        var e = $(".info-layout-1"),
            t = $(".room-advantages");
        e.replaceWith(t.clone()), t.replaceWith(e)
    }), 
    
    (mql = window.matchMedia("(max-width: 768px)")).matches) {
    var div = document.getElementById("corpuse");
    div.innerHTML += "Жилых корпусов"
}