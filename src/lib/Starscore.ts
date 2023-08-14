import type {
  StarscoreInstance,
  CreateStarscore,
  StarscoreOptions,
  ScoreItemsRecord,
} from './interfaces/core'
import { CONSTANTS } from './CONSTANTS'
import { addClass, css } from 'fourdom'
import StarIcon from './icons/star.svg?raw'
import VoidStarIcon from './icons/void-star.svg?raw'
import { safetyNumberToPx } from './utils'

class Starscore implements StarscoreInstance {
  options: Required<StarscoreOptions> = {
    container: '',
    count: 5,
    size: '20px',
    gutter: '4px',
    color: '#ee0a24',
    voidColor: '#c8c9cc',
    disabledColor: '#c8c9cc',
    icon: '',
    voidIcon: '',
    readonly: false,
    disabled: false,
    allowHalf: false,
    scoreDetails: [
      { score: 1, description: '' },
      { score: 2, description: '' },
      { score: 3, description: '' },
      { score: 4, description: '' },
      { score: 5, description: '' },
    ],
  }

  container: HTMLElement | null = null

  value: number = 0

  get scoreItems() {
    const res = []

    for (let i = 1; i <= this.options.count; i++) {
      const percent = i - this.value

      const proportion =
        this.value >= i
          ? 1
          : percent >= 1
          ? 0
          : Number.parseFloat((1 - percent).toFixed(1))

      res.push({
        score: i,
        active: this.value >= i,
        proportion,
        width: `${proportion * 100}%`,
      })
    }

    return res
  }

  constructor(opts: StarscoreOptions) {
    this.options = Object.assign(this.options, opts)

    this.clickListener = this.clickListener.bind(this)

    this.initCSSVars()

    this.render()
  }

  clickListener(e: MouseEvent) {
    console.log(e)
  }

  registerListeners() {
    this.removeListeners()

    this.getScoreItemEl().forEach((el) => {
      el.addEventListener('click', this.clickListener)
    })
  }

  removeListeners() {
    this.getScoreItemEl().forEach((el) => {
      el.removeEventListener('click', this.clickListener)
    })
  }

  getScoreItemEl() {
    return this.getContainer().querySelectorAll(
      `.${CONSTANTS.scoreItemClassName}`,
    ) as NodeListOf<HTMLElement>
  }

  initCSSVars(): void {
    css(this.getContainer(), {
      '--starscore-size': safetyNumberToPx(this.options.size),
      '--starscore-color': this.options.color,
      '--starscore-void-color': this.options.voidColor,
      '--starscore-disabled-color': this.options.disabledColor,
      '--starscore-gutter': safetyNumberToPx(this.options.gutter),
    })
  }

  generateRadioHTML(item: ScoreItemsRecord) {
    return `
      <div class="${CONSTANTS.scoreItemClassName}" data-score="${item.score}">
        <span class="${CONSTANTS.scoreVoidIconClassName}">${VoidStarIcon}</span>
        <span class="${CONSTANTS.scoreIconClassName}" style="width:${item.width}">${StarIcon}</span>
      </div>
    `
  }

  generateRadioGroupHTML() {
    const radios = this.scoreItems.reduce((res, v) => {
      res += `${this.generateRadioHTML(v)}`
      return res
    }, '')

    return `
      <div class="${CONSTANTS.scoreWrapperClassName}">${radios}</div>
    `
  }

  render() {
    const container = this.getContainer()

    const content = `${this.generateRadioGroupHTML()}`

    addClass(container, CONSTANTS.containerClassName)

    container.innerHTML = content

    this.registerListeners()
  }

  destory() {
    this.removeListeners()
  }

  getContainer() {
    if (this.container) return this.container

    const el =
      typeof this.options.container === 'string'
        ? (document.querySelector(`${this.options.container}`) as HTMLElement)
        : this.options.container

    if (el) {
      this.container = el
    }

    return el
  }
}

const createStarscore: CreateStarscore = (opts) => {
  return new Starscore(opts)
}

export { Starscore, createStarscore }
