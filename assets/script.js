//Get current date and formate it propperly to jumbotron class

var today = moment().format("dddd, MMMM Do YYYY")
$('#currentDay').text(today)

function saveBtnFunc(){ 
    
    const text = $(this).siblings(".description").val()
    console.log(text)
    const time = $(this).siblings(".description").attr("id")
    console.log(time)
    localStorage.setItem(time, text)
}
$(".saveBtn").on("click",saveBtnFunc)


function rowRender(){
    for (let i = 9; i <= 17; i++) {
        $(`#hour-${i}`).val(localStorage.getItem(`hour-${i}`))

        
    }
}
rowRender()

function rowColor(){
    let currentTime = moment().hour()
    $('.description').each(function(){
        console.log($(this).attr('id'))
    })
}
rowColor()