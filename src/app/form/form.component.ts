import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  serverConnectionStatus = false
  serverConnectionStatusContent = "Server is not created!"
  firstnameContent = "FirstName"
  lastnameContent = "LastName"
  emailContent = "Email"
  passwordContent = "Password"
  userContent = ""

  constructor() {
    setTimeout(() => {
      this.toggleServerConnectionStatus()
    }, 1000)
  }

  toggleServerConnectionStatus() {
    this.serverConnectionStatus = !this.serverConnectionStatus
    this.serverConnectionStatusContent = this.serverConnectionStatus ? "Server connected" : "Server is not created"
  }

  createdUserData() {
    this.userContent = `${this.firstnameContent} ${this.lastnameContent} successfully created`
  }
}
