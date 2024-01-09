import { useState } from 'react';
import jLoop from './jLoop';

// inspired by https://codepen.io/AlexWarnes/pen/jXYYKL

type OrbitingPlanetProps = {
  color: string;
  orbitSize: number;
  planetSize: number;
  spinSpeed: number;
};

/**
 * Renders an circle going around a circular line.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.color - The color of the planet.
 * @param {number} props.orbitSize - The size of the orbit.
 * @param {number} props.planetSize - The size of the planet.
 * @param {number} props.spinSpeed - The speed of the planet's spin.
 * @returns {JSX.Element}
 */
function OrbitingPlanet({
  color,
  orbitSize,
  planetSize,
  spinSpeed,
}: OrbitingPlanetProps): JSX.Element {
  const colorClassName = `bg-${color}-500`;
  return (
    <>
      <div
        className='absolute flex rounded-full border border-gray-800'
        data-testid='orbit'
        style={{
          animation: `spin ${spinSpeed}s linear 0s infinite`,
          height: `${orbitSize}px`,
          justifyContent: 'center',
          width: `${orbitSize}px`,
        }}
      >
        <div
          className={`absolute ${colorClassName} rounded-full`}
          data-testid='planet'
          style={{
            height: `${planetSize}px`,
            top: `${-planetSize / 2}px`,
            width: `${planetSize}px`,
          }}
        />
      </div>
    </>
  );
}

const MAX_PLANETS = 5;
const MIN_PLANETS = 0;

/**
 * A component that renders a number of planets orbiting a sun. The number of
 * planets can be increased or decreased by clicking the Add and Remove buttons.
 * Number of planets is shown at the top of the component.
 * @returns {JSX.Element}
 */
export default function JOrbit(): JSX.Element {
  const [planets, setPlanets] = useState<JSX.Element[]>([]);

  const getNumberOfPlanets = () => {
    let planetCounter = 0;
    jLoop(
      planetCounter,
      () => planetCounter < planets.length,
      () => {
        return planetCounter++;
      },
      () => {}
    );
    return planetCounter;
  };

  const numberOfPlanets = getNumberOfPlanets();

  const handleAddPlanet = () => {
    if (numberOfPlanets < MAX_PLANETS) {
      const index = numberOfPlanets + 1;
      const randomNum = Math.floor(Math.random());

      setPlanets([
        ...planets,
        <OrbitingPlanet
          color={index % 2 === 0 ? 'blue' : 'green'}
          key={index}
          orbitSize={40 * index + randomNum}
          planetSize={5 * index + randomNum}
          spinSpeed={10 / index + randomNum}
        />,
      ]);
    }
  };

  const handleRemoveOrbit = () => {
    if (numberOfPlanets > MIN_PLANETS) {
      const newPlanets = [...planets];
      newPlanets.pop();
      setPlanets(newPlanets);
    }
  };

  const animationStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

  const buttonClassName =
    'rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700';

  return (
    <div className='flex flex-col items-center gap-4'>
      <p className='text-xl font-bold'>Number of Planets: {numberOfPlanets}</p>
      <div className='flex gap-4'>
        <button
          className={buttonClassName}
          disabled={numberOfPlanets === MAX_PLANETS - 1}
          onClick={handleAddPlanet}
        >
          Add
        </button>
        <button
          className={buttonClassName}
          disabled={numberOfPlanets === MIN_PLANETS}
          onClick={handleRemoveOrbit}
        >
          Remove
        </button>
      </div>
      <div className='relative flex h-40 w-40 items-center justify-center'>
        <style>{animationStyles}</style>
        <div className='absolute h-4 w-4 rounded-full bg-yellow-300'></div>
        {planets}
      </div>
    </div>
  );
}
