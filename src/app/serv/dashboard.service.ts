import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  total_ticket:string = "http://localhost/ixt/api/getTotalTicket";
  total_employee:string = "http://localhost/ixt/api/getTotalEmployee";
  total_issue:string = "http://localhost/ixt/api/getTotalFixedIssue";
  total_feedback:string = "http://localhost/ixt/api/getTotalFeedback";
  daily_ticket:string = "http://localhost/ixt/api/getDailiyTicket";
  ticket_process:string = "http://localhost/ixt/api/getTicketOnProcess";
  complete_task:string = "http://localhost/ixt/api/getCompleteTask";

  constructor(private httpClient : HttpClient) { }

  getTotalTicket(){
    return this.httpClient.get(this.total_ticket);
  }
  getTotalEmployee(){
    return this.httpClient.get(this.total_employee);
  }
  getTotalFixedIssue(){
    return this.httpClient.get(this.total_issue);
  }
  getTotalFeedback(){
    return this.httpClient.get(this.total_feedback);
  }
  getTicketOnProcess(){
    return this.httpClient.get(this.ticket_process);
  }
  getCompleteTask(){
    return this.httpClient.get(this.complete_task);
  }

}
