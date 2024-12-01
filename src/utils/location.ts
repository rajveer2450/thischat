import { getDistance as geolibGetDistance } from 'geolib';
import { Location } from '../types';

export const getDistance = (point1: Location, point2: Location): number => {
  return geolibGetDistance(point1, point2) / 1000; // Convert meters to kilometers
};

export const useCurrentLocation = (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};