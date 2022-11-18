import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentsComponent } from './components/contents/contents.component';
import { IndexComponent } from './components/index/index.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectionComponent } from './components/selection/selection.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SectionComponent } from './home/section/section.component';
import { FooterHComponent } from './home/footer-h/footer-h.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from'@angular/common/http';
import { CreateComponent } from './create/create.component';
import { NavComponent } from './create/nav/nav.component';
import { FooterEComponent } from './create/footerE/footerE.component';
import { TextComponent } from './create/text/text.component';
@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ContentsComponent,
    IndexComponent,
    ToolsComponent,
    HeaderComponent,
    FooterComponent,
    SelectionComponent,
    HomeComponent,
    NavbarComponent,
    SectionComponent,
    FooterHComponent,
    CreateComponent,
    NavComponent,
    FooterEComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
