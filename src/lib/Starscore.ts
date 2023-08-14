import type {
  StarscoreInstance,
  CreateStarscore,
  StarscoreOptions,
} from './interfaces/core'

class Starscore implements StarscoreInstance {
  options: Required<StarscoreOptions> = {
    container: '',
  }

  constructor(opts: StarscoreOptions) {
    this.options = Object.assign(this.options, opts)
  }

  render() {}
}

const createStarscore: CreateStarscore = (opts) => {
  return new Starscore(opts)
}

export { Starscore, createStarscore }
