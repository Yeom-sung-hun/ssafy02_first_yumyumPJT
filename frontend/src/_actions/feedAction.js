import { CREATE_FEED, GET_FEED, DELETE_FEED, GET_FEEDCALENDAR_BY_EMAIL, CREATE_VIDEO, GET_ALL_FEED } from './types';
import { request } from "../_utils/axios";


const FEED_URL = '/feed';

// feed 생성
export function createFeed(dataToSubmit) {
    const data = request('post', FEED_URL, dataToSubmit);
    return {
        type: CREATE_FEED,
        payload: data,
    }
}

// id에 해당하는 feed 정보
export function getFeed(dataToSubmit) {
    const id = dataToSubmit
    const data = request("get", FEED_URL + `/${id}`);
    return {
      type: GET_FEED,
      payload: data,
    };
  }

// 모든 feed list
export function getAllFeed() {
    const data = request("get", FEED_URL + `/list`);
    return {
      type: GET_ALL_FEED,
      payload: data,
    };
  }

// feed 삭제
export function deleteFeed(dataToSubmit) {
    const id = dataToSubmit
    const data = request("delete", FEED_URL + `/${id}`);
    return {
      type: DELETE_FEED,
      payload: data,
    };
  }

export function createVideo(dataToSubmit) {
    for (let value of dataToSubmit.values()) {
      console.log(value);
    }
    const data = request('post', FEED_URL+ `/video`, dataToSubmit);
    return {
        type: CREATE_VIDEO,
        payload: data,
    }
}

// user의 feed를 날짜별로 요청
export function getFeedCalendarByEmail(dataToSubmit) {
  const email = dataToSubmit
  const data = request("get", FEED_URL + `/list/${email}`);
  return {
    type: GET_FEEDCALENDAR_BY_EMAIL,
    payload: data,
  };
}