//Get current date and formate it properly to jumbotron class

var today = moment().format("dddd, MMMM Do YYYY")
$('#currentDay').text(today)

//adds fucntion to the time block button to save what's ever inputted locally
function saveBtnFunc(){ 
    
    const text = $(this).siblings(".description").val()
    const time = $(this).siblings(".description").attr("id")
    localStorage.setItem(time, text)
}
$(".saveBtn").on("click",saveBtnFunc)

// draws the saved value out of local storage and displays it in its proper row
function rowRender(){
    for (let i = 9; i <= 17; i++) {
        $(`#hour-${i}`).val(localStorage.getItem(`hour-${i}`))

    }
}
rowRender()

//changes the row color to reflect the past, present, or future
function rowColor(){
    let currentTime = moment().hour()
    $('.description').each(function(){
        let targetHour = $(this).attr('id').replace('hour-', '');
        
        if (targetHour < currentTime){
            $(this).addClass('past')
        }

        if (targetHour === currentTime){
            $(this).addClass('present')
        }

        if (targetHour > currentTime){
            $(this).addClass('future')
        }
      
    })
}
rowColor()