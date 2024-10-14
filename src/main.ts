import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: HttpClientModule }, // Provide HttpClientModule
    { provide: FormsModule }        // Provide FormsModule for two-way binding
  ]
})
.catch(err => console.error(err));
