import { videos } from './videos';

export const models = [
  videos
];

export const loadFixtures = () => {
  videos.forEach(video => {
    localStorage.setItem(video.id.toString(), JSON.stringify(video));
  });
};