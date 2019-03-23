import { 
  Component, 
  ViewChild, 
  ElementRef } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapServiceProvider } from '../../providers/map-service/map-service';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  // latLng = this.mapService.latLng;

  constructor(
    public navCtrl: NavController, 
    public geolocation: Geolocation, 
    public mapService: MapServiceProvider
    ) {}

  ionViewDidLoad(){
    this.loadMap();
    this.mapService.initMap();
  }

  loadMap(){

    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log('')
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}
