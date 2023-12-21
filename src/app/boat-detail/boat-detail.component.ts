import { Component, Input, OnInit } from '@angular/core';
import { Boat } from '../boat';
import { ActivatedRoute, Router } from '@angular/router';
import { BOATS } from '../mock.boat';
import { BoatCardDirective } from '../boat-card.directive';
import { BoatTypeColorPipe } from '../boat-type-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boat-detail',
  standalone: true,
  imports: [BoatCardDirective, BoatTypeColorPipe, CommonModule],
  templateUrl: './boat-detail.component.html',
  styles: ``
})
export class BoatDetailComponent implements OnInit {
  boat: Boat | undefined;
  boats: Boat[] = BOATS;

  constructor(private router: ActivatedRoute) { }

  @Input() boatId: number = 0;

  ngOnInit(): void {
    const boatId: number = Number(this.router.snapshot.paramMap.get('id'));
    this.boat = this.boats.find((b: Boat) => b.id === boatId);
  }

  goBack(): void {
    window.history.back();
  }
}
