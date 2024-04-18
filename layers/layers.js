var wms_layers = [];


        var lyr_googlesateliete_0 = new ol.layer.Tile({
            'title': 'google sateliete ',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_guraferda_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "guraferda",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "guraferda",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_guraferda_1, 0]);
var lyr_kenyan_counties_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "kenyan_counties",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "kenyan_counties",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_kenyan_counties_2, 0]);
var lyr_limu_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "limu",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "limu",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_limu_3, 0]);
var lyr_kenyan_suppliers_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "kenyan_suppliers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "kenyan_suppliers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_kenyan_suppliers_4, 1]);
var lyr_mizan_outgrowers_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "mizan_outgrowers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "mizan_outgrowers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_mizan_outgrowers_5, 1]);
var lyr_mizan_2_ingrowers_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "mizan_2_ingrowers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "mizan_2_ingrowers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_mizan_2_ingrowers_6, 1]);
var lyr_mizan_1_ingrowers_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "mizan_1_ingrowers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "mizan_1_ingrowers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_mizan_1_ingrowers_7, 1]);
var lyr_limu_outgrowers_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://app.mygeoserver.click/geoserver/testing/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "limu_outgrowers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "limu_outgrowers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_limu_outgrowers_8, 1]);

lyr_googlesateliete_0.setVisible(true);lyr_guraferda_1.setVisible(true);lyr_kenyan_counties_2.setVisible(true);lyr_limu_3.setVisible(true);lyr_kenyan_suppliers_4.setVisible(true);lyr_mizan_outgrowers_5.setVisible(true);lyr_mizan_2_ingrowers_6.setVisible(true);lyr_mizan_1_ingrowers_7.setVisible(true);lyr_limu_outgrowers_8.setVisible(true);
var layersList = [lyr_googlesateliete_0,lyr_guraferda_1,lyr_kenyan_counties_2,lyr_limu_3,lyr_kenyan_suppliers_4,lyr_mizan_outgrowers_5,lyr_mizan_2_ingrowers_6,lyr_mizan_1_ingrowers_7,lyr_limu_outgrowers_8];
