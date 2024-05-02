$(document).ready(function(){

  
    $('form').click('submit', function(e) {
        e.preventDefault()
        const tarefaNova=$('#nome-da-tarefa').val()
        const novoItem=$('<li style="text-decoration:line-through"></li>')

        $(tarefaNova).appendTo(novoItem);
        $(novoItem).appendTo('ul'); 
        $(novoItem).fadeIn();  
        $('#nome-da-tarefa').val('');
    })
})
