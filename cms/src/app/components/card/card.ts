import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {DatePipe, NgIf} from '@angular/common';

/**
 * @title Card overview
 */
@Component({
  selector: 'card',
  templateUrl: './card.html',
  styleUrl: './card.css',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule, DatePipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Card {
  @Input() post: any;
}
