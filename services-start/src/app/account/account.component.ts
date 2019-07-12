import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New status: '+ status)
    );
  }

  onSetTo(status: string) {
    this.accountService.addAcount(name, status)
    this.accountService.statusUpdated.emit(status);
  }
}
