import { Component, OnInit } from '@angular/core';

declare const ol:any;
@Component({
  selector: 'sky-open-map',
  templateUrl: './open-map.component.html',
  styleUrls: ['./open-map.component.scss']
})
export class OpenMapComponent implements OnInit {

  latitude: number = 18.5204;
  longitude: number = 73.8567;

  map: any;

  ngOnInit() {
    let mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });
    
    var iconFeature2 = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([80.2695, 13.1009])),
      name: 'Somewhere else'
    });
    
    // specific style for that one point
    iconFeature2.setStyle(new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/200px-Map_marker_font_awesome.svg.png',
      })
    }));
    
    
    
    
    const iconLayerSource = new ol.source.Vector({
      features: [ iconFeature2]
    });
    
    const iconLayer = new ol.layer.Vector({
      source: iconLayerSource,
       // style for all elements on a layer
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
        })
      })
    });


    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        iconLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([80.2695, 13.1009]),
        zoom: 12
      })
    });
    // var lonLat = new ol.LonLat( 13 ,60 )
    // .transform(
    //   new ol.Projection("EPSG:4326"), // transform from WGS 1984
    //   this.map.getProjectionObject() // to Spherical Mercator Projection
    // );
    // let marker = new ol.Layer.Markers( "Markers" );
    // this.map.addLayer(marker);
    
    // marker.addMarker(new ol.Marker(lonLat));
    // this.map.setCenter (lonLat, 16);
    // this.map.on('click', function (args) {
    //   console.log(args.coordinate);
    //   let lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
    //   console.log(lonlat);
      
    //   let lon = lonlat[0];
    //   let lat = lonlat[1];
    //   alert(`lat: ${lat} long: ${lon}`);
    // });
  }

  setCenter() {
    let view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }

}
