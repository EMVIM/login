import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { InfoPanelComponent } from '../../components/info-panel/info-panel.component';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
// npm install @angular/cdk --save

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent, InfoPanelComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  showInfoPanel = true;
  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Crear un breakpoint personalizado para 992px
    const customBreakpoint = '(min-width: 992px)';

    // Observar cambios en el breakpoint
    this.breakpointObserver
      .observe([customBreakpoint])
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: BreakpointState) => {
        // True cuando la pantalla es >= 992px, false en caso contrario
        this.showInfoPanel = state.matches;
        console.log('Panel visible:', this.showInfoPanel); // Para depuración
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
