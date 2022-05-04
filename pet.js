

$(document).ready(function() {
  
         $('.text').text('loading . . .');
    
    $.ajax({
      type:"GET", contentType:"application/json", url:"https://pricentic.com/api/products",
      success: function(data) {
        $.each(data.entities, function( index, value ) {
            var card = [value];
      
        var item = "";
        var brand = "";
        var sale = "";
        var price = "";
        var photo = "";
        var itemContainerHTML = "";
        var itemUrl = "";
        var ratings = "";
        var percent_sale = "";
       
        
       

        for (i=0; i < card.length; i++){
            item = '<li class="itemName">' + card[i].name + '</li>';
            brand = '<li class="brand">' + card[i].brand + '</li>';
            sale = '<li class="sale">' + 'Sale: $' + card[i].price + '</li>';
            price = '<li class="price">' + '$' + card[i].originalPrice + '</li>';
            photo = '<img class="item_photo" src =' + card[i].thumbnailImageUrl + '>';
            itemUrl = card[i].productUrl;
            ratings = card[i].rating;
            percent_sale = card[i].percentOff;




    getPrice = function() {
       if (card[i].originalPrice >= card[i].price) {
     return price;
    } else { 
      return sale;
  }
}
            

             itemHTML =  `<div class="item_card">
  
             <div class="item_photo">${photo}</div>

             <div id="item_data">
             <ul id="item_info">
             <a class = "itemLink" target="_blank" href = ${itemUrl} > ${item} </a>
              ${brand}<br>
              ${getPrice()}
             </ul>
             </div> 

             <span class="ribbon ribbon">
              <span class="ribbon-inner-wrap">
               <span class="ribbon-border">
               </span>
            <span class="ribbon-text">${percent_sale}</span>
               </span>
                </span>

             <div id="button_wrapper">
              <button type="button" class="button_buy" id="button_buy">buy</button>
               </div>

                </div> `

            itemContainerHTML += itemHTML;
          }


          
          var outputDiv = document.getElementById('itemContainer');
          outputDiv.innerHTML += itemContainerHTML;

        
console.log(data.entities)
    

    var search = document.getElementById('searchInput');
    search.innerHTML += searchInput;

    $(document).delegate('#searchInput', 'change keyup paste', function(e){
      var searchPhrase = $(this).val();
      $(card).text(searchPhrase);
      
      searchPhrase = $.trim(searchPhrase).replace(/ +/g, " ").toLowerCase();
      $(data.entities).find(value).show().filter(function($index){
        var a = $(this).text().replace(/\s+/g, " ").toLowerCase();
        return -1 === a.indexOf(searchPhrase)
      }).hide();
    });





      
        });
    },
},
        );
    });
    
    
    
   



//dropdown filter
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




