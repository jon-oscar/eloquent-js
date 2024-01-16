import { useState } from 'react';
import Image from 'next/image';
import jEvery from './jEvery';

const CARNIVORE_IMAGE_URLS = [
  '/penguin-police-officer.png',
  '/tiger-teacher.png',
];

const HERBIVORE_IMAGE_URLS = [
  '/elephant-firefighter.png',
  '/panda-scientist.png',
];

const animalImageUrls = [...CARNIVORE_IMAGE_URLS, ...HERBIVORE_IMAGE_URLS];

/**
 * Renders a component that displays two animal images and a button. When the
 * button is clicked, the animal images change to other animals. A message is
 * displayed below the images to indicate whether both animals are herbivores.
 * @returns JSX.Element
 */
export default function JHerbivore(): JSX.Element {
  const [shownAnimalImages, setShownAnimalImages] = useState<string[]>([
    animalImageUrls[0],
    animalImageUrls[1],
  ]);

  function getNextAnimalImageIndex(imageUrl: string): number {
    const currentImageIndex = animalImageUrls.indexOf(imageUrl);
    return currentImageIndex === animalImageUrls.length - 1
      ? 0
      : currentImageIndex + 1;
  }

  function changeAnimalImages(): void {
    setShownAnimalImages([
      animalImageUrls[getNextAnimalImageIndex(shownAnimalImages[0])],
      animalImageUrls[getNextAnimalImageIndex(shownAnimalImages[1])],
    ]);
  }

  function areAllShownAnimalsHerbivore(): boolean {
    return jEvery(shownAnimalImages, (image) =>
      HERBIVORE_IMAGE_URLS.includes(image)
    );
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex gap-4'>
        {shownAnimalImages.map((src) => (
          <div className='' key={src}>
            <Image
              alt={`Animal image ${src.replace(/[^a-zA-Z]+/g, '')}`}
              className='h-auto max-w-lg rounded-lg shadow-xl grayscale transition-all duration-300 hover:grayscale-0 dark:shadow-gray-800'
              height={200}
              src={src}
              width={200}
            />
          </div>
        ))}
      </div>
      <h3 className='text-xl font-bold'>
        {areAllShownAnimalsHerbivore() ? 'Both herbivores 🌿' : 'Mixed ❌'}
      </h3>
      <button
        className='rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        onClick={changeAnimalImages}
      >
        Next animal
      </button>
    </div>
  );
}
