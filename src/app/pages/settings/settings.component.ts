import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  settingOptions: Array<{title: string, options: Array<{icon: string, name: string,}>}>

  constructor() {
    this.settingOptions = [
      {
        title: 'Account Settings',
        options: [
          { icon: 'ri-user-smile-line', name: 'Profile Information' },
          { icon: 'ri-lock-password-line', name: 'Change Password' },
          { icon: 'ri-user-forbid-line', name: 'Account Deactivation' },
        ]
      },
      {
        title: 'Preferences',
        options: [
          { icon: 'ri-palette-line', name: 'Themes' },
          { icon: 'ri-translate-2', name: 'Language' },
        ]
      },
      {
        title: 'Backup & Restore',
        options: [
          { icon: 'ri-upload-cloud-2-line', name: 'Backup Data' },
          { icon: 'ri-history-line', name: 'Restore Data' },
        ]
      },
      {
        title: 'Feedback & Support',
        options: [
          { icon: 'ri-question-answer-line', name: 'FAQs' },
          { icon: 'ri-question-line', name: 'Contact Support' },
        ]
      },
      {
        title: 'About',
        options: [
          { icon: 'ri-file-list-line', name: 'Privacy Policy' },
          { icon: 'ri-file-copy-2-line', name: 'Terms of Service' },
          { icon: 'ri-information-line', name: 'Version: 1.0.0' },
        ]
      },
    ]
  }
}
