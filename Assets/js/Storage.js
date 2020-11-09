$(document).ready(function () {
    // DECLARE INITIAL ACTION (LIKE HIDING SOME TABS, LOADING SOMETHING)
    $(".storage-tab").hide(); // ẩn tất cả các tab ở storage, chỉ hiện tab mặc định là picture-storage-container.
    $("#picture-storage-container").show();


    // DECLARE HELPER FUNCTION
    function showStorageTab(clickedBtn){
        let idClickedBtn = clickedBtn.attr('id');
        
        // Ẩn tất cả các tab.
        $(".storage-tab").hide();

        // Hiện mỗi tab click
        if(idClickedBtn === 'profile-customized-btn'){
            $("#profile-storage-container").show();
        }
        else if(idClickedBtn === 'picture-customized-btn'){
            $("#picture-storage-container").show();
        }
        else{
            $("#video-storage-container").show();
        }
    }



    // DECLARE EVENT HANDLER
    $(".customized-btn").on("click", function () {
        $(".customized-btn").removeClass("selected-customized-btn"); //bỏ lựa chọn cái nút đã select trước đó.
        $(this).addClass("selected-customized-btn"); //select nút mới.

        // Ẩn các cái còn lại.
        $(".storage-tab").hide();
        // show cái mới được chọn.
        showStorageTab($(this));
    });
})