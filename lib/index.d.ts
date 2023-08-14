interface StarscoreOptions {
  container: string | HTMLElement
}

interface StarscoreInstance {
  render(): void
}

type CreateStarscore = (opts: StarscoreOptions) => StarscoreInstance

declare const createStarscore: CreateStarscore

export { StarscoreInstance, StarscoreOptions, createStarscore };
