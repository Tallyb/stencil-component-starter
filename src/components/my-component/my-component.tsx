import { Component, Prop } from '@stencil/core';
import { inform } from '@utils/logger'
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    inform ('rendering component');
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
