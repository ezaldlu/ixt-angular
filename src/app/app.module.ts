import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
// import { DashboardService } from './serv/dashboard.service';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TicketComponent } from './ticket/ticket.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { ApprovalComponent } from './approval/approval.component';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { JobRoleComponent } from './job-role/job-role.component';
import { DepartmentComponent } from './department/department.component';
import { DeptDivisionComponent } from './dept-division/dept-division.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { TechnicianComponent } from './technician/technician.component';
import { ReportTechnicianComponent } from './report-technician/report-technician.component';
import { SlaComponent } from './sla/sla.component';
import { InformationComponent } from './information/information.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TicketComponent,
    ListTicketComponent,
    ApprovalComponent,
    MyTicketComponent,
    AssignmentComponent,
    EmployeeComponent,
    UserComponent,
    JobRoleComponent,
    DepartmentComponent,
    DeptDivisionComponent,
    CategoryComponent,
    SubcategoryComponent,
    TechnicianComponent,
    ReportTechnicianComponent,
    SlaComponent,
    InformationComponent,
    NewsComponent,

  ],
  providers: [TicketComponent,ListTicketComponent,ApprovalComponent,MyTicketComponent,AssignmentComponent,EmployeeComponent,UserComponent,JobRoleComponent,DepartmentComponent,DeptDivisionComponent,CategoryComponent,SubcategoryComponent,TechnicianComponent,ReportTechnicianComponent,SlaComponent,InformationComponent,NewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
