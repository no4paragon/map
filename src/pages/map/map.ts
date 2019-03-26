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

    setTimeout( _ =>{
      console.log("coords", this.mapService.latLng )
    }, 3000 )
    
    let latLng = new google.maps.LatLng(this.mapService.latLng.lat(), this.mapService.latLng.lng());

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    new google.maps.Marker({
      map: this.map,
      position: latLng,
      animation: google.maps.Animation.BOUNCE
    });
    
    
  

  }

}
