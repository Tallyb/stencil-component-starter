import { MyComponent } from './my-component';
import { render } from '@stencil/core/dist/index'
describe('my-component', () => {
  it('should build', () => {
    expect(new MyComponent()).toBeTruthy();
  });

  describe('rendering', async () => {
    let element: HTMLMyComponentElement;
    beforeEach(async () => {
    });

    it('should work without parameters', async () => {
      let page =  await browser.newPage();
      await page.setContent('<my-component></my-component>');
      let comp = await page.$('my-component');
      console.log('COMP', comp);
      let c = await page.$eval('my-component', e => e.render());
      comp = await page.$('my-component');
      
      console.log('COMP', comp);

      //console.log('TESTWINDOW', testWindow);
      expect(comp).toBeTruthy();
    });

    // it('should work with a first name', async () => {
    //   element.first = 'Peter';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    // });

    // it('should work with a last name', async () => {
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    // });

    // it('should work with both a first and a last name', async () => {
    //   element.first = 'Peter';
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    // });
  });
});
