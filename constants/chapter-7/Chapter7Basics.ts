/**
 * Set of possible locations in the village.
 */
export const locations = new Set([
  "Alice's House",
  "Bob's House",
  'Cabin',
  'Post Office',
  'Town Hall',
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  'Shop',
  'Marketplace',
  'Farm',
]);

/**
 * Roads that connect locations in the village.
 */
export const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

/**
 * Builds a graph from a list of edges.
 * @param edges - The edges to build the graph from.
 * @returns A graph of the edges.
 */
export function buildGraph(edges: string[]): Record<string, string[]> {
  let graph = Object.create(null);

  function addEdge(from: string, to: string) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

/**
 * Graph of the roads in the village.
 */
const roadGraph = buildGraph(roads);

/**
 * Picks a random item from an array.
 * @param array - The array to pick from.
 * @returns A random item from the array.
 */
export function randomPick<T>(array: T[]): T {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

/**
 * Represents a parcel in the village.
 */
export interface Parcel {
  place: string; // Location where the parcel is to be picked up
  address: string; // Location where the parcel is to be delivered
}

/**
 * Represents the state of a village.
 */
export class VillageState {
  place: string; // The current location where the robot is in the village.
  parcels: Parcel[]; // The parcels in the village.

  /**
   * Creates a new VillageState instance.
   * @param place - The current place in the village.
   * @param parcels - The parcels in the village.
   */
  constructor(place: string, parcels: Parcel[]) {
    this.place = place;
    this.parcels = parcels;
  }

  /**
   * Moves the robot to a new destination in the village.
   * If there's a parcel at the destination, the robot will pick it up.
   * If the robot has a parcel addressed to the current location, it will delivered it.
   * @param destination - The destination to move to.
   * @returns A new VillageState instance with the updated place and parcels.
   */
  move(destination: string): VillageState {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }

  /**
   * Generates a random VillageState with the specified number of parcels.
   * @param parcelCount - The number of parcels to generate (default: 5).
   * @returns A new VillageState instance with random parcels.
   */
  random(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState('Post Office', parcels);
  }
}

/**
 * Runs a robot in the village.
 * @param state - The current state of the village.
 * @param robot - The robot to run.
 * @param memory - The robot's memory.
 */
export function runRobot(
  state: VillageState,
  robot: (
    state: VillageState,
    memory: any
  ) => { direction: string; memory: any },
  memory: any
): void {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

/**
 * A robot that picks a random direction to move to.
 * @param state - The current state of the village.
 * @returns The direction to move to.
 */
export function randomRobot(state: VillageState): { direction: string } {
  return { direction: randomPick(roadGraph[state.place]) };
}

/**
 * A fixed route goes through all the village's places.
 */
export const mailRoute = [
  "Alice's House",
  'Cabin',
  "Alice's House",
  "Bob's House",
  'Town Hall',
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  'Shop',
  "Grete's House",
  'Farm',
  'Marketplace',
  'Post Office',
];

/**
 * A robot that follows a fixed route. Defaults to mailRoute.
 * @param state - The current state of the village.
 * @param memory - The robot's memory.
 * @returns The direction to move to and the robot's memory.
 */
export function routeRobot(
  state: VillageState,
  memory: string[]
): { direction: string; memory: string[] } {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

/**
 * Finds a route to a destination in the village.
 * @param graph - The graph of the village's roads.
 * @param from - The starting location.
 * @param to - The destination location.
 * @returns The route to the destination.
 */
export function findRoute(
  graph: Record<string, string[]>,
  from: string,
  to: string
): string[] {
  let work: { at: string; route: string[] }[] = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
  return [];
}

/**
 * A robot that moves by the closest parcel in the route.
 * @param state - The current state of the village.
 * @param route - The route to follow.
 * @returns The direction to move to and the robot's memory.
 */
export function goalOrientedRobot(
  { place, parcels }: VillageState,
  route: string[]
): { direction: string; memory: string[] } {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}
