import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SelectionComponent } from './components/selection/selection.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SectionComponent } from './home/section/section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from'@angular/common/http';
import { CreateComponent } from './create/create.component';
import { TextComponent } from './create/text/text.component';
import { EditComponent } from './edit/edit.component';
import { NavEComponent } from './edit/nav-e/nav-e.component';
import { EditionComponent } from './edit/edition/edition.component';
import { ListThemeComponent } from './home/list-theme/list-theme.component';
import { List2ThemeComponent } from './home/list2-theme/list2-theme.component';
import { ListComponent } from './components/list/list.component';
import { List3Component } from './edit/list3/list3.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ContentComponent } from './busqueda/content/content.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NavBarComponent } from './busqueda/nav-bar/nav-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentsComponent,
        ToolsComponent,
        SelectionComponent,
        HomeComponent,
        NavbarComponent,
        SectionComponent,
        CreateComponent,
        TextComponent,
        EditComponent,
        NavEComponent,
        EditionComponent,
        ListThemeComponent,
        List2ThemeComponent,
        ListComponent,
        List3Component,
        BusquedaComponent,
        ContentComponent,
        NavBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule
    ],
})
export class AppModule { }
