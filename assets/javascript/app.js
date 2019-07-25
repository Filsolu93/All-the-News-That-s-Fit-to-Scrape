function shownote(event) {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    var id = $(this).attr("value");
    // eslint-disable-next-line no-undef
    $("#addnote").fadeIn(300).css("display", "flex");
    // eslint-disable-next-line no-undef
    $("#add-note").attr("value", id);
    // eslint-disable-next-line no-undef
    $.get("/" + id, function (data) {
        // eslint-disable-next-line no-undef
        $("#article-title").text(data.title);
        // eslint-disable-next-line no-undef
        $.get("/note/" + id, function (data) {
            if (data) {
                // eslint-disable-next-line no-undef
                $("#note-title").val(data.title);
                // eslint-disable-next-line no-undef
                $("#note-body").val(data.body);
            }
        });
    });

}

function addnote(event) {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    var id = $(this).attr("value");
    var obj = {
        // eslint-disable-next-line no-undef
        title: $("#note-title").val().trim(),
        // eslint-disable-next-line no-undef
        body: $("#note-body").val().trim()
    };
    // eslint-disable-next-line no-undef
    $.post("/note/" + id, obj, function (data) {
        window.location.href = "/saved";
    });
}

function changestatus() {
    // eslint-disable-next-line no-undef
    var status = $(this).attr("value");
    if (status === "Saved") {
        // eslint-disable-next-line no-undef
        $(this).html("Unsave");
    }
};

function changeback() {
    // eslint-disable-next-line no-undef
    $(this).html($(this).attr("value"));
}

// eslint-disable-next-line no-undef
$(document).on("click", ".addnote-button", shownote);
// eslint-disable-next-line no-undef
$(document).on("click", "#add-note", addnote);
// eslint-disable-next-line no-undef
$(".status").hover(changestatus, changeback);
// eslint-disable-next-line no-undef
$("#close-note").on("click", function () {
    // eslint-disable-next-line no-undef
    $("#addnote").fadeOut(300});