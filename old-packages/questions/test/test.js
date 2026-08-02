const test = require('ava')
const { dependencies, devDependencies } = require('../package.json')
const { getInfo, getItems, getTranslators } = require('../')
const dropModules = ['husky']
const isDropped = module => !dropModules.includes(module)

test('basic check', t => {
  t.true(true, 'ava works ok')
})

if (dependencies) {
  Object.keys(dependencies)
    .filter(isDropped)
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(import(dependency)))
    )
}

if (devDependencies) {
  Object.keys(devDependencies)
    .filter(isDropped)
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(import(dependency)))
    )
}

test('basic inventory tests', t => {
  t.truthy(getInfo(), 'info ok')
  t.truthy(getItems(), 'items ok')
  t.truthy(getItems('no'), 'items with lang ok')
})

test('it throws error for lang xx', t => {
  const expectedErrorMessage = 'Inventory not found. Try another language input.'
  try {
    getItems('xx')
  } catch (e) {
    t.is(e.message, expectedErrorMessage)
  }
})

test('validation of question ids across languages', t => {
  const languages = getInfo().languages.map(({ id }) => id)
  if (languages.length <= 1) t.pass()
  const questions = languages.map(getItems)
  const ids = questions.map(qs => qs.map(q => q.id))
  ids.reduce((previous, current) => {
    if (previous !== false) {
      t.deepEqual(previous, current, 'ids match')
    }
    return current
  }, false)
})

test('it returns sorted inventory items', t =>
  t.truthy(getItems('en', false), 'sorted items ok')
)

test('test all languages', t => {
  const { languages } = getInfo()
  languages.map(({ id }) => t.truthy(getItems(id, false), `${id} items ok`))
})

test('simplified Chinese choices keep the same display order', t => {
  const items = getItems('zh-cn')
  const expectedLabels = [
    '完全不符合',
    '比较不符合',
    '不确定',
    '比较符合',
    '完全符合'
  ]
  const plusItem = items.find(({ keyed }) => keyed === 'plus')
  const minusItem = items.find(({ keyed }) => keyed === 'minus')

  t.deepEqual(plusItem.choices.map(({ text }) => text), expectedLabels)
  t.deepEqual(minusItem.choices.map(({ text }) => text), expectedLabels)
  t.deepEqual(plusItem.choices.map(({ score }) => score), [1, 2, 3, 4, 5])
  t.deepEqual(minusItem.choices.map(({ score }) => score), [5, 4, 3, 2, 1])
})

test('translators are credited', t => {
  const translators = getTranslators()
  translators.forEach(translator => {
    t.truthy(translator.name !== undefined)
    t.truthy(translator.language !== undefined)
  })
})
