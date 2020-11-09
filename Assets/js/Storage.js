$(document).ready(function () {
    // DECLARE INITIAL ACTION (LIKE HIDING SOME TABS, LOADING SOMETHING)
    
    // ẩn tất cả các tab ở storage, chỉ hiện tab mặc định là picture-storage-container.
    //không thể dùng .hide() vì swiper không cho => phải dùng important
    $(".storage-tab").attr( "style", "display: none !important;" ); 
    $("#picture-storage-container").show();
    
    // For swiper
    new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // Prevent not changing width anymore
        slidesPerView:'auto'
    })


    // DECLARE HELPER FUNCTION
    function showStorageTab(clickedBtn){
        let idClickedBtn = clickedBtn.attr('id');
        
        // Ẩn tất cả các tab, không thể dùng .hide() vì bị swiper không cho => phải dùng important
        $(".storage-tab").attr( "style", "display: none !important;" )

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