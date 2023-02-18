import Button from "./button/Button";
import MyComponent from "./MyComponent.vue";
import MyComponent2 from "./MyComponent2.vue";
import type { App } from 'vue'

function install(app: App) {
	app.component('MyComponent', MyComponent)
	app.component('MyComponent2', MyComponent2)
	app.component('Button', Button)
}

export {
  install,
  MyComponent,
  MyComponent2,
  Button
}

