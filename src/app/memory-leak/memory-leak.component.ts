import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  imports: [],
  templateUrl: './memory-leak.component.html',
  styleUrl: './memory-leak.component.scss'
})
export class MemoryLeakComponent implements OnInit {

  ngOnInit(): void {
    interval(1000).subscribe(console.log)
  }
}
