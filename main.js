'use strict'


var b = document.querySelector('#btn');
var myClick = function (btn) {
   console.log(btn);   
}

var data = [
   {name: 'Home', link: '/'},
   { name: 'About us', link: 'page/about-us' },
   { name: 'Contacts', link: 'page/Contacts' },
   { name: 'Gallery', link: 'page/Gallery' },
   { name: 'Catalog', link: 'page/Catalog' },
   { name: 'Support', link: 'page/Support' },
   {
      name: "Catalog",
      link: 'page/catalog',
      child: [
         { name: 'Category-1', link: 'category/1' },
         { name: 'Category-2', link: 'category/2' },
         { name: 'Category-3', link: 'category/3' },
      ]
   },
  {name: 'Support', link: 'page/support'}
]

function hover (e) {
   console.log(e);
}

var ul = document.querySelector ('#menu');
var html = '';

data.forEach(function (item) {
  
   var childHtml = '';

   if(item.child) {
      childHtml += '<ul>';
      item.child.forEach(function (item) {
         childHtml += `<li><a href=${item.link}>${item.name}</a></li>`
      });
      childHtml += '</ul>';
   }
   var event = item.child ? 'class="drop"' : '';
   html += `<li ${event} ><a href=${item.link}>${item.name}</a>${childHtml}</li>`
})   


ul.innerHTML = html;
