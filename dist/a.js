
$(document).ready(function() {
    $('#b1').click((event) => {
    event.preventDefault()
		console.log("hi")
    $.get('./listall',(data) =>{
      var d=(JSON.stringify(data,null,'\t'))
      d.substring(1,d.length-1);
      console.log(d)
      $("#listall").html(d)
    })
  })
  $('#b2').click((event) => {
    event.preventDefault()
    $.get('./hello',{
      search: $('input[name=search]').val(),
    },(data) =>{
      $("#hello").html(data)
    })
  })
  $('#b3').click((event) => {
    event.preventDefault()
    $.get('./add',{
      search: $('input[name=addid]').val(),
      search: $('input[name=addname]').val(),
    })
  })
  $('#b4').click((event) => {
    event.preventDefault()
    $.get('./delete',{
      search: $('input[name=delete]').val(),
    })
  })
});
