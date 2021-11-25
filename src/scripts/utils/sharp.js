const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve('./src/public/images/heros');
const destination = target;

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(1920)
      .toFile(
        path.resolve(
          `${destination}/${image.replace(image, 'hero-image_4-large.jpg')}`,
        ),
      );

    sharp(`${destination}/${image}`)
      .resize(480)
      .toFile(
        path.resolve(
          `${destination}/${image.replace(image, 'hero-image_4-small.jpg')}`,
        ),
      );
  });
