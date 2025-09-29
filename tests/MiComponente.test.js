import { mount } from '@vue/test-utils'
import MiComponente from '../src/components/MiComponente.vue'

test('Debe renderizar un h1 con el texto correcto', () => {
  const wrapper = mount(MiComponente, {
    props: { titulo: 'Mi titulo de prueba' }
  })

  // Verifica que exista un h1
  const h1 = wrapper.find('h1')
  expect(h1.exists()).toBe(true)

  // Verifica el contenido del h1
  expect(h1.text()).toBe('Mi titulo de prueba')
})

test('No debe mostrar el h1 si el titulo está vacío', () => {
  const wrapper = mount(MiComponente, {
    props: { titulo: '' }
  })

  expect(wrapper.find('h1').exists()).toBe(false)
})