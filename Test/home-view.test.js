import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '../src/views/home-view.js'; // Importa el componente Home

describe('home-view', () => {
  it('calls valUser correctly', async () => {
    // Crea una instancia del componente
    const el = await fixture(html`<home-view></home-view>`);
    
    // Accede al elemento input
    const input = el.shadowRoot.querySelector('input');
    
    // Simula la entrada de un nombre de usuario
    input.value = 'testUser';
    input.dispatchEvent(new Event('input'));
    
    // Llama al método valUser
    el.valUser();
    
    // Espera a que el componente se actualice
    await elementUpdated(el);
    
    // Verifica que el componente haya redirigido correctamente
    expect(window.location.href).to.equal('/game?userName=testUser&score=SCORE'); // Reemplaza 'SCORE' con el valor esperado del score
  });

  it('handles empty input correctly', async () => {
    // Crea una instancia del componente
    const el = await fixture(html`<home-view></home-view>`);
    
    // Simula la entrada de un nombre de usuario vacío
    const input = el.shadowRoot.querySelector('input');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    
    // Llama al método valUser
    el.valUser();
    
    // Espera a que el componente se actualice
    await elementUpdated(el);
    
    // Agrega las aserciones necesarias para verificar el comportamiento cuando el input está vacío
    // Por ejemplo, puedes verificar si se muestra un mensaje de error en la consola
  });
});