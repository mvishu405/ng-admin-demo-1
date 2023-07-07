import { Component } from '@angular/core';

@Component({
    selector: 'ngAdmin-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
    isSidebarOpen = true;

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    logout() {}
}
