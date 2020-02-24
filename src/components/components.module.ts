import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab';
import { ComponentsShowPasswordComponent } from './components-show-password/components-show-password';
@NgModule({
	declarations: [TabComponent,
    ComponentsShowPasswordComponent],
	imports: [],
	exports: [
    TabComponent,
    ComponentsShowPasswordComponent]
})
export class ComponentsModule {}
