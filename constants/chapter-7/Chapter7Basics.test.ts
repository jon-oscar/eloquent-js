import {
  VillageState,
  buildGraph,
  findRoute,
  goalOrientedRobot,
  locations,
  mailRoute,
  randomPick,
  randomRobot,
  roads,
  routeRobot,
  runRobot,
} from './Chapter7Basics';

describe('Chapter7Basics', () => {
  describe('buildGraph', () => {
    it('should build a graph', () => {
      const graph = buildGraph(roads);
      expect(graph).toEqual({
        "Alice's House": ["Bob's House", 'Cabin', 'Post Office'],
        "Bob's House": ["Alice's House", 'Town Hall'],
        Cabin: ["Alice's House"],
        'Post Office': ["Alice's House", 'Marketplace'],
        'Town Hall': ["Bob's House", "Daria's House", 'Marketplace', 'Shop'],
        "Daria's House": ["Ernie's House", 'Town Hall'],
        "Ernie's House": ["Daria's House", "Grete's House"],
        "Grete's House": ["Ernie's House", 'Farm', 'Shop'],
        Farm: ["Grete's House", 'Marketplace'],
        Shop: ["Grete's House", 'Marketplace', 'Town Hall'],
        Marketplace: ['Farm', 'Post Office', 'Shop', 'Town Hall'],
      });
    });
  });

  describe('randomPick', () => {
    it('should pick a random item from an array', () => {
      const array = [1, 2, 3, 4, 5];
      const choice = randomPick(array);
      expect(array.includes(choice)).toBe(true);
    });
  });

  describe('VillageState', () => {
    it('should move to a new destination and deliver parcels', () => {
      const state = new VillageState('Post Office', [
        { place: 'Post Office', address: "Alice's House" },
      ]);
      const newState = state.move("Alice's House");
      expect(newState.place).toBe("Alice's House");
      expect(newState.parcels).toEqual([]);
    });

    it('should not move to an invalid destination', () => {
      const state = new VillageState('Post Office', [
        { place: 'Post Office', address: "Alice's House" },
      ]);
      const newState = state.move('Town Hall');
      expect(newState.place).toBe('Post Office');
      expect(newState.parcels).toEqual([
        { place: 'Post Office', address: "Alice's House" },
      ]);
    });

    it('should generate random parcels', () => {
      const state = new VillageState('Post Office', [
        { place: 'Post Office', address: "Alice's House" },
      ]);

      // default to 5 parcels
      const newDefaultState = state.random();
      expect(newDefaultState.place).toBe('Post Office');
      expect(newDefaultState.parcels).toHaveLength(5);

      // Can pass argument for different number of parcels
      const newState = state.random(10);
      expect(newState.place).toBe('Post Office');
      expect(newState.parcels).toHaveLength(10);
    });
  });

  describe('runRobot', () => {
    it('should run a robot', () => {
      // mock console log
      jest.spyOn(console, 'log').mockImplementation(() => {});

      const state = new VillageState('Post Office', [
        { place: 'Post Office', address: "Alice's House" },
      ]);
      const robot = jest
        .fn()
        .mockReturnValue({ direction: "Alice's House", memory: {} });
      runRobot(state, robot, {});

      // test console log
      expect(console.log).toHaveBeenCalledWith("Moved to Alice's House");
      expect(console.log).toHaveBeenCalledWith('Done in 1 turns');

      // restore console log
      jest.spyOn(console, 'log').mockRestore();
    });
  });

  describe('randomRobot', () => {
    it('should move to a random destination', () => {
      const state = new VillageState('Post Office', [
        { place: 'Post Office', address: "Alice's House" },
      ]);
      const { direction } = randomRobot(state);
      expect(locations.has(direction)).toBe(true);
    });
  });

  describe('routeRobot', () => {
    it('should move to the next destination in the route', () => {
      const state = new VillageState('Post Office', [
        { place: 'Post Office', address: "Alice's House" },
      ]);

      // first move
      const { direction, memory } = routeRobot(state, []);
      expect(direction).toBe(mailRoute[0]);
      expect(memory).toStrictEqual(mailRoute.slice(1));

      // second move
      const { direction: nextDirection, memory: nextMemory } = routeRobot(
        state,
        memory
      );
      expect(nextDirection).toBe(mailRoute[1]);
      expect(nextMemory).toStrictEqual(mailRoute.slice(2));
    });
  });

  describe('findRoute', () => {
    it('should find a route to a destination for 1 road', () => {
      const graph = buildGraph(roads);
      const route = findRoute(graph, "Alice's House", "Bob's House");
      expect(route).toStrictEqual(["Bob's House"]);
    });

    it('should find a route to a destination for more than 1 road', () => {
      const graph = buildGraph(roads);
      const route = findRoute(graph, "Alice's House", "Grete's House");
      expect(route).toStrictEqual([
        "Bob's House",
        'Town Hall',
        'Shop',
        "Grete's House",
      ]);
    });
  });

  describe('goalOrientedRobot', () => {
    it('should move by closest package in the route', () => {
      // mock console log
      jest.spyOn(console, 'log').mockImplementation(() => {});

      const state = new VillageState('Post Office', [
        { place: 'Post Office', address: "Alice's House" },
        { place: "Alice's House", address: "Bob's House" },
        { place: 'Post Office', address: "Daria's House" },
      ]);

      // first move
      const { direction, memory } = goalOrientedRobot(state, []);
      expect(memory).toStrictEqual([]);
      expect(direction).toBe("Alice's House");

      runRobot(state, goalOrientedRobot, []);
      expect(console.log).toHaveBeenCalledWith("Moved to Alice's House");
      expect(console.log).toHaveBeenCalledWith("Moved to Bob's House");
      expect(console.log).toHaveBeenCalledWith('Moved to Town Hall');
      expect(console.log).toHaveBeenCalledWith("Moved to Daria's House");
      expect(console.log).toHaveBeenCalledWith('Done in 4 turns');

      // restore console log
      jest.spyOn(console, 'log').mockRestore();
    });
  });
});
