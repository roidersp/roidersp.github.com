

var zoom = new Datamap({
  element: document.getElementById("indepth_mapa_map"),
  geographyConfig: {
	  popupTemplate: function(geo, data) {
	                return ['<div class="hoverinfo"><strong>',
	                        'Number of things in ' + geo.properties.name,
	                        ': ' + data.num_pais,
	                        '</strong></div>'].join('');
	            },
            popupOnHover: true,
            highlightOnHover: false,
            borderColor: 'rgb(238, 238, 238)',
                  },
                  projection: 'mercator',
  scope: 'world',
  // Zoom in on Africa
 
  fills: {
    defaultFill: "black",
   active:"#eadb7b",
  },
  data: {
    'EGY': { fillKey: 'active', "num_pais":0, "nombre:":"test" },
    'COD': { fillKey: 'active' , "num_pais":1},
    'MAR': { fillKey: 'active' , "num_pais":2},
    'CMR': { fillKey: 'active' , "num_pais":3},
    'TUN': { fillKey: 'active' , "num_pais":4},
     'DZA': { fillKey: 'active' , "num_pais":5},
    'GHA': { fillKey: 'active' , "num_pais":6},
    'GIN': { fillKey: 'active' , "num_pais":7},
    'NER': { fillKey: 'active', "num_pais":8},
    'CIV': { fillKey: 'active' , "num_pais":9},
    'ZAF': { fillKey: 'active' , "num_pais":10},
    'COG': { fillKey: 'active', "num_pais":11}
  },
  done: function(datamap) {
         }
});

      

