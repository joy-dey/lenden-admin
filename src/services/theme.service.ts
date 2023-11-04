// theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkTheme = false;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  initializeTheme(): void {
    const storedTheme = localStorage.getItem('app-theme');
    this.isDarkTheme = storedTheme === 'dark';
    this.renderer.setAttribute(document.body, 'data-theme', this.isDarkTheme ? 'dark' : 'light');
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('app-theme', this.isDarkTheme ? 'dark' : 'light');
    this.renderer.setAttribute(document.body, 'data-theme', this.isDarkTheme ? 'dark' : 'light');
  }
}
