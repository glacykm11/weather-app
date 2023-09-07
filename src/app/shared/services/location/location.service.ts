import { Injectable } from '@angular/core';
import { Location } from '../../interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  getPosition(): Promise<Location> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({
            longitude: resp.coords.longitude,
            latitude: resp.coords.latitude,
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
