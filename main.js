
$(document).ready(function(){

    $('form').submit(function(e){
  
      e.preventDefault();
      const tarefaNova = $('#nome-da-tarefa').val();
      const novoItem = $('<li></li>').text(tarefaNova);
  
      $('ul').append(novoItem); 
      $('#nome-da-tarefa').val('');
  
    })
    
    $('ul').on('click', 'li', function(e){
        e.preventDefault();
        $(this).toggleClass('riscarTarefa')
    })

 })


 