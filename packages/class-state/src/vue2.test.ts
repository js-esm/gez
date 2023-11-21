import Vue, { reactive, watch, nextTick, set, del } from 'vue2'
import { test, assert } from 'vitest'
import { connectState } from './connect'
import { createState } from './create'

test('base', async () => {
  const state = createState({
    proxy: reactive,
    set,
    del
  })
  const connectStore = connectState(state)
  class User {
    public name = ''
    public $setName (name: string) {
      this.name = name
    }
  }
  const user = connectStore(User, 'user')
  let updateValue
  watch(() => {
    return user.name
  }, (name) => {
    updateValue = name
  })
  user.$setName('test')
  await nextTick()
  assert.equal(updateValue, 'test')

  user.$setName('test2')
  await nextTick()
  assert.equal(updateValue, 'test2')
})

test('base2', async () => {
  const state = createState({
    proxy: reactive,
    set: Vue.set,
    del: Vue.delete
  })
  const connectStore = connectState(state)
  class User {
    public name = ''
    public $setName (name: string) {
      this.name = name
    }
  }
  const user = connectStore(User, 'user')
  user.$setName('test')
  let updateValue
  watch(() => {
    return user.name
  }, (name) => {
    updateValue = name
  })
  user.$setName('test2')
  await nextTick()
  assert.equal(updateValue, 'test2')
})
