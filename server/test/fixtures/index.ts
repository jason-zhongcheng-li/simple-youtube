import { videoStorage } from './../../src/index';
import { dummyVideos } from './videos';

export const models = [
  dummyVideos
];

// dummy data seeding
export const loadFixtures = () => {
  dummyVideos.forEach(video => videoStorage.push(video));
};
