interface StarscoreDetail {
  score: number
  description: string
}

type StarscoreDetailFn = (score: number) => string

type StarscoreIconTypes = 'star' | 'heart'

interface StarscoreOptions {
  container: string | HTMLElement
  count?: number
  initialValue?: number
  size?: string | number
  color?: string
  gutter?: string | number
  voidColor?: string
  disabledColor?: string
  type?: StarscoreIconTypes
  icon?: string
  voidIcon?: string
  allowHalf?: boolean
  clearable?: boolean
  readonly?: boolean
  disabled?: boolean
  scoreDetails?: StarscoreDetail[] | StarscoreDetailFn
  onChange?: (score: number) => void
}

interface ScoreItemsRecord {
  score: number
  active: boolean
  proportion: number
  width: string
}

interface StarscoreInstance {
  container: HTMLElement | null

  value: number

  get renderValue(): number

  get scoreItems(): ScoreItemsRecord[]

  setOptions(opts: StarscoreOptions, reRender?: boolean): StarscoreInstance

  setValue(value: number): StarscoreInstance

  getValue(): number

  emitChange(newValue: number): void

  getScoreItemFromChild(target: HTMLElement): HTMLElement | null

  initCSSVars(): void

  getContainer(): HTMLElement

  generateRadioGroupHTML(): string

  generateRadioHTML(item: ScoreItemsRecord): string

  getIcon(): string

  getVoidIcon(): string

  render(): void

  destory(): void
}

type CreateStarscore = (opts: StarscoreOptions) => StarscoreInstance

declare const createStarscore: CreateStarscore

export { StarscoreInstance, StarscoreOptions, createStarscore };
