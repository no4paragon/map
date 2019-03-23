import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { filter } from 'rxjs/operators';

declare var google;

@Injectable()
export class MapServiceProvider {

  constructor(private geolocation: Geolocation) {
    console.log('Hello MapServiceProvider Provider');
  }

  latLng:any;
  initMap() {
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latLng = new google.maps.LatLng(
        resp.coords.latitude,
        resp.coords.longitude
        
      );
        console.log(resp, this.latLng, "hit")
     }).catch((error) => {
       console.log(error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
       data.coords.latitude,
       data.coords.longitude
     });
  
     const subscription = this.geolocation.watchPosition()
      .pipe(filter((p) => p.coords !== undefined))
                                .subscribe(position => {
    console.log(position.coords.longitude + ' ' + position.coords.latitude);
    });
  
    // To stop notifications
    subscription.unsubscribe();
   };


}
