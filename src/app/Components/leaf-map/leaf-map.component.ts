import { Component, OnInit, Input } from "@angular/core";

declare const L: any;
@Component({
  selector: "sky-leaf-map",
  templateUrl: "./leaf-map.component.html",
  styleUrls: ["./leaf-map.component.scss"]
})
export class LeafMapComponent implements OnInit {
  long = 80.2695;
  lat = 13.1009;
  centralParkSouth = [12.897298, 80.221535];
  ex_lat = 13.058;
  ex_long = 80.284;

  darkId: string = "dark-v10";
  streetId: string = "streets-v11";
  outDoor: string = "outdoors-v11";
  satelite: string = "satellite-v9";
  @Input("darkMode") darkMode: boolean;
  constructor() {}

  ngOnInit() {
    this.darkMode = this.darkMode || false;
    const mymap = L.map("mapid").setView([this.ex_lat, this.ex_long], 14);
    // const mymap = L.map("mapid").setView([this.lat, this.long], 12);
    if (this.darkMode) {
      mymap.setStyle("mapbox://styles/mapbox/" + this.darkId);
    }
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoicHJpdGFtMTk5NXVtYXIiLCJhIjoiY2p5N2U3cnk4MDAxczNwbGljN3QxczJydyJ9.WEPEtbpWYWQNi94jqwhF3Q"
      }
    ).addTo(mymap);

    const marker = L.marker([this.ex_lat, this.ex_long]).addTo(mymap);
    marker.bindPopup("<b>Hello!!</b><br>You can Find me here.<br>").openPopup();
    mymap.on("click", this.onMapClick);
  }
  onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
  }
}
