import { Component, OnInit, Input, Output, EventEmitter, Injector, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'vm-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() votes: number = 0;
  @Output() voteChanges: EventEmitter<number> = new EventEmitter<number>();

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  upvote() {
    this.voteChanges.emit(this.votes = ++this.votes);
    this.changeDetectorRef.detectChanges();
  }

  downvote() {
    this.voteChanges.emit(this.votes = --this.votes);
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges() {
    console.log("Value changed to " + this.votes);
  }

  ngOnInit() {
    console.log("Votes component initialize with value " + this.votes);
  }

}
