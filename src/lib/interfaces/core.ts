export interface StarscoreDetail {
  score: number
  description: string
}

export type StarscoreDetailFn = (currentScore: number) => string

export type StarscoreIconTypes = 'star' | 'heart'

export interface StarscoreOptions {
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
  showDescription?: boolean
  descriptionColor?: string
  descriptionFontSize?: string | number
  onChange?: (score: number) => void
}

export interface ScoreItemsRecord {
  score: number
  active: boolean
  proportion: number
  width: string
}

export interface StarscoreInstance {
  container: HTMLElement | null

  value: number

  hoverValue: number | null

  readonly renderValue: number

  readonly scoreItems: ScoreItemsRecord[]

  setOptions(opts: StarscoreOptions, reRender?: boolean): StarscoreInstance

  setValue(value: number): StarscoreInstance

  getValue(): number

  emitChange(newValue: number): void

  scoreValueFormat(e: MouseEvent): number | null

  clickListener(e: MouseEvent): void

  onScoreHoverHandler(e: MouseEvent): void

  onScoreLeaveHandler(): void

  getScoreItemFromChild(target: HTMLElement): HTMLElement | null

  initCSSVars(): void

  getContainer(): HTMLElement

  generateRadioGroupHTML(): string

  generateRadioHTML(item: ScoreItemsRecord): string

  generateScoreDescHTML(): string

  getIcon(): string

  getVoidIcon(): string

  render(): void

  destory(): void
}

export type CreateStarscore = (opts: StarscoreOptions) => StarscoreInstance
