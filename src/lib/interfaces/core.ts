export interface StarscoreOptions {
  container: string | HTMLElement
}

export interface StarscoreInstance {
  render(): void
}

export type CreateStarscore = (opts: StarscoreOptions) => StarscoreInstance
