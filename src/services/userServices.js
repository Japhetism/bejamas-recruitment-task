import axios from 'axios';
import { SYSTEM_ERROR } from '../config/CONSTANTS';
import { GET_ALL_USERS, GET_USER_DETAILS } from './CONSTANTS';

export const getAllusers = () => {
  console.log('userServices > getAllUsersn called...');
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(GET_ALL_USERS())
        .then((res) => {
          console.log('getAllUsers > axios res=', res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log('getAllUsers > axios err', err);
          reject('Error in getAllUsers axios!');
        });
    } catch (error) {
      console.log('in userServices > getAllUsers, Err', error);
      reject(SYSTEM_ERROR);
    }
  });
};

export const getUserDetails = (id = 2) => {
  console.log('userServices > getUserDetails called...');
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(GET_USER_DETAILS(id))
        .then((res) => {
          console.log('getUserDetails > axios res', res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log('getUserDetails > axios err', err);
          reject('Error in getUserDetails axios!');
        });
    } catch (error) {
      console.log('in userServices > getUserDetails, Err=', error);
    }
  });
};

export const getUserDetails1 = () => {
  console.log('userServices > getUserDetails called...');
  return new Promise((resolve, reject) => {
    try {
      resolve({
        id: '30',
        firstName: 'James',
        lastName: 'Doe',
        gender: 'Male',
        age: 33,
        isActiveEmployee: true,
        location: 'London',
      });
    } catch (error) {
      console.error('in userServices > getUserDetails, Err=', error);
      reject(SYSTEM_ERROR);
    }
  });
};
