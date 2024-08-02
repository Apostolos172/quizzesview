import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";

@Injectable({providedIn: 'root'})
export class GeneralService {

  constructor(private messageService: MessageService) {
  }

  showDangerError(error: any) {
    this.messageService.add({severity: 'warn', summary: 'Fail', detail: error.message});
  }


  showAcceptance() {
    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
  }

  showMessage(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Notification', detail: message });
  }

  showRejection() {
    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }

  showSuccess(entityType: string, id: number, operation: string) {
    let message: string = entityType + ' with id ' + id + ' ' + operation + ' successfully.';
    this.messageService.add({severity: 'success', summary: 'Success', detail: message});
  }

  showSuccessDeletion(entityType: string, id: number | null) {
    if (id != null) {
      this.showSuccess(entityType, id, 'deleted');
    }
  }

  showSuccessRemoval(entityType: string, id: number | null) {
    if (id != null) {
      this.showSuccess(entityType, id, 'removed');
    }
  }

  showSuccessAddition(entityType: string, id: number | null) {
    if (id != null) {
      this.showSuccess(entityType, id, 'saved');
    }
  }
}
