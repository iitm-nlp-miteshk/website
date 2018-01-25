var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Deep_learning",
      excerpt: "Deep Learning Course\n",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Tdl",
      excerpt: "Topics in Deep Learning\n",
      categories: [],
      tags: [],
      id: 1
    });
    
  

  
  

  
  
    idx.add({
      title: "Dialog",
      excerpt: "Dialog Systems research\n",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Multilingual",
      excerpt: "Multilingual\n",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Nlg",
      excerpt: "NLG Research\n",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Qa",
      excerpt: "Question Answering Systems research\n",
      categories: [],
      tags: [],
      id: 5
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Deep_learning",
        "url": "/courses/deep_learning/",
        "excerpt": "Deep Learning Course\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Tdl",
        "url": "/courses/tdl/",
        "excerpt": "Topics in Deep Learning\n",
        "teaser":
          
            null
          
      },
    
  
    
    
    
  
    
    
    
      
      {
        "title": "Dialog",
        "url": "/research/dialog/",
        "excerpt": "Dialog Systems research\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Multilingual",
        "url": "/research/multilingual/",
        "excerpt": "Multilingual\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Nlg",
        "url": "/research/nlg/",
        "excerpt": "NLG Research\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Qa",
        "url": "/research/qa/",
        "excerpt": "Question Answering Systems research\n",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
