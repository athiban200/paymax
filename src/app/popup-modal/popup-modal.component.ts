import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {
  constructor(){

  }
  @Input() isVisible: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(){

  }

  closePopup() {
    this.isVisible = false;
    this.onClose.emit();
  }
}
