import { getInfo, getItems } from '../src/index'

describe('questions module tests', () => {
  it('it should get info about the test', () => {
    const info = getInfo()
    expect(info).toBeDefined()
  })

  it('it should get test items', async () => {
    const info = getInfo()
    const items = await getItems('en')
    expect(items.length).toBe(info.questions)
  })

  it('should fetch items for all languages', async () => {
    const { languages } = getInfo()
    const fetchPromises = languages.map(async ({ code }) => {
      const items = await getItems(code)
      expect(items).toBeDefined()
    })

    await Promise.all(fetchPromises)
  })

  it('validation of question ids across languages', async () => {
    const languages = getInfo().languages.map(({ code }) => code)
    const questions = await Promise.all(languages.map(async languageId => await getItems(languageId)))
    const ids: string[][] = questions.map((question) => question.map(q => q.id))

    ids.reduce((previous: string[], current: string[]) => {
      expect(previous).toEqual(current)
      return current
    })
  })

  it('keeps simplified Chinese choices in the same display order', async () => {
    const items = await getItems('zh-cn')
    const expectedLabels = [
      '完全不符合',
      '比较不符合',
      '不确定',
      '比较符合',
      '完全符合'
    ]

    const plusItem = items.find(({ keyed }) => keyed === 'plus')
    const minusItem = items.find(({ keyed }) => keyed === 'minus')

    expect(plusItem?.choices.map(({ text }) => text)).toEqual(expectedLabels)
    expect(minusItem?.choices.map(({ text }) => text)).toEqual(expectedLabels)
    expect(plusItem?.choices.map(({ score }) => score)).toEqual([1, 2, 3, 4, 5])
    expect(minusItem?.choices.map(({ score }) => score)).toEqual([5, 4, 3, 2, 1])
  })
})
