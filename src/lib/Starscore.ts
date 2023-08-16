import type {
  StarscoreInstance,
  CreateStarscore,
  StarscoreOptions,
  ScoreItemsRecord,
  StarscoreIconTypes,
} from './interfaces/core'
import { CONSTANTS } from './CONSTANTS'
import { addClass, css } from 'fourdom'
import { safetyNumberToPx } from './utils'
import StarIcon from './icons/star.svg?raw'
import VoidStarIcon from './icons/void-star.svg?raw'
import HeartIcon from './icons/heart.svg?raw'
import VoidHeartIcon from './icons/void-heart.svg?raw'

export const builtInIcons: Record<
  StarscoreIconTypes,
  { icon: string; voidIcon: string }
> = {
  star: {
    icon: StarIcon,
    voidIcon: VoidStarIcon,
  },
  heart: {
    icon: HeartIcon,
    voidIcon: VoidHeartIcon,
  },
}

class Starscore implements StarscoreInstance {
  options: Required<StarscoreOptions> = {
    container: '',
    count: 5,
    initialValue: 0,
    size: '20px',
    gutter: '4px',
    color: '#ee0a24',
    voidColor: '#c8c9cc',
    disabledColor: '#c8c9cc',
    icon: '',
    type: 'star',
    voidIcon: '',
    clearable: false,
    readonly: false,
    disabled: false,
    allowHalf: false,
    scoreDetails: () => '',
    showDescription: false,
    descriptionColor: '#909399',
    descriptionFontSize: '13px',
    onChange: () => {},
  }

  container: HTMLElement | null = null

  value: number = 0

  hoverValue: number | null = null

  setValue(value: number) {
    if (value < 0) {
      this.value = 0
    } else if (value > this.options.count) {
      this.value = this.options.count
    } else {
      this.value = value
    }

    this.render()

    return this
  }

  getValue() {
    return this.value
  }

  setOptions(opts: StarscoreOptions, reRender?: boolean) {
    this.options = Object.assign(this.options, opts)
    if (reRender) {
      this.initCSSVars()
      this.render()
    }
    return this
  }

  constructor(opts: StarscoreOptions) {
    this.options = Object.assign(this.options, opts)

    this.value = this.options.initialValue

    this.clickListener = this.clickListener.bind(this)
    this.onScoreHoverHandler = this.onScoreHoverHandler.bind(this)
    this.onScoreLeaveHandler = this.onScoreLeaveHandler.bind(this)

    this.initCSSVars()

    this.render()
  }

  getIcon() {
    if (this.options.icon) {
      return this.options.icon
    }

    return builtInIcons[this.options.type].icon
  }

  getVoidIcon() {
    if (this.options.voidIcon) return this.options.voidIcon

    return builtInIcons[this.options.type].voidIcon
  }

  get renderValue() {
    return this.hoverValue !== null ? this.hoverValue : this.value
  }

  get scoreItems() {
    const res = []
    const score = this.renderValue

    for (let i = 1; i <= this.options.count; i++) {
      const percent = i - score

      const proportion =
        score >= i
          ? 1
          : percent >= 1
          ? 0
          : Number.parseFloat((1 - percent).toFixed(1))

      res.push({
        score: i,
        active: score >= i,
        proportion,
        width: `${proportion * 100}%`,
      })
    }

    return res
  }

  getScoreItemFromChild(target: HTMLElement): HTMLElement | null {
    if (target.dataset.score) {
      return target
    }

    if (target.parentElement) {
      return this.getScoreItemFromChild(target.parentElement)
    }

    return null
  }

  emitChange(newValue: number): void {
    if (this.value !== newValue) {
      this.options.onChange && this.options.onChange(newValue)
      this.setValue(newValue)
    }
  }

  scoreValueFormat(e: MouseEvent): number | null {
    if (this.options.disabled || this.options.readonly) return null

    const target = e.target as HTMLElement

    const offsetX = e.offsetX

    const scoreElement = this.getScoreItemFromChild(target)

    if (scoreElement) {
      let scoreValue = Number(scoreElement.dataset.score)

      if (this.options.allowHalf && offsetX <= scoreValue / 2) {
        scoreValue = scoreValue - 0.5
      }

      const value =
        this.options.clearable && this.value === scoreValue ? 0 : scoreValue

      return value
    }

    return null
  }

  clickListener(e: MouseEvent) {
    const value = this.scoreValueFormat(e)
    if (value !== null) {
      this.emitChange(value)
    }
  }

  onScoreHoverHandler(e: MouseEvent) {
    const value = this.scoreValueFormat(e)

    if (value !== null && this.hoverValue !== value) {
      this.hoverValue = value
      this.render()
    }
  }

  onScoreLeaveHandler() {
    this.hoverValue = null
    this.render()
  }

  registerListeners() {
    this.removeListeners()

    this.getScoreItemEl().forEach((el) => {
      el.addEventListener('click', this.clickListener)
      el.addEventListener('mouseenter', this.onScoreHoverHandler)
      el.addEventListener('mouseleave', this.onScoreLeaveHandler)
    })
  }

  removeListeners() {
    this.getScoreItemEl().forEach((el) => {
      el.removeEventListener('click', this.clickListener)
      el.removeEventListener('mouseenter', this.onScoreHoverHandler)
      el.removeEventListener('mouseleave', this.onScoreLeaveHandler)
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
      '--starscore-description-color': this.options.descriptionColor,
      '--starscore-description-font-size': safetyNumberToPx(
        this.options.descriptionFontSize,
      ),
    })
  }

  generateRadioHTML(item: ScoreItemsRecord) {
    return `
      <div class="${CONSTANTS.scoreItemClassName}" data-score="${item.score}">
        <span class="${
          CONSTANTS.scoreVoidIconClassName
        }">${this.getVoidIcon()}</span>
        <span class="${CONSTANTS.scoreIconClassName}" style="width:${
          item.width
        }">${this.getIcon()}</span>
      </div>
    `
  }

  generateRadioGroupHTML() {
    const radios = this.scoreItems.reduce((res, v) => {
      res += `${this.generateRadioHTML(v)}`
      return res
    }, '')

    const disabled = this.options.disabled ? 'disabled' : ''
    const readonly = this.options.readonly ? 'readonly' : ''

    return `
      <div class="${CONSTANTS.scoreWrapperClassName} ${disabled} ${readonly}">${radios}</div>
    `
  }

  generateScoreDescHTML() {
    if (!this.options.showDescription) return ''

    let descHTML = ''
    if (Array.isArray(this.options.scoreDetails)) {
      const item = this.options.scoreDetails.find(
        (v) => v.score === this.renderValue,
      )

      if (item) {
        descHTML = item.description
      } else {
        descHTML = ''
      }
    } else {
      descHTML = this.options.scoreDetails(this.renderValue)
    }

    return `<div class="${CONSTANTS.scoreDescWrapperClassName}">${descHTML}</div>`
  }

  render() {
    const container = this.getContainer()

    const content = `${this.generateRadioGroupHTML()}${this.generateScoreDescHTML()}`

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
