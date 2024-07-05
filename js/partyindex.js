/// <reference types="../@types/jquery" />


$('.openMenue').on('click',function(){
    const sideBarWidth = $('.sidebar').innerWidth()
    if ($('.sidebar').css("left")=="0px"){
        $('.sidebar').animate({ left: -sideBarWidth+"px" }, 1000)
        $('.openMenue').animate({ left: 10 + "px" },1000)
    }
    else{
        $('.sidebar').animate({ left: "0px" }, 1000)
        $('.openMenue').animate({ left: sideBarWidth + "px" }, 1000)

    }
    
})

$('.closebtn').on('click', function (){
    const sideBarWidth = $('.sidebar').innerWidth();
    $('.sidebar').css({"transform" :"translateX(-100% )"});
    $('.openMenue').animate({ left: 10 + "px" });

})

$(".singer .singerLabel").on("click",function(){
    
    $(this) .next().slideToggle(500)
})

// $('#getting-started').countdown('2024/12/10', function (event) {
//     $(this).html(event.strftime('%d days %H:%M:%S'));
//     $(this).html(event.strftime(`
//         <div class="first col-md-3">
//         <p>%d</p>
//                 </div >
//                 <div class="second col-md-3">
//                     <p>%H</p>
//                 </div>
//                 <div class="third col-md-3">
//                     <p>%M</p>
//                 </div>
//                 <div class="fourth col-md-3">
//                     <p>%S</p>
//                 </div>`))
// });

let countdown=new Date("Jan 30, 2026 22:59:59").getTime();

let counter =setInterval(() => {
    let dateNow=new Date() .getTime();
    let dateDiff =countdown-dateNow;
    let days = Math.floor(dateDiff/1000/60/60/24) ;
    // console.log(days);
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 *60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 *60));
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / (1000));
    document.querySelector(".first p").innerHTML = days;
    document.querySelector(".second p").innerHTML = hours;
    document.querySelector(".third p").innerHTML = minutes;
    document.querySelector(".fourth p").innerHTML = seconds;

}, 1000);

$('textarea').on('input',function(){
    const maxText = $('textarea').attr('maxlength');
    // console.log(maxText);
    $('#chars').html(maxText);

    let textlength=$(this).val().length;
    let remChar = maxText - textlength;

    $('#chars').html(remChar);
    


})