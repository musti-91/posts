// @flow

export const createConstants = (stages: *, prefix: *, namespace: *) =>
  (stages.reduce(
    (accumulator, current) => ({
      ...accumulator,
      [current.toUpperCase()]: `${prefix}/${namespace}/${current}`
    }),
    {}
  ): any);
