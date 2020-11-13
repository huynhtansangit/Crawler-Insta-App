$(document).ready(function () {
    // DECLARE INITIAL ACTION (LIKE HIDING SOME TABS, LOADING SOMETHING)

    // ẩn tất cả các edit-pic-option.
    $(".edit-pic-option").hide();
    $("#edit-pic-text-option").show();


    // DECLARE HELPER FUNCTION



    // DECLARE EVENT HANDLER
    $(".edit-pic-main-option").on("click", function(){
        $(".edit-pic-main-option").removeClass("selected-edit-pic-main-option"); //bỏ lựa chọn cái nút đã select trước đó.
        $(this).addClass("selected-edit-pic-main-option"); //select nút mới.

        // Ẩn các cái menu còn lại.
        // $("").hide();
        // show cái mới được chọn.
        
    });
})