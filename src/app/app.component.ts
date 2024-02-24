import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'text-format-app';

  isBold = false;
  isItalic = false;
  isUnderline = false;
  isStrikethrough = false;
  currentFontSize = '14px';

  @ViewChild('editableDiv') editableDiv!: ElementRef;

  toggleFormat(format: string): void {
    switch (format) {
      case 'bold':
        this.isBold = !this.isBold;
        break;
      case 'italic':
        this.isItalic = !this.isItalic;
        break;
      case 'underline':
        this.isUnderline = !this.isUnderline;
        break;
      case 'strikethrough':
        this.isStrikethrough = !this.isStrikethrough;
        break;
    }
    document.execCommand(format);
  }

  changeTextColor(color: string): void {
    document.execCommand('foreColor', false, color);
  }

  changeFontSize(fontSize: string): void {
    this.currentFontSize = fontSize;
    document.execCommand('fontSize', false, fontSize);
  }

  changeFontFamily(fontFamily: string): void {
    document.execCommand('fontName', false, fontFamily);
  }
}
