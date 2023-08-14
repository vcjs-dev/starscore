export interface StarscoreDetail {
  score: number
  description: string
}

export type StarscoreDetailFn = (score: number) => string

export interface StarscoreOptions {
  container: string | HTMLElement
  count?: number
  size?: string | number
  color?: string
  gutter?: string | number
  voidColor?: string
  disabledColor?: string
  icon?: string
  voidIcon?: string
  allowHalf?: boolean
  readonly?: boolean
  disabled?: boolean
  scoreDetails?: StarscoreDetail[] | StarscoreDetailFn
}

export interface ScoreItemsRecord {
  score: number
  active: boolean
  proportion: number
  width: string
}

export interface StarscoreInstance {
  container: HTMLElement | null

  get scoreItems(): ScoreItemsRecord[]

  initCSSVars(): void

  getContainer(): HTMLElement

  generateRadioGroupHTML(): string

  generateRadioHTML(item: ScoreItemsRecord): string

  render(): void

  destory(): void
}

export type CreateStarscore = (opts: StarscoreOptions) => StarscoreInstance
