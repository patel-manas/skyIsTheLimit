import { Component, OnInit } from "@angular/core";
declare const mapboxgl;
mapboxgl.accessToken =
  "pk.eyJ1IjoicHJpdGFtMTk5NXVtYXIiLCJhIjoiY2p5N2U3cnk4MDAxczNwbGljN3QxczJydyJ9.WEPEtbpWYWQNi94jqwhF3Q";

@Component({
  selector: "sky-map-box",
  templateUrl: "./map-box.component.html",
  styleUrls: ["./map-box.component.scss"]
})
export class MapBoxComponent implements OnInit {
  map: any;
  constructor() {}

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: "box-map", // container id
      style: "mapbox://styles/mapbox/dark-v10", //hosted style id
      center: [-77.38, 39], // starting position
      zoom: 3 // starting zoom
    });
  }
}
